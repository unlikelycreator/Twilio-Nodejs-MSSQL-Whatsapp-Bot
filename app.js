const sql = require("mssql");
const { config } = require("./dbConfig.js");
const accountSid = process.env.accountSid;  //Edit This
const authToken = process.env.authToken;   //Edit This
const client = require("twilio")(accountSid, authToken);

const sendMessages = async () => {
  try {
    const pool = await sql.connect(config);
    const request = pool.request();

    const query = `
      SELECT messageId, ReferenceNumber, RecipientName, RecipientMobile, DocumentIds, MessageBody
      FROM WhatsAppMessage
      WHERE Status = 1 AND SentAttemptCount < 5
    `;
    const result = await request.query(query);
    const messages = result.recordset;

    for (const message of messages) {
      const { messageId, RecipientMobile, MessageBody, DocumentIds } = message;

      const fileNames = DocumentIds.split(",").map((fileName) =>
        fileName.trim()
      );

      const mediaUrls = fileNames.map(
        (fileName) => `http://domain-name-here/folder-name/${fileName}.pdf`   //Edit This
      );
      console.log(mediaUrls);

      try {
        const sentMessage = await client.messages.create({
          body: MessageBody,
          from: "whatsapp:+twilio mobile no ",  //Edit This put actual twilio number
          to: `whatsapp:+${RecipientMobile}`,
          mediaUrl: mediaUrls,
        });

        console.log("WhatsApp message sent:", sentMessage.sid);
        console.log("WhatsApp message sent:", sentMessage);
        // Update message table
        const updateMessageQuery = `
        UPDATE WhatsAppMessage
        SET Status = 0, SentAttemptCount = SentAttemptCount + 1, LastAttemptOn = GETDATE()
        WHERE messageId = ${messageId}
      `;
        await request.query(updateMessageQuery);

        // Insert into messageLog table (success case)
        const logResult = "success";
        const logDesc = "WhatsApp message sent successfully";
        const logQuery = `
          INSERT INTO WhatsAppMessageLog (messageId, RecipientMobile, LogResult, LogDesc, loggedOn)
          VALUES ('${messageId}', '${RecipientMobile}', '${logResult}', '${logDesc}', GETDATE())
        `;
        await request.query(logQuery);
      } catch (error) {
        console.error("Error sending WhatsApp message:", error);

        // Update message table
        const updateMessageQuery = `
          UPDATE Message
          SET SentAttemptCount = SentAttemptCount + 1
          WHERE messageId = ${messageId}
        `;
        await request.query(updateMessageQuery);

        // Insert into messageLog table (failure case)
        const logResult = "fail";
        const logDesc = error.message;
        const logQuery = `
          INSERT INTO WhatsAppMessageLog (messageId, RecipientMobile, LogResult, LogDesc, LoggedOn)
          VALUES ('${messageId}', '${RecipientMobile}', '${logResult}', '${logDesc}', GETDATE())
        `;
        await request.query(logQuery);
      }
    }

    pool.close(); // Close the connection pool
  } catch (error) {
    console.error("Error fetching messages from the Message table:", error);
  }
};

sendMessages();

setInterval(() => {
  sendMessages();
}, 10000);
