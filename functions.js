//create a function that can be used with sort to compare string length

function compareLength(a, b) {
    a = a.toString();
    b = b.toString();
    if (a.length < b.length) {
        return -1;
    } 
    if (a.length > b.length) {
        return 1;
    } 
    return 0;
} 

var array = ["string", "hi", "tall", "really long string", 9, 328402345803];
//console.log(array.sort(compareLength)); //[ 9, 'hi', 'tall', 'string', 328402345803, 'really long string' ]

//create an array of objects
var arrayOfObjects = [
    {name: "katie", email: "katie@outlook.com"},
    {name: "alexandra", email: "alexandra@hotmail.com"},
    {name: "tom", email: "tom@gmail.com"}
    ];

//sort arrayOfObjects by longest name
function sortLongest (a, b, parameter) {
    if (a.name.length < b.name.length) {
        return -1;
    } 
    if (a.name.length > b.name.length) {
        return 1;
    } 
    return 0;
} 

//console.log(arrayOfObjects.sort(sortLongestName)); 

//sort arrayOfObjects by email alphabetical order
function sortAlphabeticalEmail(a, b) {
    if (a.email.charAt(0) < b.email.charAt(0)) {
        return -1;
    } 
    if (a.email.charAt(0) > b.email.charAt(0)) {
        return 1;
    } 
    return 0;
} 

//console.log(arrayOfObjects.sort(sortAlphabeticalEmail)); 

//create function to be used with array.prototype.map that returns square
function square(a){
    return a*a;
}

//console.log([2, 3, 4, 5].map(square));

//create function to be used with map
//take an object and square its num property

function squareNum(a){
    return a.num*a.num;
}

var arrayOfNumObjects = [
    {num: 2, otherNum: "four"},
    {num: 17, otherNum: "five"},
    {num: 104, otherNum: "six"}
    ];

//console.log(arrayOfNumObjects.map(squareNum));

//perform an operation

function operationMaker(operation){
        switch (operation) {
        case "add":
            return function(a, b){
                return a+b;
            };
            break;
        case "substract":
            return function(a, b){
                return a-b;
            };
            break;
        case "mult":
            return function(a, b){
                return a*b;
            };
            break;
        case "div":
            return function(a, b){
                return a/b;
            };
            break;
        default:
            return 0;
    }
}

var adder = operationMaker("add")(55, 10);
console.log(adder); //15

var multiplier = operationMaker("mult")(45,76);
console.log(multiplier);