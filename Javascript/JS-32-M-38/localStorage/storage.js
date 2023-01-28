// localStorage.getItem('name')
// add name in local storage
document.getElementById('btn-add-name').addEventListener('click', function () {
   const nameField = document.getElementById('name-field')
   const nameValue = nameField.value
   // console.log(nameValue)
   localStorage.setItem('name', nameValue)
   nameField.value = ''
})

// remove name from local storage
document.getElementById('btn-remove-name').addEventListener('click', function () {
   localStorage.removeItem('name')
})


// add age in local storage
document.getElementById('btn-add-age').addEventListener('click', function () {
   const ageField = document.getElementById('see-field')
   const ageValue = ageField.value
   // console.log(ageValue)
   localStorage.setItem('age', ageValue)
})

// remove age from local storage
document.getElementById('btn-remove-age').addEventListener('click', function () {
   localStorage.removeItem('age')
})


// clear all items from Local Storage
document.getElementById('btn-clear-all').addEventListener('click', function () {
   localStorage.clear()
})