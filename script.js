console.log("Hola mundo");
var data = document.getElementById("data");
var history_ = document.getElementById("history");

function identifier(){
    alert(data.value);
    history_.innerHTML = history_.innerHTML + data.value + "<br>";    
}   