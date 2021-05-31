$(function(){

    $(document).mousemove(function(){
        if ($('#boundary1:hover').length!=0){
                $('#boundary1').css("background-color",'red');
        }
    })
})