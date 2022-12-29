/* function doubleIt(num) {
   const result = num * 2;
   return result;
}
 */

function getInputValue(depositAndWithdraw) {
   const depositInput = document.getElementById(depositAndWithdraw)
   const depositInputAmount = depositInput.value
   const previousDepositInputAmount = parseFloat(depositInputAmount)

   /*    // Ignore the blank deposit.
      if (depositInputAmount === '') {
         alert('Enter a valid amount.')
         return
      } */

   // clear input field
   depositInput.value = ''

   // return value
   return previousDepositInputAmount;
}

/* 
// update deposite and withdraw field
function updateTotalField(depositWithdrawTotal) {
   // get and update deposit total
   const depositTotal = document.getElementById('deposit-total')
   const depositTotalText = depositTotal.innerText
   const previousDepositTotalAmount = parseFloat(depositTotalText)

   // update deposit value
   depositTotal.innerText = previousDepositTotalAmount + previousDepositInputAmount
}
 */


document.getElementById('deposit-button').addEventListener('click', function () {
   /*    const depositInput = document.getElementById('deposit-input')
      const depositInputAmount = depositInput.value
      const previousDepositInputAmount = parseFloat(depositInputAmount) */

   const previousDepositInputAmount = getInputValue('deposit-input')

   if (previousDepositInputAmount > 0) {
      // get and update deposit total
      const depositTotal = document.getElementById('deposit-total')
      const depositTotalText = depositTotal.innerText
      const previousDepositTotalAmount = parseFloat(depositTotalText)

      // update deposit value
      depositTotal.innerText = previousDepositTotalAmount + previousDepositInputAmount
   }

   /*    // Ignore the blank deposit.
      if (depositInputAmount === '') {
         alert('Enter a valid amount.')
         return
      } */


   // update balace
   const balanceTotal = document.getElementById('balance-total')

   if (previousDepositInputAmount > 0) {
      const balanceTotalText = balanceTotal.innerText
      const previousBalanceTotalAmount = parseFloat(balanceTotalText)

      balanceTotal.innerText = previousBalanceTotalAmount + previousDepositInputAmount
   }

   /*    // clear input field
      depositInput.value = '' */

})

// // // // // // // /////////////////////////// // // // // // // //

// Handle withdraw button
document.getElementById('Withdraw-button').addEventListener('click', function () {
   /*    // 
      const withdrawInput = document.getElementById('Withdraw-input')
      const newWithdrawAmountText = withdrawInput.value
      const newWithdrawAmount = parseFloat(newWithdrawAmountText) */

   const newWithdrawAmount = getInputValue('Withdraw-input')

   if (newWithdrawAmount > 0) {
      // get and update withdraw total
      const withdrawTotal = document.getElementById('withdraw-total')
      const previousWithdrawAmountText = withdrawTotal.innerText
      const previousWithdrawAmount = parseFloat(previousWithdrawAmountText)

      withdrawTotal.innerText = newWithdrawAmount
      // 
      const newWithdrawTotal = newWithdrawAmount + previousWithdrawAmount
      withdrawTotal.innerText = newWithdrawTotal
   }




   // /////////  how can i solve this - I don't know ///////// //
   if (newWithdrawAmount) {
      alert('You can not withdraw more than what you have in your account')
   }





   /*    // Ignore the blank deposit.
      if (newWithdrawAmount === '') {
         alert('Enter a valid amount.')
         return
      } */

   // 
   // update account balance
   const balanceTotal = document.getElementById('balance-total')
   const previousBalanceTotalText = balanceTotal.innerText
   const previousBalanceTotal = parseFloat(previousBalanceTotalText)

   const newBalanceTotal = previousBalanceTotal - newWithdrawAmount
   balanceTotal.innerText = newBalanceTotal

   // clear the withdraw value
   // withdrawInput.value = ''
})