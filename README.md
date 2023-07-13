
# Automated Whatsapp Message Bot

A brief description of what this project does and who it's for 


## Appendix

This appendix provides additional details about the WhatsApp Message Sending Bot implemented with Twilio, Node.js, and SQL.

## Overview
The WhatsApp Message Sending Bot automates the process of sending WhatsApp messages to recipients by leveraging the Twilio API. It integrates with a SQL database to fetch messages and maintain logs of message sending status.

## Key Features
- **Integration with Twilio:** The bot utilizes the Twilio API, allowing seamless communication with the WhatsApp platform to send messages to recipients.

- **SQL Database Integration:** Messages are stored in a SQL database table named "WhatsAppMessage," ensuring persistence and easy retrieval of message data. The bot connects to the database using the mssql library.

- **Automated Message Sending:** The bot periodically fetches unsent messages from the database and sends them using the Twilio client. It continuously checks for new messages and updates the message table accordingly.

- **Media Attachment Support:** The bot supports attaching media files (e.g., PDF documents) to the WhatsApp messages. It retrieves file names from the database and generates media URLs for each file, which are then included in the message payload.

- **Logging and Error Handling:** The bot maintains a separate log table called "WhatsAppMessageLog" to record the status of each message sent. It logs successful message sends and captures any errors encountered during the process.


## Implementation details

- The bot is built with Node.js and utilizes the Express framework for handling HTTP requests.
- The mssql library is used to establish a connection with the SQL database and execute queries to retrieve messages and update tables.
- Twilio's Node.js library is integrated into the bot to interact with the Twilio API for sending WhatsApp messages.
- The bot follows an asynchronous execution model to handle multiple message sends concurrently and efficiently.
- It leverages JavaScript's async/await syntax for managing asynchronous operations, making the code more readable and maintainable.

## Deployment Considerations
- Node.js and the necessary dependencies must be installed on the deployment environment.
- Ensure the database configuration in dbConfig.js matches the target SQL database.
- Twilio credentials (AccountSid and AuthToken) should be provided in the .env file for successful authentication with the Twilio API.
- Proper error handling and logging mechanisms should be in place to monitor the bot's performance and handle any potential issues.
- It is recommended to run the bot as a service to ensure its continuous operation, especially in production environments.

## Future Enhancements
Here are some potential areas for future enhancements and customization of the WhatsApp Message Sending Bot:

- **Message Templates:** Implement a template system to enable easy customization of message content for different use cases.

- **Message Personalization:** Add support for personalized message content by incorporating dynamic data from the database.

- **Enhanced Media Handling:** Expand media attachment capabilities to support various file types and sizes.

- **User Interface:** Develop a user-friendly interface to configure and manage the bot, such as a web-based admin panel.

- **Advanced Error Handling:** Implement more robust error handling mechanisms, including retry policies and error notifications.

Please note that these enhancements are suggestions and can be tailored to meet specific requirements and use cases.


___


# Getting Started 

To Start the using the WhatsApp Bot you will need the latest version of Nodejs Installed

## Download & Install Nodejs
To download Node.js, visit the following link: [Download](https://nodejs.org/en)

Download the version recommended for most users.

## Setting - Twilio

In the project folder navigate to the `.env` file and change the `AccountSid` and `AuthToken` to your own.

## Setting - SQL Conncection

In project folder navigate to the `dbConfig.js` file. In it if you are using latest version of `MSSQL` remove the `driver`line. and change the variable for your own database.

## Updating media file Link

Navigate and open the `app.js` file and then go to `line 28` in the `filename` part replace the link with open where you will store the file.

## Creating a Service for the Bot

In the project folder, open the `nodeService.js` file. Update the `name`,`description`, and `script` variables. Make sure to enter the full path of the `app.js` file and use backward double slashes `\\` in the location link.


## Installation

To install all the project dependencies, run the following command in the terminal:

```bash
  npm install
```


## Running the app using Service

In terminal navigate to project folder and run this code

``` bash
node .\nodeService.js  

```
Then your Service should start Automatically if not go to `Windows Services` and start if manually.

## Running the Service manually (Optional)


``` bash
nodemon app.js 

```
## Authors

- [@HritikPawar](https://www.hritikpawar.netlify.app)


## FAQ

#### Q1: How does the WhatsApp Message Sending Bot work?
A1: The WhatsApp Message Sending Bot is designed to automate the process of sending WhatsApp messages using the Twilio API. It retrieves messages from a SQL database table called "WhatsAppMessage" and sends them to recipients. The bot keeps track of the message sending status in a separate table called "WhatsAppMessageLog". It supports media attachments and handles errors during the message sending process.

#### Q2: What technologies are used in this project?
A2: The WhatsApp Message Sending Bot is built using Twilio, Node.js, and SQL. It utilizes the Twilio API for sending WhatsApp messages. Node.js is used as the runtime environment, and the bot is implemented using the Express framework. The SQL database is accessed using the mssql library.


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

