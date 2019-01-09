let express = require('express')
let app= express()
app.use(express.static(__dirname))
// 配置跨域白名单
// 127.0.0.1和localhost 也是跨域  
let whitelist =['http://127.0.0.1:3000']
// * 不支持cookie跨域 
app.use(function(req,res,next){
   let origin = req.headers.origin;
   if(whitelist.includes(origin)){
        // 允许哪个域名进行跨域
       res.header('Access-Control-Allow-Origin',origin)
       // 允许携带哪个请求头跨域 多个用逗号,分隔   
       res.header('Access-Control-Allow-Headers','name')
      //允许哪种方法进行跨域 方法要大写 
       res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPITIONS')
     //允许携带cookie跨域
      res.header('Access-Control-Allow-Credentials',true)
      // 预检的存活时间 单位是s 
      res.header('Access-Control-Max-Age',600)
      //允许前端获取响应头（Expose 暴露）
      res.header('Access-Control-Expose-Headers','name')
      //处理 OPITIONS 直接返回
       if(req.method==='OPITIONS'){
          res.end()
       }
     next()
   }
 
})
app.post('/data',function(req,res){
    res.json({
      code:200,
      msg:'请求成功'
    })
})
app.listen(3000,()=>{
    console.log('3000启动成功')
})
