function getPin() {
   const pin = Math.round(Math.random() * 10000)
   const pinString = pin + ''
   if (pinString.length == 4) {
      return pin
   } else {
      // console.log("got 3 digit and call again", pin)
      return getPin()
   }
}

function generatePin() {
   const pin = getPin()
   document.getElementById('display-pin').value = pin
}

// // // Update submit key pad
document.getElementById('key-pad').addEventListener('click', function (Event) {
   const number = Event.target.innerText
   const calcInput = document.getElementById('typed-numbers')
   if (isNaN(number)) {
      if (number == 'C') {
         calcInput.value = ''
      }
   } else {
      const previousNumber = calcInput.value
      const newNumber = previousNumber + number
      calcInput.value = newNumber
   }
})

// submit-btn
function verifyPin() {
   const pin = document.getElementById('display-pin').value
   const typedNumbers = document.getElementById('typed-numbers').value
   // 
   const successMessage = document.getElementById('notify-success')
   const failError = document.getElementById('notify-fail')

   if (pin === typedNumbers) {
      successMessage.style.display = 'block'
      failError.style.display = 'none'
      window.location.href = './welcome.html'
   } else {
      successMessage.style.display = 'none'
      failError.style.display = 'block'
   }

}




/* const pin = Math.round(Math.random() * 10000)
console.log(parseInt(pin)) */