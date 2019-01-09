let express = require('express')
let app= express()
// 静态文件中间件 
app.use(express.static(__dirname))
app.listen(3000)