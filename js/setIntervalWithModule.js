(function(){
    'use strict'
    var timer=null;
    window.onload=function(){
        var btn=document.getElementById('btn');
        btn.onclick=ruddyTimer;
    };

    var ruddyTimer=(function(){
      if(timer===null){
          timer=setInterval(rudy,1000);
      }else{
          clearInterval(timer);
          timer=null;
      }
    })();

    function rudy (){
        document.getElementById("output").innerHTML+='Rudy!'
    }
})();