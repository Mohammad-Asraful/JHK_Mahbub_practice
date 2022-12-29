// 1. variable
var favouriteBook = '4 hour work week'

// 2. Array
var bookList = ['positioning', 'hooked', 'start with why', 'shoe dog']
var shoeDogIndex = bookList.indexOf('shoe dog');
bookList[1] = 'Story Brand'; // change the value 

bookList.push('Small Giant')
bookList.pop()

// 3. Conditional
if (bookList[1] == 'hooked') {
    console.log("I am hooked")
} else {
    console.log("I am not hooked")
}

// 4. Loop
// while loop
var i = 0;  // loop variable
while (i < 15) {
    console.log(i)
    console.log("looping Looping Looping")
    i++
}


// for loop
for (i = 0; i < 15; i++) {
    console.log(i)
    console.log("Number")
}