const Service = require('node-windows').Service;

const svc = new Service({
    name: "WhatsappBot",   //Edit This
    description: "Whatsapp Message Sending Bot",    //Edit This
    script: "E:\\react-mssql\\Tasker-authentication\\WhatsappBot\\app.js"    //Edit This
})

svc.on('install', function(){
    svc.start()
})

svc.install()
