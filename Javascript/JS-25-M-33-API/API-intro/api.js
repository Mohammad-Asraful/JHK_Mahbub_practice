function loadData() {
   fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}

/* 
function loadUsers() {
   fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => console.log(data))
}
 */

function loadUsers() {
   fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => displayUsers(data))
}

function postData() {
   fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => console.log(data))
}

function displayUsers(data) {
   const ul = document.getElementById('users')
   for (const user of data) {
      const br = document.createElement('br')
      const li = document.createElement('li')
      li.innerText = `Name: ${user.name}, Email: ${user.email}`
      ul.appendChild(li)
   }
}










// practice
/* function postData() {
   fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => {
      const dataDiv = document.getElementById('includes-data')

      for (let i = 0; i < data.length; i++) {

         const createUserId = document.createElement('p')
         const createId = document.createElement('p')
         const createTitle = document.createElement('p')
         const createBody = document.createElement('p')
         createUserId.innerText = `User ID: ${data[i].userId}`
         createId.innerText = `ID: ${data[i].id}`
         createTitle.innerText = `Title: ${data[i].title}`
         createBody.innerText = `Body: ${data[i].body}`
         dataDiv.appendChild(createUserId)
         dataDiv.appendChild(createId)
         dataDiv.appendChild(createTitle)
         dataDiv.appendChild(createBody)

      }
   })
} */


// practice
/* function Data() {
   fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(data => console.log(data))
} */