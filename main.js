//main.js

function printToDom(stringToPrint, divId){
    document.getElementById(divId).innerHTML += stringToPrint; 
  }

//Challenge1


var players = [{ name: "Bob", scores: [10, 65] }, 
            { name: "Bill", scores: [90, 5] }, 
            { name: "Charlie", scores: [40, 55]}]
         // Displays "Bill"

var maxTotal = 0;
var winner; 

for (var i =0; i < players.length; i++){
    //sum of scores
    players[i].total = 0; 
    for (var j=0; j < players[i].scores.length; j++){
        players[i].total += players[i].scores[j];
    }
    if(players[i].total <= 100 && players[i].total > maxTotal){
        var maxTotal = players[i].total;
        var winner= players[i].name;
    }
}

if( maxTotal === 0){
    winner = false;
}

document.getElementById("challenge1").innerHTML = "<h3> Challenge 1: " + winner + "</h3>"