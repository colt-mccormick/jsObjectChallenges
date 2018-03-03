//main.js

function printToDom(stringToPrint, divId){
    document.getElementById(divId).innerHTML += stringToPrint; 
  }

//Challenge1


var players = [{ name: "Bob", scores: [10, 65] }, 
            { name: "Bill", scores: [90, 5] }, 
            { name: "Charlie", scores: [40, 55] }
        ]; // Displays "Bill"

for (var i =0; i < players.length; i++){
    //sum of scores
    players[i].total = 0; 
    for (var j=0; j < players[i].scores.length; j++){
        players[i].total += players[i].scores[j];
    }
     
        //console.log('player: ', players[i].name)
    }
    for (var totals = 0; totals < players.length; totals++){
        var maxTotal;
        if(platyers[totals].total<=100){
            
        }
    }
    //console.log("total: ", players[i].total)
}