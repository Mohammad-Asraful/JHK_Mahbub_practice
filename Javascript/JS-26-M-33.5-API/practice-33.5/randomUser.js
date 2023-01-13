const loadRandomUser = () => {
   const url = `https://randomuser.me/api/`
   fetch(url)
      .then(res => res.json())
      .then(data => {
         console.log(data.results)
         showData(data.results)
      })
}
loadRandomUser()


const showData = (details) => {
   const randomData = document.getElementById('random-data')

   details.forEach(datas => {
      console.log(datas)
      const dataDiv = document.createElement('div')

      dataDiv.style.color = 'orange'
      dataDiv.style.fontSize = '30px'
      dataDiv.style.border = '3px solid orange'
      dataDiv.style.padding = '20px'
      dataDiv.style

      dataDiv.innerHTML = `
      <img src='${datas.picture.large}'  style='width: 250px; display: block; margin-bottom: 30px; '>
      Location:
         <p>Street Number: ${datas.location.street.number}</p>
         <p>Street Name: ${datas.location.street.name}</p>
         <p>City: ${datas.location.city}</p>
         <p>State: ${datas.location.state}</p>
         <p>Country: ${datas.location.country}</p>
         <p>Post Code: ${datas.location.postcode}</p>
         <p>Coordinates Latitude: ${datas.location.coordinates.latitude}</p>
         <p>Coordinates Longitude: ${datas.location.coordinates.longitude}</p>
         <p>Timezone: ${datas.location.timezone.offset}</p>
         <p>Timezone: ${datas.location.timezone.description}</p>
      `

      randomData.appendChild(dataDiv)
   })
}