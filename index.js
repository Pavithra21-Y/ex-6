const express = require('express'),
    app = express()
bodyparser=require('body-parser');
    app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
app.get("/details",(req,res)=>{
    res.send(req.query.name+"-"+req.query.email+"-"+req.query.pass+"-"+req.query.cpass);
})
app.use(bodyparser.urlencoded({express:false}))
app.post('/details',(req,res)=>{
    res.send(req.body.name +" - " + req.body.email+"-"+ req.body.pass);
   })

app.listen(3000,()=>{
    console.log("App Started");
})