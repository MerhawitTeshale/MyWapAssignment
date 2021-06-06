var fs= require('fs');

//file creation
fs.writeFile('test.txt','node is fun',(err)=>{
//fs.appendFile('test.txt','some nigger shit',(err)=>{//this can also be used to update the file
    if(err) throw err;
    console.log('valah! magic');
});

//the open method has a flag which is w r 
fs.open('test.txt', 'r',(err,file)=>{
    if(err) throw err;
    console.log(`this even gone work ;) ${file}`);
});

//rename a file 
fs.rename('test.txt','mybaby.txt',(err)=>{
    if(err) throw err;
    console.log('see thats my baby');
});

//delete file 
// fs.unlink('test.txt',(err)=>{
//     if(err) throw err;
//     console.log('my baby is gone :(')
// });
