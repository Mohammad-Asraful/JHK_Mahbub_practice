const loadUsers = () => {
   fetch('https://randomuser.me/api/?results=10')
      .then(res => res.json())
      .then(data => displayUsers(data.results))
}
loadUsers()


const displayUsers = users => {
   // console.log(users)
   const usersContainer = document.getElementById('users-container')

   for (const user of users) {
      const userDiv = document.createElement('div')
      userDiv.classList.add('user')

      userDiv.innerHTML = `
      <h3>User Name: ${user.name.title} ${user.name.first} ${user.name.last}</h3>
      <p>Email: ${user.email}</p>
      <p>User Location: ${user.location.city}, ${user.location.country}:</p>
      `

      usersContainer.appendChild(userDiv)
   }
}