$('#loader').hide();
$(()=>{

    $('#btn').on('click',(event)=>{
        event.preventDefault();
        //console.log($("#terms").get(0));
       // console.log(reqword);
      var reqword=document.getElementById('term').value;
       //console.log(reqword);
       $.post("http://localhost:5000/getAll",{word:reqword})
       .done((data)=>{
           showresult(data);
       })
       .fail((err)=>{
           console.log(err);
       })
       .always(()=>{
            $('#loader').show();});
  
    $('#loader').hide(); 
    });
   
});

showresult=(val)=>{
    $('#displayresult').empty();
    for (let i=0;i<val.length;i++){
        $('#displayresult').append(`<li> (${val[i].wordtype})::${val[i].definition}</li>`)
    }
    
}

// var xhttp = new XMLHttpRequest();
// xhttp.open("GET","app.js",true);
// xhttp.send(reqword);