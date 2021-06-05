const question1=[3,1,4,1,5];
const question2=[1,1,2,3,5];
const question3=[1,4,9,16,25];
const question4=[2,3,5,7,11];
const question5=[1,2,4,8,16];
const answer=[9,8,36,13,32];


 const num={
     q1:question1,
     q2:question2,
     q3:question3,
     q4:question4,
     q5:question5
 }
 console.log(num.q1[0]);
 exports.num;
 $("#score")
exports.displayres=(req,res,vals)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write("<head><meta charset=\"utf-8\">");
    res.write("<title>Calculator Web Site</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>The Number Quiz</h1>")
    res.write("<p>Your current score is: ");
    res.write(String(score));
    res.write("</p>");
    res.write("<p>You have completed the Number Quiz, with a Score of ");
    res.write(String(score));
    res.write("out of 5 </p>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
}
 exports.displayques=(req,res,vals)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write("<head><meta charset=\"utf-8\">");
    res.write("<title>Calculator Web Site</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>The Number Quiz</h1>");
    res.write("<p>your score is ");
    res.write(String(score));
    res.write("</p>");
    res.write("<p> Guess the next number in the sequence</p>");
    res.write(String(num.q2));
    res.write("Your answer:<input type=\"text\" name=\"result\">");
    res.write("<input type=\"submit\" name=\"submit\">");

 }