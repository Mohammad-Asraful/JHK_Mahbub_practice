// দ্বারা
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144.
/* const fibo = [0, 1]
for (let i = 2; i <= 10; i++) {
   fibo[i] = fibo[i - 1] + fibo[i - 2];

}
console.log(fibo) */

// with function
/* function fibonacciFunction() {
   const fibonacci = [0, 1]
   for (i = 2; i <= 15; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
   }
   console.log(fibonacci)
}
fibonacciFunction() */

// with function return
/* function fibonacciFunctionReturn(number) {
   const fibonacci = [0, 1]
   for (i = 2; i <= number; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
   }
   return fibonacci;
}
let fiboFunc = fibonacciFunctionReturn(13)
console.log(fiboFunc) */

// 
function fibonacciFunctionReturn(number) {
   if (typeof number !== "number" || number < 2) {
      return "please give me a positive number greater than 2"
   }
   const fibonacci = [0, 1]
   for (i = 2; i <= number; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
   }
   return fibonacci;
}
let fiboFunc = fibonacciFunctionReturn(5)
console.log(fiboFunc)