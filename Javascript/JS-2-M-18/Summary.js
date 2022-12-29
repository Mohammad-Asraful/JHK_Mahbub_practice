var tableLength = 12;
var tourDestinations = ["coxsbazar", "nepal", "vutan", "paris"];

tourDestinations.indexOf("vutan")

var fourthTourDestinations = tourDestinations[3];
tourDestinations[1] = "srilanka";
tourDestinations.push("London")
tourDestinations.pop();


if (tourDestinations[1] == "nepal") {
    console.log("Pahare ahare ahare")
} else if (tourDestinations[1] == "china") {
    console.log("chaina tor kache jamu na.")
} else if (tourDestinations.length == 4) {
    console.log("aro taka ase aro beshi ghurmu")
} else {
    console.log("kothao jamu na bashay thakmu ar mosha marmu.")
}


// // //
var eggPrice = 32;
var myBudget = 32;
if (eggPrice <= myBudget) {
    console.log("ami dim khamu")
}

if (eggPrice >= myBudget) {
    console.log("lebu diye vhat khabo.")
}