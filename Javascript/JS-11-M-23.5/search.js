const product = [
   { name: 'iphone 14', price: 70000 },
   { name: 'samsung galaxy 14', price: 60000 },
   { name: 'Dell Laptop', price: 50000 },
   { name: 'Lenevo yoga Laptop', price: 55000 },
   { name: 'Asus afsus Laptop 1', price: 35000 },
   { name: 'Smart watch samsung', price: 7000 },
   { name: 'Apple watch', price: 20000 },
   { name: 'Plus one phone 4', price: 27000 },
]

function searchProducts(products, searchText) {
   const result = [];
   for (const product of products) {
      if (product.name.includes(searchText)) {
         // console.log(product.name)
         result.push(product);
         console.log(result)
      }
   }
}
searchProducts(product, 'watch')