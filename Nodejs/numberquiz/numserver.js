var http=require('http');
var url=require('url');
var fs=require('fs');
var numberquiz=require('./numberQuiz');

http.createServer((req,res)=>{
    var q=url.parse(req.url,true);
    var filename="."+q.pathname;
   
    if(q.pathname=='/numquiz.js'){
       numberquiz.displayques(req,res,vals);

    }else fs.readFile(filename,(err,data)=>{
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200);
        res.write(data);
        return res.end();
    });

    
}).listen(8080);