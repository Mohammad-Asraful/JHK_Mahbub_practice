// get comments from API
function getComments() {
   fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(commentsData => {
         const commentsContainer = document.getElementById('comments-container')

         for (const comment of commentsData) {
            const div = document.createElement('div')

            div.innerHTML = `
         <p>Post ID: ${comment.postId}</p>
         <p>ID: ${comment.id}</p>
         <p>Name: ${comment.name}</p>
         <p>Email: ${comment.email}</p>
         <p>Body: ${comment.body}</p>
         `
            const divStyle = div.style
            divStyle.border = '3px solid indigo'
            divStyle.backgroundColor = 'lightblue'
            divStyle.margin = '10px'
            divStyle.padding = '10px'
            divStyle.fontSize = '30px'

            commentsContainer.appendChild(div)
         }
      })
}
getComments()


// get photos from API
function getPhotos() {
   fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(datas => {
         const photosContainer = document.getElementById('photos-container')

         for (const data of datas) {
            const div = document.createElement('div')
            const img = document.createElement('img')
            img.style.display = 'block'
            img.style.margin = '10px 0'
            const img1 = document.createElement('img')
            img1.style.display = 'block'

            img.setAttribute('src', `${data.url}`)
            img1.setAttribute('src', `${data.thumbnailUrl}`)

            div.innerHTML = `
            <p>Album ID: ${data.albumId}</p>
            <p>ID: ${data.id}</p>
            <p>Title: ${data.title}</p>
            `

            const divStyle = div.style
            divStyle.border = '3px solid orange'
            divStyle.backgroundColor = 'lightblue'
            divStyle.fontSize = '30px'
            divStyle.margin = '10px'
            divStyle.padding = '10px'

            photosContainer.appendChild(div)
            div.appendChild(img)
            div.appendChild(img1)
         }
      })
}
getPhotos()