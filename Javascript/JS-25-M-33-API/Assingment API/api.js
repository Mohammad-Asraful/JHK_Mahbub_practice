// get comments from API
function getComments() {
   fetch('https://jsonplaceholder.typicode.com/comments')
      .then(convertApiData => convertApiData.json())
      .then(data => {

         const commentsContainer = document.getElementById('comment-container')
         for (const datas of data) {
            const div = document.createElement('div')
            commentsContainer.appendChild(div)

            div.innerHTML = `
            <p>Post ID: ${datas.postId}</p>
            <p>ID: ${datas.id}</p>
            <p>Name: ${datas.name}</p>
            <p>Email: ${datas.email}</p>
            <p>Body: ${datas.body}</p>
            `

            const divStyle = div.style
            divStyle.border = '3px solid indigo'
            divStyle.borderRadius = '10px'
            divStyle.margin = '10px'
            divStyle.padding = '10px'
            divStyle.backgroundColor = 'lightblue'
         }
      })
}
// getComments()


// get photos from API
function getPhotos() {
   fetch('https://jsonplaceholder.typicode.com/photos')
      .then(convertJsonPhoto => convertJsonPhoto.json())
      .then(dataWithPhotos => {

         const photosContainer = document.getElementById('photos-container')
         for (const dataWithPhoto of dataWithPhotos) {
            const div = document.createElement('div')
            photosContainer.appendChild(div)

            const imgUrl = document.createElement('img')
            imgUrl.style.display = 'block'
            imgUrl.style.margin = '10px 0'
            imgUrl.setAttribute('src', `${dataWithPhoto.url}`)

            const imgthumbnailUrl = document.createElement('img')
            imgthumbnailUrl.setAttribute('src', `${dataWithPhoto.thumbnailUrl}`)

            div.innerHTML = `
            <p>Post ID: ${dataWithPhoto.albumId}</p>
            <p>ID: ${dataWithPhoto.id}</p>
            <p>Name: ${dataWithPhoto.title}</p>
            `
            div.appendChild(imgUrl)
            div.appendChild(imgthumbnailUrl)

            const divStyle = div.style
            divStyle.border = '3px solid indigo'
            divStyle.borderRadius = '10px'
            divStyle.margin = '10px'
            divStyle.padding = '10px'
            divStyle.backgroundColor = 'lightblue'
         }
      })
}
getPhotos()