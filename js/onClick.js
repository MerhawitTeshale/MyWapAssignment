
function clickedButton(){
    alert('You Clicked Me')
}

function tipCalculator(){
    //document.getElementById("output");
    var a=parseInt(document.getElementById("subtotal").value);
    var b=parseInt(document.getElementById("tip").value);
   // var result=0;
    //result=a+b;
    var lab=document.getElementById("result");
    lab.value=a+b;
    
   // alert(result);
}
//assignment one 
function gogogo() {
    alert("Yay, it works!");
}

function changeText(){
    var temp=document.getElementById("output");
    temp.value="Hey Merry!"
}
function swapText(){
    // for tags that are not of form type which doesnt have the value
    //attribut there is a key word .innerHTML to get there value
    let span=document.getElementById("output2");
    let textbox=document.getElementById("textbox");
    let temp=span.innerHTML;
    span.innerHTML=textbox.value;
    textbox.value=temp;
}