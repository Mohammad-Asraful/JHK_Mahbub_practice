const loadPhones = async (searchText, dataLimit) => {
   const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
   const res = await fetch(url)
   const data = await res.json()
   displayPhones(data.data, dataLimit)

}
loadPhones('a')

const displayPhones = (phones, dataLimit) => {
   // console.log(phones)
   const phoneContainer = document.getElementById('phone-container')
   phoneContainer.textContent = ''
   // display 20 phone only
   const showAll = document.getElementById('show-all')
   if (dataLimit && phones.length > 10) {
      phones = phones.slice(0, 10)
      showAll.classList.remove('d-none')
   } else {
      showAll.classList.add('d-none')
   }

   // display no phone found
   const noPhone = document.getElementById('no-found-message')
   if (phones.length === 0) {
      noPhone.classList.remove('d-none')
   } else {
      noPhone.classList.add('d-none')
   }

   // display all phone
   phones.forEach(phone => {
      const phoneDiv = document.createElement('div')
      phoneDiv.classList.add('col')
      phoneDiv.innerHTML = `
      <div class="card p-4">
         <img src="${phone.image}" class="card-img-top" alt="..." />
         <div class="card-body">
         <h5>Brand: ${phone.brand}</h5>
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">${phone.slug}</p>
            
            <button onclick='loadPhoneDetails("${phone.slug}")' href="#" class="btn btn-primary" data-bs-toggle="modal"
            data-bs-target="#phoneDetailModal">Show Details</button>
         </div>
      </div>
      `
      phoneContainer.appendChild(phoneDiv)
   });

   // stop spinner or loader
   togglerSpinner(false)
}

const processSearch = (dataLimit) => {
   // start loader
   togglerSpinner(true)

   const searchField = document.getElementById('search-field')
   const searchText = searchField.value

   loadPhones(searchText, dataLimit)
   // searchField.value = ''
}

// Handle search button click
document.getElementById('btn-search').addEventListener('click', function () {
   // start loader
   processSearch(10)
})

// search input field enter key handler
document.getElementById('search-field').addEventListener('keypress', function (e) {
   // console.log(e.which)
   // console.log(e.key)
   if (e.key === 'Enter') {
      // code for enter
      processSearch(10)
   }
})


const togglerSpinner = isLoading => {
   const loaderSection = document.getElementById('loader')
   if (isLoading == true) {
      loaderSection.classList.remove('d-none')
   } else {
      loaderSection.classList.add('d-none')
   }
}

// not the best way to load show all
document.getElementById('btn-show-all').addEventListener('click', function () {
   processSearch()
})


// show phone details
const loadPhoneDetails = async (id) => {
   const url = `https://openapi.programming-hero.com/api/phone/${id}`
   const res = await fetch(url)
   const data = await res.json()
   displayPhoneDetails(data.data)
}
loadPhoneDetails()


const displayPhoneDetails = phone => {
   // console.log(phone)
   const modalTitle = document.getElementById('phoneDetailModalLabel')
   modalTitle.innerText = phone.name

   const phoneDetails = document.getElementById('phone-details')
   phoneDetails.innerHTML = `
   <img src="${phone.image}">
   <p>Release Date: ${phone.releaseDate ? phone.releaseDate : 'No release date found'}</p>
   <p>Display: ${phone?.mainFeatures?.displaySize ? phone?.mainFeatures?.displaySize : 'No Bluetooth information.'}</p>
   <p>Bluetooth: ${phone?.others?.Bluetooth ? phone?.others?.Bluetooth : 'No Bluetooth information.'}</p>
   <p>Storage: ${phone.mainFeatures ? phone.mainFeatures.storage : 'No storage information.'}</p>
   `
}