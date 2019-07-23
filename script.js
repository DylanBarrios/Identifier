var data = document.getElementById("data");
var history_ = document.getElementById("history");
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = [1,2,3,4,5,6,7,8,9,0];
var lettYnum = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9];
var symbols = ['#','%','$']
var isN = " is a Number";
var isI = " is an Identifier";
var isS = " is a Symbol";
var isE = " is an Error";

function identifier(){
    var forSeparated = data.value;
    var separated = forSeparated.split("");
    var lengthData = [separated.length];
    var sumN = 0;
    var sumS = 0;
    var sumL = 0;
    var sumT = 0;

    console.log(separated);
    
    for(var i = 0; i<separated.length; i++){
        for(var j = 0; j<letters.length; j++){    
            if(separated[i] == letters[j]){
                sumL = sumL+1;  
            }
        }
        for(var j = 0; j<numbers.length; j++){    
            if(separated[i] == numbers[j]){
                sumN = sumN + 1;
            }
        }   
        for(var j = 0; j<symbols.length; j++){    
            if(separated[i] == symbols[j]){
                sumS = sumS + 1;
            }
        }
        for(var j = 0; j<lettYnum.length; j++){    
            for(var k = 0; k<letters.length; k++){    
                if(separated[i] == lettYnum[j] && separated[0] == letters[k]){
                    sumT = sumT+2; 
                    k=letters.length;
                    j=lettYnum.length;
                }
            }
        }           
    }


    if (sumN == separated.length){
        alert(isN);
        history_.innerHTML = history_.innerHTML + data.value + isN +"<br>";
    }
    else if(sumL == separated.length || sumT == (2*separated.length)){
        alert(isI);
        history_.innerHTML = history_.innerHTML + data.value + isI +"<br>";    
    }
    else if(sumS == separated.length){
        alert(isS);
        history_.innerHTML = history_.innerHTML + data.value + isS +"<br>";
    }
    else{
        alert(isE);
        history_.innerHTML = history_.innerHTML + data.value + isE.fontcolor("red") +"<br>";
    }
}   

