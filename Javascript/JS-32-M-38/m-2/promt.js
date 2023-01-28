// Alert diye user k kichu ekta inform kore.
// Prompt diye user theke kono ekta data neoa hoy
// confirm diye user theke kono ekta kichur confirmation neoa hoy yes or no type dhara.

console.log('promt connected')

const showAlert = () => {
   const num = Math.random() * 10
   console.log(num)
   if (num < 5) {
      alert('Hello! Welcome to our website')
   }
}

const askSomething = () => {
   const decision = confirm('Are you coming picnic')
   console.log(decision)
   if (decision == true) {
      alert('Your entry fee 500 taka')
   } else {
      console.log('You don\'t come with us.')
   }
}

const getUserInfo = () => {
   const name = prompt('Tell us your name.')
   console.log(name)

   if (!!name) {
      console.log("welcome here", name)
   }
}