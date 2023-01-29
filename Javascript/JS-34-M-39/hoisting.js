print5()
print10() // Error

for (let i = 0; 100 >= i; i++) {
   console.log(i)
}
// console.log('first', i)   // error

function print5() {
   console.log('Inside print: ', 5)
}

var print10 = function () {
   console.log('Inside print10: ', 10)
}
