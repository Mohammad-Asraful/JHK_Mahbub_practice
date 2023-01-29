function greeting(greetingHnadler, name) {
   greetingHnadler(name)
}

// const name = 'Halim Mama'
// const numbers = [34, 55, 76]
// const laptop = { price: 45000, brand: 'HP', memory: '8gb' }

function greetingHnadler(name) {
   console.log('Good Morning', name)
}
greeting(greetingHnadler, 'Tom Hanks')
greeting(greetingHnadler, 'Tom Brady')
greeting(greetingHnadler, 'Tom Cruise')

// 
function greetEvening(name) {
   console.log('Good Evening', name)
}
greeting(greetEvening, 'Tom Solaiman')
greeting(greetEvening, 'Tom Salman')

// 
function greetNight(name) {
   console.log('Good Night', name)
}
greeting(greetNight, 'Tom and Jerry')


// 
function greetingToAll(greetName, name) {
   console.log(greetName, name)
}
greetingToAll('Good Morning', 'Asraf')