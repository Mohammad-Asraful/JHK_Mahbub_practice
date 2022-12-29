const products = [
   { name: 'iphone 14', price: 70000 },
   { name: 'samsung galaxy 14', price: 6000 },
   { name: 'Dell Laptop', price: 50000 },
   { name: 'Lenevo yoga Laptop', price: 55000 },
   { name: 'Asus afsus Laptop 1', price: 35000 },
   { name: 'Smart watch samsung', price: 4000 },
   { name: 'Apple watch', price: 9000 },
   { name: 'Plus one phone 4', price: 27000 },
]

/* for (const product of products) {
   if (product.price < 5000) {
      console.log(product);
   }
} */

for (const product of products) {
   if (product.price < 10000) {
      continue;
   }
   console.log(product)
}