// Deposit the balance
document.getElementById('deposit-button').addEventListener('click', function () {
   const depositInput = document.getElementById('deposit-input')
   const newDepositInput = depositInput.value
   // 
   if (newDepositInput === '') {
      alert('Please, enter an amount.')
      return
   }
   // update tha deposit
   const depositTotal = document.getElementById('deposit-total')
   const depositTotalInnertext = depositTotal.innerText
   depositTotal.innerText = parseFloat(newDepositInput) + parseFloat(depositTotalInnertext)

   // update the balance
   const totalBalance = document.getElementById('balance-total')
   const totalBalanceNumber = totalBalance.innerText

   const depositTotalAmount = parseFloat(totalBalanceNumber) + parseFloat(newDepositInput)
   totalBalance.innerText = depositTotalAmount
   // clear the input
   depositInput.value = ''
})

// 

// Withdraw the balance
document.getElementById('Withdraw-button').addEventListener('click', function () {
   const withdrawInput = document.getElementById('Withdraw-input')
   const withdrawInputValue = withdrawInput.value
   // 
   if (withdrawInputValue === '') {
      alert('Please, enter an amount.')
      return
   }
   // withdraw
   const withdrawTotal = document.getElementById('wthdraw-total')
   const withdrawTotalInnertext = withdrawTotal.innerText
   withdrawTotal.innerText = withdrawInputValue

   // update the Withdraw
   const withdrawTotalAmount = parseFloat(withdrawTotalInnertext) + parseFloat(withdrawInputValue)
   withdrawTotal.innerText = withdrawTotalAmount

   // update the balance
   const balanceTotal = document.getElementById('balance-total')
   const balanceTotalAmount = balanceTotal.innerText
   // 
   const insertTotalBalance = parseFloat(balanceTotalAmount) - parseFloat(withdrawInputValue)
   balanceTotal.innerText = insertTotalBalance

   // clear input
   withdrawInput.value = ''
})