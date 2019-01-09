let express  = require('express');
let app = express()
let Websocket = require('ws')
// 建立一个Websocket的服务器 
let wss = new Websocket.Server({port:3000})
wss.on('connection',function(ws){
     ws.on('message',function(data){
        console.log(data)
        ws.send('你也好')
     })
})
