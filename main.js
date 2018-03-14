//main.js
//main.js

//challenge3

function writeToDom (input, id){
    document.getElementById(id).innerHTML += "<h3>Challege 3: " + input + "</h3>";
}

var test31 = {a: 5, b:2, operator: "add"};  //7
var test32 = {a: 5, b:2, operator: "subtract"}; //3
var test33 = {a: 5, b:2, operator: "multiply"}; //10
var test34 = {a: 5, b:2, operator: "divide"}; //2.5

function arithmetic(object) {
    var response3;
    var mult3 = object.a * object.b;
    var div3 = object.a / object.b;
    var add3 = object.a + object.b;
    var sub3 = object.a - object.b;
    if (object.operator === "multiply") {
           var response3 =  mult3;
        } else if (object.operator === "divide" ) {
            var response3 = div3;
        } else if (object.operator === "add" ) {  
            var response3 = add3;
        } else {
            var response3 = sub3;
        }
        writeToDom(response3, "challenge3");
    }
arithmetic(test32);


