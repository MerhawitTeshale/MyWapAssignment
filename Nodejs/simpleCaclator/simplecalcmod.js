var result=0;
exports.add=function(req,res,vals){
    result=parseInt(vals.fisrt)+parseInt(vals.second);
    dispaly(req,res,vals);
    
};
exports.subtract=function(req,res,vals){
    result=parseInt(vals.fisrt)-parseInt(vals.second);
    dispaly(req,res,vals);
};
exports.division=function(req,res,vals){
    result=parseInt(vals.fisrt)/parseInt(vals.second);
    dispaly(req,res,vals);
};
exports.multiply=(req,res,vals)=>{
    result=parseInt(vals.fisrt)*parseInt(vals.second);
    dispaly(req,res,vals);
}
var dispaly=(req,res,vals)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset=\"utf-8\">");
    res.write("<title>Calculator Web Site</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<p style=\"background-color:salmon; color:white; font-size:24pt; font-family:Monotype Corsiva\" >The sum is: ");
    res.write(String(result));
    res.write("</p>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
}