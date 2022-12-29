var time = "10:15";
var bookPrice = 150;
var isWhiteColor = false;

// array
var partners = ['Sajid', 'Mojid', 'Nojid', 'Lajit']
var elementCount = partners.length;
var nojidIndex = partners.indexOf('nojid');
partners.push("Kajit")
partners.pop();

// conditional
if (bookPrice < 120) {
    console.log("I will buy this book")
} else {
    console.log("Mama, kichu discount den na, apni na mama!")
}

// loop
var i = 0;
while (i <= 17) {
    console.log(i)
    i++;
}

for (let i = 0; i < array.length; i++) {
    console.log(i)
}

// function
function isMoonUp() {
    return (true)
}

function isMoonUp(time) {
    if (time >= 19 && time <= 5) {
        return true;
    }
    return false;
}

var moonStatus = isMoonUp(21);



// let const

// value of variable cloud change
let price = 27;
price = 29;
price = 31;

// value of the variable will not change
const myName = "lal e lal mr. Helal"
console.log(myName);
// myName = "Asraf"   // const variable will not change...


