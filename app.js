$(document).ready(function(){
  //get data
   var data = $(".hide").text()
  data = data.split("\n");
  $('#submit').click(function(){

    var n = $("#number").val();
    n = Number(n);
    var word = generatePassword(n,data);
    $("#number").val("");
     $("#passphrase-container").empty();
    $("#passphrase-container").append("<div><h2>" + word +"</h2></div>");
  });

  console.log(data[0]);
});


function generatePassword( length,data){
  var curString = "";
  var passphrase = "";
  for( var i = 0; i < length; i++){
    curString = "";
    for(var j = 0; j < 5; j++){
      var n = Math.floor(Math.random()*60)%6 + 1;
      curString += String(n);
    }
     var word = getString(curString,data);
     if(i == length-1){
      passphrase += word;
     }else{
      passphrase = passphrase + word + " ";
     }
  }
  return passphrase;

}

function getString( string, data ){
  for(var i = 0; i < data.length; i++){
    console.log(data[i].slice(0,5) + " vs "+ string);
    if(data[i].slice(0,5) == string){
      console.log("IN");
      return data[i].split(" ")[1];
    }
  }
}
