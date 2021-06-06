var express= require('express');
var app=express();

app.get('/',(req,res)=>{
    res.send('<html><body><h1>Hello World from express ;)</h1></body></html>');
});

app.post('/submit-data',(req,res)=>{
    res.send('POST Request');
});

app.put('/update-date',(req,res)=>{
    res.send ('PUT Request');
});

app.delete('/delete-data',(req,res)=>{
    res.send('Delete Request');
});

var server=app.listen(5000,()=>{
    console.log('node server is running ...');
});