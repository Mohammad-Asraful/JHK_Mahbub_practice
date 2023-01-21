const apiFetch = () => {
   const url = 'https://jsonplaceholder.typicode.com/photos'
   fetch(url).then(res => res.json()).then(data => photos(data))
}
apiFetch()

const photos = (photos) => {
   const photosDiv = document.getElementById('photos')


   for (const photo of photos.slice(0, 20)) {
      const div = document.createElement('div')
      div.innerHTML = `
      <div onclick="showDetails(${photo.id})" class="card" style="width: 18rem;">
      <img src="${photo.url}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5>${photo.title}</h5>
      </div>
    </div>
   `
      photosDiv.appendChild(div)
   }
}


const showDetails = (id) => {
   const url = `https://jsonplaceholder.typicode.com/photos/${id}`
   fetch(url)
      .then(res => res.json())
      .then(data => detailItems(data))
}

const detailItems = (photos) => {
   const photosDiv = document.getElementById('showDetails')
   console.log(photosDiv)

   photosDiv.innerHTML = `
      <div onclick="showDetails()" class="card" style="width: 18rem;">
      <img src="${photos?.thumbnailUrl}" class="card-img-top" alt="...">
      <div class="card-body">
      <p>Album ID: ${photos.albumId}</p>
      <p>ID: ${photos.id}</p>
        <h5>Title: ${photos?.title}</h5>
      </div>
    </div>
   `
}