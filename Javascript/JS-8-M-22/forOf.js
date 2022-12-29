const computerCity = [
   { name: "Apple Laptop", price: 80000, proccessor: "core i7" },
   { name: "Asus Laptop", price: 60000, proccessor: "core i6" },
   { name: "Lenevo Laptop", price: 70000, proccessor: "core i5" },
   { name: "HP Laptop", price: 50000, proccessor: "core i4" },
   { name: "Dell Laptop", price: 40000, proccessor: "core i3" }
]

let lowest = computerCity[0];
// console.log(lowest);
for (let computer of computerCity) {
   if (computer.price < lowest) {
      lowest.price = computer.price;
   }
}
console.log(lowest);


// // // // practice
const computerShop = [
   { name: "Apple Laptop", price: 80000, proccessor: "core i7" },
   { name: "Asus Laptop", price: 60000, proccessor: "core i6" },
   { name: "Lenevo Laptop", price: 70000, proccessor: "core i5" },
   { name: "HP Laptop", price: 50000, proccessor: "core i4" },
   { name: "Dell Laptop", price: 40000, proccessor: "core i3" }
]
// ("for of") => this loop use in iterable object -- it's use in only an Array.
let LowestPrice = computerShop[0];
for (const computerPrice of computerShop) {
   if (computerPrice.price < LowestPrice) {
      LowestPrice.price = computerPrice.price
   }
}
console.log(LowestPrice);

///////////////////////////////////////
// practice
const computerZone = [
   { name: "Apple Laptop", price: 80000, proccessor: "core i7" },
   { name: "Asus Laptop", price: 60000, proccessor: "core i6" },
   { name: "Lenevo Laptop", price: 70000, proccessor: "core i5" },
   { name: "HP Laptop", price: 50000, proccessor: "core i4" },
   { name: "Dell Laptop", price: 40000, proccessor: "core i3" }
]
let lowPrice = computerZone[0];
for (const computerPrice of computerZone) {
   if (computerPrice.price < lowPrice) {
      lowPrice.price = computerPrice.price

   }
}
console.log(lowPrice)