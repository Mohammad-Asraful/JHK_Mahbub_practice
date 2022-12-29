function productUpdate(productName, price, isIncreasing) {

   // Iphone update system

   const inputField = document.getElementById(productName + '-quantity')
   let productQuantity = inputField.value

   if (isIncreasing == true) {
      productQuantity = parseInt(productQuantity) + 1
   } else if (isIncreasing == false && productQuantity > 0) {
      productQuantity = parseInt(productQuantity) - 1
   }
   inputField.value = productQuantity

   // update total
   const productTotal = document.getElementById(productName + '-total')
   productTotal.innerText = productQuantity * price

   calculateTotal()
}

// get input value function
function getInputValue(productName) {
   const inputField = document.getElementById(productName + '-quantity')
   const productQuantity = inputField.value
   return productQuantity
}

// calculate the total product
function calculateTotal() {
   const phoneTotal = getInputValue('phone') * 1219
   const caseTotal = getInputValue('case') * 59
   const subTotal = phoneTotal + caseTotal
   const tax = subTotal / 10
   const total = subTotal + tax

   // set html values
   document.getElementById('sub-total').innerText = subTotal
   document.getElementById('tax-amount').innerText = tax
   document.getElementById('total-price').innerText = total
}


// update phone system
document.getElementById('phone-plus').addEventListener('click', function () {
   productUpdate('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function () {
   productUpdate('phone', 1219, false)
})

// update phone casing system
document.getElementById('case-plus').addEventListener('click', function () {
   productUpdate('case', 59, true)
})
document.getElementById('case-minus').addEventListener('click', function () {
   productUpdate('case', 59, false)
})
