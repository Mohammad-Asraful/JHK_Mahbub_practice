// // Multiple condition
// // condition "&&" and "||" operator
var gotJob = true;
// var gotJob = false;
// var moneySaved = 150000;
var moneySaved = 2500000;
var hasFlat = true;

//      "&& - operator"
/* if (gotJob == true) {
    console.log("Cholo biye kore feli!!!");
} else {
    console.log("Tor kopale biya nai!!!")
} */

//      "&& - operator"
/* if (gotJob == true && moneySaved > 200000) {
    console.log("Cholo biye kore feli!!!");
} else {
    console.log("Tor kopale biya nai!!!")
} */

//      AND "&& - operator"
/* if (gotJob == true && moneySaved > 200000 && hasFlat == true) {
    console.log("Cholo biye kore feli!!!");
} else {
    console.log("Tor kopale biya nai!!!")
} */



// var gotJob = true;
var gotJob = false;
var moneySaved = 150000;
// var moneySaved = 2500000;
var hasFlat = true;
// var hasHouse = false;
var hasHouse = true;

//      OR "||" operator
if (gotJob == true || moneySaved > 200000) {
    console.log("Cholo biye kore feli!!!");
} else {
    console.log("Tor kopale biya nai!!!")
}

//      And "&&" and OR "||" operator
if ((gotJob == true || moneySaved > 200000) || hasHouse == true) {
    console.log("Cholo biye kore feli!!!");
} else {
    console.log("Tor kopale biya nai!!!")
}