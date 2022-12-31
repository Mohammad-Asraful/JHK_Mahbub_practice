/* 
                     topic
                     // toLowercase
                     // toUppercase
                     // indexOf
                     // includes
                     // startWith
                     // endWith
                     // push
*/


const products = [
   'Dell hardcore i29 200GB laptop',
   'iphone 1TB camera flashlight Phone',
   'yellow laptop with black camera',
   'Dell 1X59 Lenovo commercial yoga laptop',
   'LG supernova laptop',
   'HTC low price Phone',
   'Dell purple color phone with Laptop'
];
let searching = 'laptop'
// indexOf
const output = [];
for (const product of products) {
   if (product.toLowerCase().indexOf(searching) != -1) {
      // output.push(product)
   }
}
// console.log(output)

for (const product of products) {
   if (product.toLowerCase().includes(searching.toLowerCase())) [
      // output.push(product)
   ]
}
// console.log(output)


// // // // // // // //    practice
let searchIt = 'phone'
let show = []
for (const product of products) {
   if (product.toLowerCase().includes(searchIt.toLowerCase())) {
      show.push(product)
   }
}
console.log(show)    ////// //////


// starts with
searching = 'dell'
for (const product of products) {
   if (product.toLowerCase().startsWith(searching.toLowerCase())) [
      // output.push(product)
   ]
}
// console.log(output)

// // // // // practice 
searching = "htc"
let pushText = []
for (const product of products) {
   if (product.toLowerCase().startsWith(searching.toLowerCase())) {
      pushText.push(product)
   }
}
console.log(pushText) // // // ///////


// // // // End with
searching = "phone"
pushText = []
for (const product of products) {
   if (product.toLowerCase().endsWith(searching.toLowerCase())) {
      pushText.push(product)
   }
}
console.log(pushText) /////////////////