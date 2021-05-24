window.onload=function(){
    var myfun=null;   
   let start=document.getElementById('start');
   start.onclick= function(){
       if(myfun==null){
        myfun=setInterval(() => {
            alert('me again');
         }, 2000);
       }
   }
    let end= document.getElementById('end');
    end.onclick=function(){
        if(myfun!=null){
            clearInterval(myfun);
        }
        
    };

    let option= document.getElementById('select');
    option.onchange=function(){

        if (option.value=='excersise'){
            let mytext= document.getElementById('text-box').value=ANIMATIONS["Exercise"];
        }
        
        if (option.value=='juggler'){
            let mytext= document.getElementById('text-box').value=ANIMATIONS["Juggler"];
        }
        if (option.value=='bike'){
            let mytext= document.getElementById('text-box').value=ANIMATIONS["Bike"];
        }
        
        if (option.value=='dive'){
            let mytext= document.getElementById('text-box').value=ANIMATIONS["Dive"];
        }
    };

    let speed= document.getElementById('speed');
    speed.onchange=function(){
        alert(`turbo`);
    };

    function makeSizer(size){
        return function(){
            document.textarea.style.fontSize=size+'pt';
        };
    }

    var size7 = makeSizer(7);
    var size10 = makeSizer(10);
    var size12 = makeSizer(12);
    var size16 = makeSizer(16);
    var size24 = makeSizer(24);
    var size32 = makeSizer(32);

    document.getElementById('tiny').onchange = size7;
    document.getElementById('small').onchange = size10;
    document.getElementById('medium').onchange = size12;
    document.getElementById('large').onchange= size16;
    document.getElementById('extralarge').onchange = size24;
    document.getElementById('xxl').onchange = size32;

//     let size=document.getElementById('size');
//     size.onchange=function(){
//         alert(`${size.value}`);
//         let textArea= document.getElementById('text-box');
//         if (size.value='tiny'){
//            textArea.style.fontSize='7pt'; 
//         }
//         else if (size.value='small'){
//             textArea.style.fontSize='10pt'; 
//         }
//         else if (size.value='medium'){
//             textArea.style.fontSize='12pt'; 
//         }
//         else if (size.value='large'){
//             textArea.style.fontSize='16pt'; 
//         }
//         else if (size.value='extralarge'){
//             textArea.style.fontSize='24pt'; 
//         }
//         else if (size.value='xxl'){
//             textArea.style.fontSize='32pt'; 
//         }
//     }
};