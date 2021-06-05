const express=require('express')
const mysql= require('mysql');

const app=express();




var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'test_db',
    port:'3306'
});

con.connect((err)=>{
    if(err){
        throw err;
    } else{
        console.log('connected');
    }
    
});
con.query('CREATE TABEL testtable')

const port =process.env.PORT||5000;
app.listen(port);
console.log(`listening on port ${port}`);