//main.js

//Challenge2

function writeToDom(input, id){
    document.getElementById(id).innerHTML += input;
}

var winnerList = [
    {season: '1999-2000', team: 'Real Madrid', country: 'Spain'},
    {season: '2000-2001', team: 'Bayern Munich', country: 'Germany'},
    {season: '2001-2002', team: 'Real Madrid', country: 'Spain'},
    {season: '2002-2003', team: 'Milan', country: 'Italy'},
    {season: '2003-2004', team: 'Porto', country: 'Portugal'},
    {season: '2004-2005', team: 'Liverpool', country: 'England'},
    {season: '2005-2006', team: 'Barcelona', country: 'Spain'},
    {season: '2006-2007', team: 'Milan', country: 'Italy'},
    {season: '2007-2008', team: 'Manchester United', country: 'England'},
    {season: '2008-2009', team: 'Barcelona', country: 'Spain'},
    {season: '2009-2010', team: 'Internazionale', country: 'Italy'},
    {season: '2010-2011', team: 'Barcelona', country: 'Spain'},
    {season: '2011-2012', team: 'Chelsea', country: 'England'},
    {season: '2012-2013', team: 'Bayern Munich', country: 'Germany'},
    {season: '2013-2014', team: 'Real Madrid', country: 'Spain'},
    {season: '2014-2015', team: 'Barcelona', country: 'Spain'},
    {season: '2015-2016', team: 'Real Madrid', country: 'Spain'},
    {season: '2016-2017', team: 'Real Madrid', country: 'Spain'},
  ];
  var country = 'Spain'  // should return 9
  //var country = 'Portugal'  // should return 1
  //var country = 'Russia'  // should return 0
  var champcount = 0;
   
function countChampionships2(input){
        champcount ++;
    }
function countrySearch(array2,input2){
   for (var k = 0; k < array2.length; k++){
       if(array2[k].country === input2){
        countChampionships2(input2);
       }
    }
}

countrySearch(winnerList, country);
var chall2Html = "<h3>Challenge 3: " + country + "&nbsp" + champcount + "</h3>";
writeToDom(chall2Html, "challenge2");