#### 跨域
1. jsonp 只支持get方法
2. cors跨域 
 跨域资源共享 cross-origin resoure sharing 
 需要后端配置才可以 可以支持所有方法 
3.  postmessage  
data：顾名思义，是传递来的消息
source：发送消息的窗口对象
origin：发送消息窗口的源（协议+主机+端口号）
4. location.hash   
   ` 有a、b、c 三个页面  a、b 同域  c是单独 
    a想访问c  a 给c传一个hash值 c 把hash值传递给b,b将结果放到a的hash值中
    c页面需要动态创建iframe `
```
  let iframe =document.createElement('iframe');
  iframe.src ='http://localhost:3000/b.html#youare';
  document.body.appendChild(iframe)
   # b 页面 放值   window.parent.parent.location.hash =location.hash;
   # a页面监听 
   window.onhashchange=function(){
            console.log(location.hash)
        } 
```
5. window.name 
```
   a、b 同一个域名 c独立
    a获取c的数据，a先引用c c把值放在window.name上，把a的引用地址改到b
   a页面 firstload 防止死循环

   let firstload = true; 
   function load(){
        let frame= document.getElementById('frame');
        
        if(firstload){
            frame.src ='http://localhost:3000/b.html';
           firstload = false; 

        }else{
            console.log(frame.contentWindow.name)
        }
  #b页面  
  #c页面    
  window.name = '你好'
```

6. docmument.domain
```
只适合使用在二级域名的情况 
模拟 在etc/hots 设置二级域名   
 window hots目录 
 c:\windows\system32\drivers\etc 
  访问的页面 
  http://a.abc.com:3000/a.html  http://b.abc.com:3000/b.html 
```
7. websoket
```
前端 一般用socket.io进行兼容 
let socket = new WebSocket('ws:localhost:3000');
    socket.onopen=function(){
        socket.send('你好')
    }
    socket.onmessage=function(e){
      console.log(e.data)
    }
后端  npm install ws
let express = require('express');
let app = express();
//npm install ws
let Websocket =require('ws');
<!-- 创建websoket服务器 -->
let wss = new Websocket.Server({port:3000})
<!-- 创建连接和发送消息 -->
wss.on('connection',function(ws){
    ws.on('message',function(data){
      console.log(data)
      ws.send('你也好')
    })
})
```
8. webpack代理 
```
vue-cli 2.0 
    config/index.js 
    proxyTable: {
      '/':{
        target:'http://localhost:3000',
        changeOrigin:true,
        pathRewrite:{
          '^/':'/'
        }
      }
    }
    config/dev.env.js 
    module.exports = merge(prodEnv, {
      NODE_ENV: '"development"',
      API_HOST:'/'  +需要加API_HOST
   })
   vue-cli3.0 
   在vue.config.js里面进行配置
    devServer: {
       proxy: 'http://localhost:3000'
     }
```
9. nginx反向代理

10. node中间件代理 
 