var data = document.getElementById("data");
var history_ = document.getElementById("history");
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ['#','%','$']


function identifier(){
    var forSeparated = data.value;
    var separated = forSeparated.split("");
    var lengthData = [separated.length];
    var sumN = 0;
    var sumS = 0;
    var sumL = 0;

    console.log(separated);
    
    for(var i = 0; i<separated.length; i++){
        for(var j = 0; j<letters.length; j++){    
            if(separated[i] == letters[j]){
                console.log(i+" "+j+"  Is a letter");
                sumL = sumL+1;   
            }
        }
        for(var j = 0; j<numbers.length; j++){    
            if(separated[i] == numbers[j]){
                console.log(i+" "+j+"  Is a number");
                sumN = sumN + 1;
            }
        }   
        for(var j = 0; j<symbols.length; j++){    
            if(separated[i] == symbols[j]){
                console.log(i+" "+j+"  Is a symbol");
                sumS = sumS + 1;
            }
        }    
    }


    if (sumN == separated.length){
        alert("Is a Number ♥")
    }
    else if(sumL == separated.length){
        alert("Is a Word ♥")
    }
    else if(sumS == separated.length){
        alert("Is a Symbol ♥")
    }
    else{
        alert("Error!")
    }
    
    history_.innerHTML = history_.innerHTML + data.value + "<br>";    
    
}   

