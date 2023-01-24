// clock function code 
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
   let h = new Date().getHours();
   let m = new Date().getMinutes();
   let s = new Date().getSeconds();
   let ampm = "AM";

   if (h > 12) {
      h = h - 12;
      ampm = "PM";
   }

   h = h < 10 ? "0" + h : h;
   m = m < 10 ? "0" + m : m;
   s = s < 10 ? "0" + s : s;

   hourEl.innerText = h;
   minuteEl.innerText = m;
   secondEl.innerText = s;
   ampmEl.innerText = ampm;
   setTimeout(() => {
      updateClock();
   }, 1000);
}

updateClock();






/* const loadAPI = () => {
   const url = `https://reqres.in/api/users`
   fetch(url).then(res => res.json()).then(data => uploadAPI(data.data))
}
loadAPI()


const uploadAPI = (data) => {
   const api = document.getElementById('api')

   data.map(element => {
      const div = document.createElement('div')
      div.classList.add('col')

      div.innerHTML = `
<div class="card">
  <img src="${element.avatar}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${element.first_name + ' ' + element.last_name}</h5>
    <p class="card-text">${element.email}</p>
  </div>
</div>
`
      api.appendChild(div)
   });

} */




const loadProduct = () => {
   const url = `https://fakestoreapi.com/products`
   fetch(url).then(res => res.json()).then(data => uploadProduct(data))
}
loadProduct()


const uploadProduct = (data) => {
   const api = document.getElementById('api')

   data.map(element => {
      const div = document.createElement('div')
      div.classList.add('col')

      div.innerHTML = `
<div class="card">
  <img style="height: 300px;" src="${element.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h6 class="card-title">${element.title}</h6>
    <P>${element.category}</P>
    <p class="card-text">${element.description.slice(0, 80)}</p>
    <p class="fw-bold">Price: ${element.price}$</p>
    <span>Product rate: ${element.rating.rate}</span>
  </div>
</div>
`
      api.appendChild(div)
   });

}


// next create a modal for full details
const fullDetails = () => {
   const url = `https://fakestoreapi.com/products`
   fetch(url).then(res => res.json()).then(data => details(data))
}

const details = () => {

}