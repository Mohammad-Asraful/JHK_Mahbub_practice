const phones = [
   {
      name: "samsung",
      price: 45000,
      camera: 10,
      storage: 8
   },
   {
      name: "walton m32",
      price: 12000,
      camera: 8,
      storage: 16
   },
   {
      name: "shaomi m3",
      price: 17000,
      camera: 8,
      storage: 32
   },
   {
      name: "nokia m95",
      price: 8000,
      camera: 8,
      storage: 4
   },
   {
      name: "HTC h81",
      price: 25000,
      camera: 8,
      storage: 16
   }
]

let cheapest = phones[0];
for (const phone of phones) {
   // compare price only:
   if (phone.price < cheapest.price) {
      cheapest = phone;
   }
}
console.log(cheapest)



// // practice
const computerCity = [
   { name: "Apple Laptop", price: 80000, proccessor: "core i7" },
   { name: "Asus Laptop", price: 60000, proccessor: "core i6" },
   { name: "Lenevo Laptop", price: 70000, proccessor: "core i5" },
   { name: "HP Laptop", price: 50000, proccessor: "core i4" },
   { name: "Dell Laptop", price: 40000, proccessor: "core i3" }
]

let lowest = computerCity[0];
for (let computer of computerCity) {
   if (computer.price < lowest.price) {
      lowest = computer;
   }
}
console.log(lowest)