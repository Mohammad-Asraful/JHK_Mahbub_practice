// // // Break and Continue.
var i = 0;
while (i < 15) {
    console.log(i)
    if (i == 5) {
        break;
    }
    i++;
}

// 
for (let i = 0; i < 20; i++) {
    console.log(i)
    if (i == 10) {
        break;
    }
}

// 
var numbers = [12, 22, 23, 33, 44, 55, 66, 77, 122, 333, 109]
for (let i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    console.log(number)
    if (number > 90) {
        break;
    }

}

// 
var numbers = [12, 22, 23, 342, 111, 33, 44, 55, 66, 77, 122, 333, 109]
for (let i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 90) {
        continue;
    }
    console.log(number);
}