document.getElementById('login-button').addEventListener('click', function () {
   const emailInput = document.getElementById('email-input').value
   const passwordInput = document.getElementById('password-input').value

   if (emailInput === 'asraf@gmail.com' && passwordInput === 'Asraf') {
      window.location.href = ('./banking.html')
   } else {
      alert('Email or Password is Wrong')
   }
})