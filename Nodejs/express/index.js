var express=require('express');
var app=express();

var bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    res.sendFile('./index.html');
});

app.post('/submit-student-data',(req,res)=>{
    var name=req.body.fname+' '+req.body.lname;
    res.send(name+' Submitted Successfully!')
});

var server=app.listen(5000,()=>{
    console.log('server is running....');
});