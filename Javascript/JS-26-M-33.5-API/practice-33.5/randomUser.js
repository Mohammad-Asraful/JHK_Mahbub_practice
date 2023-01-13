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
      dataDiv.style.borderRadius = '10px'
      dataDiv.style.width = '650px'
      dataDiv.style.margin = '0 auto'

      dataDiv.innerHTML = `
      <img src='${datas.picture.large}'  style='width: 250px; display: block; margin: 0 auto 30px auto;'>
      Location:
         <p>Street Number: ${datas.location.street.number}</p>
         <p>Street Name: ${datas.location.street.name}</p>
         <p>City: ${datas.location.city}</p>
         <p>State: ${datas.location.state}</p>
         <p>Country: ${datas.location.country}</p>
         <p>Post Code: ${datas.location.postcode}</p>
         <p>Coordinates Latitude: ${datas.location.coordinates.latitude}</p>
         <p>Coordinates Longitude: ${datas.location.coordinates.longitude}</p>
         <p>Timezone Offset: ${datas.location.timezone.offset}</p>
         <p>Timezone Description: ${datas.location.timezone.description}</p>
      `

      randomData.appendChild(dataDiv)
   })
}