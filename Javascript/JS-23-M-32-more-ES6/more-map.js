const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman']
const fLength = friends.map(friend => friend.length)
// console.log(fLength)

const products = [
   { name: 'Water bottle', price: 50, color: 'yellow' },
   { name: 'mobile phone', price: 15000, color: 'black' },
   { name: 'smart watch', price: 300, color: 'black' },
   { name: 'sticky note', price: 30, color: 'pink' },
   { name: 'water glass', price: 3, color: 'white' }
]

const productsNames = products.map(product => product.name)
// console.log(productsNames)

const productsPrices = products.map(product => product.price)
// console.log(productsPrices)

products.map(product => console.log(product))


// for each
products.forEach(product => console.log(product))


// practice map
const buddies = ['Asraf', 'Akib', 'Sazzad', 'Sabit', 'Tuhin']
buddies.map((buddy) => {
   const catchId = document.getElementById('map-foreach')
   const createElement = document.createElement('h2')
   createElement.innerText = buddy

   createElement.style.color = 'red'

   catchId.appendChild(createElement)
})


// practice foreach
buddies.forEach((buddy) => {
   const catchId = document.getElementById('map-foreach')
   const createElement = document.createElement('h2')
   createElement.innerText = buddy

   createElement.style.color = 'red'

   catchId.appendChild(createElement)
})