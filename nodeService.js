const Service = require('node-windows').Service;

const svc = new Service({
    name: "WhatsappBot",
    description: "Whatsapp Message Sending Bot",
    script: "E:\\react-mssql\\Tasker-authentication\\WhatsappBot\\app.js"
})

svc.on('install', function(){
    svc.start()
})

svc.install()