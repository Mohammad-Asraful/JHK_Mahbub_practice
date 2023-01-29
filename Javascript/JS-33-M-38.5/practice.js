console.log('first')

setTimeout(() => {
   console.log('second')
}, 3500);

console.log('third')

setInterval(() => {
   console.log('fourth')
}, 4000);

setInterval(() => {
   console.log(Math.random() * 10)
}, 1000);

// 
const userInput = prompt('Enter your favourite number')
const total = parseFloat(userInput) + 200
alert(total)

const confirmMessege = confirm('Would you like to go next page')
if (confirmMessege == true) {
   // window.location.href = './index.html'
   console.log(location.pathname)
} else {
   alert('You can\'t go to the next page.')
}
