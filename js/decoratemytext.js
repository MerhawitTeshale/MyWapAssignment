
function pageLoad(){
    var biggerBtn= document.getElementById("btn-big");
    biggerBtn.onclick= biggerClick;
}

// function biggerClick(){
//     document.getElementById("mytext").style.fontSize='24pt';
//     //word.style.fontSize="24pt";
//   //  alert("Hello world!");
// }
function onChange(){
    document.getElementById("mytext").style.fontWeight='bold';
    document.getElementById("mytext").style.color='green'; 
    document.getElementById("mytext").style.textDecoration='underline';
}
window.onload= function(){
    var biggerBtn=document.getElementById('btn-big');
    biggerBtn.onclick= function(){
        document.getElementById('mytext').style.fontSize='24pt';
    };
};

