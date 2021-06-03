
var http=require('http');
var ui=require('./userInfo');

http.createServer(function(req,res){
    console.log(ui.getName()+' lives in '+ui.getLocation()+'who was born on'+ui.dob);
}).listen(8080);