
function clickedButton(){
    alert('You Clicked Me')
}
var a
var b
function tipCalculator(){
    //document.getElementById("output");
     a=parseInt(document.getElementById("subtotal").value);
     b=parseInt(document.getElementById("tip").value);
   // var result=0;
    //result=a+b;
    var freearea=document.getElementById("spanarea");
    var lab;
    lab=calculateTip();
    freearea.innerHTML=lab;
    
   // alert(result);
}
//assignment one 
function gogogo() {
    alert("Yay, it works!");
}

function calculateTip(){
    var subtotal=a;
    var percent=b;

    var result=a+(a*(b/100));
    return result;
}