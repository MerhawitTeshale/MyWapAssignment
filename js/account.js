
(function (){

    var accname;
    var deposit;
    var givenName;
    var givenDeposit;
    var result;

    window.onload=function(){
        givenName=document.getElementById("accName");
        givenDeposit=document.getElementById("deposit");
        result=document.getElementById("disResult");
        document.getElementById("createAcc").onclick=clicked;
    };

    var CreateAccount=(function(){
            this.accname=accName;
            this.deposit=deposit
            
    }());
    
    function clicked(){
        var a1= CreateAccount(givenName,givenDeposit);
       var a2= CreateAccount("Arsema",30000);
        result.value=a2.accname;
    }

   
    
    
})();