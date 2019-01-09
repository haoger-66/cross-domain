let express = require('express')
let app = express();

app.get('/cors',function(req,res){
     let {wd,cb} = req.query;
     if(wd ==='王帅'){
       res.send(`${cb}('很帅')`)
     }else{
      res.send(`${cb}('不认识')`)   
     }
})
app.listen(3000)