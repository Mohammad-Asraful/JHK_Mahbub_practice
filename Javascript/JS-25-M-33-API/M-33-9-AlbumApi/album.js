/* function album() {
   fetch('https://jsonplaceholder.typicode.com/albums')
      .then(res => res.json())
      .then(data => {
         // console.log(data)

         const albumContainer = document.getElementById('album-container')

         for (const datas of data) {
            const p = document.createElement('p')
            const p1 = document.createElement('p')
            const p2 = document.createElement('p')
            p.innerText = datas.userId
            p1.innerText = datas.id
            p2.innerText = datas.title
            albumContainer.appendChild(p)
            albumContainer.appendChild(p1)
            albumContainer.appendChild(p2)
         }
      })
}
album() */


// Another system
function loadAlbum() {
   fetch('https://jsonplaceholder.typicode.com/albums')
      .then(res => res.json())
      .then(data => {
         // console.log(data)
         const albumContainer = document.getElementById('album-container')

         for (const datas of data) {
            const div = document.createElement('div')
            albumContainer.appendChild(div)
            div.innerHTML = `
            <p style="color: maroon; font-size: 30px;">User ID: ${datas.userId}</p>

            <p style="color: #FF0000; font-size: 25px;">ID: ${datas.id}</p>
            
            <p style="color: #00008B; font-size: 30px;">Title: ${datas.title}</p>
            `
            div.style.border = '3px solid red'
            div.style.borderRadius = '10px'
            div.style.backgroundColor = '#E0FFFF'
            div.style.margin = '10px'
            div.style.padding = '10px'
         }
      })
}
loadAlbum()