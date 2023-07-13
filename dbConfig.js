const config = {
    server: 'server-name',   //Edit This
    user: 'sa',   //Edit This
    password: 'server-password',  //Edit This
    database: 'database-name',  //Edit This
    driver: 'msnodesqlv8',   //Edit This
    options: {
      trustServerCertificate: true,
      trustedConnection: true
    },
  };
  
  module.exports = { config };
  
