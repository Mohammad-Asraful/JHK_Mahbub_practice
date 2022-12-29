// handle deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
   // get the amount deposited
   const depositInput = document.getElementById('deposit-input')
   const newDepositAmount = depositInput.value

   if (newDepositAmount === '') {
      alert('enter a valid Amount.')
      return;
   }

   // update deposite total
   const depositTotal = document.getElementById('deposit-total')

   // 
   const previousDepositAmount = depositTotal.innerText

   const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount)

   depositTotal.innerText = newDepositTotal

   // update account balance
   const balanceTotal = document.getElementById('balance-total')
   const previousBalanceTotal = balanceTotal.innerText
   const newBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount)
   balanceTotal.innerText = newBalanceTotal

   // clear the deposit value
   depositInput.value = ''
})

// click the deposit button then put the money in deposit div then increase the money in balance

// Handle withdraw button
document.getElementById('Withdraw-button').addEventListener('click', function () {
   // 
   const withdrawInput = document.getElementById('Withdraw-input')
   const newWithdrawAmount = withdrawInput.value

   if (newWithdrawAmount === '') {
      alert('Enter a valid amount.')
      return
   }
   // 
   const withdrawTotal = document.getElementById('withdraw-total')

   const previousWithdrawAmount = withdrawTotal.innerText

   withdrawTotal.innerText = newWithdrawAmount
   // 
   const newWithdrawTotal = parseFloat(newWithdrawAmount) + parseFloat(previousWithdrawAmount)
   withdrawTotal.innerText = newWithdrawTotal

   // 
   // update account balance
   const balanceTotal = document.getElementById('balance-total')
   const previousBalanceTotal = balanceTotal.innerText
   const newBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount)
   balanceTotal.innerText = newBalanceTotal

   // clear the withdraw value
   withdrawInput.value = ''
})