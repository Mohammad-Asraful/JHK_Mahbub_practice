


"color-friend-name"


document.getElementById('add-border').addEventListener('click', function () {
   const container = document.getElementById('friend-container')
   container.style.border = '3px solid yellow'
})

const friends = document.getElementsByClassName('friend')
document.getElementById("add-background").addEventListener('click', function () {
   for (const friend of friends) {
      friend.style.backgroundColor = 'lightblue'
   }
})

document.getElementById("add-friend").addEventListener('click', function () {
   const container = document.getElementById('friend-container')
   const friendDiv = document.createElement('div')
   friendDiv.classList.add('friend')
   friendDiv.innerHTML = `<h3 class="friend-name">New Friend</h3>
                     <p>Lorem, ipsum.</p>`
   container.appendChild(friendDiv)
})