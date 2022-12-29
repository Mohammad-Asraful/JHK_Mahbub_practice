function bringSingara(taka) {
    console.log("Singara er jonno dise", taka)
    console.log("Mama singara den.")
}
var money = 250;
bringSingara(money);


// return function
function bringSingara(taka) {
    console.log("Singara er jonno dise", taka)
    console.log("Mama singara den.")
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice
    return singaraQuantity;
}
var money = 90;
var singara = bringSingara(money);
console.log("Ai nen singara", singara)