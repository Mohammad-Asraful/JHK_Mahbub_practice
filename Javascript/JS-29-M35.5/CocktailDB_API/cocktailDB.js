// call API
const cocktail = (cocktails) => {
   const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktails}`
   fetch(url)
      .then(res => res.json())
      .then(data => showDetails(data.drinks))
}
cocktail('')


// show items in display
const showDetails = (apiCard) => {
   // console.log(apiCard)
   const cocktailApi = document.getElementById('cocktailapi')
   cocktailApi.innerHTML = ''

   apiCard.forEach(element => {
      // console.log(element)
      const div = document.createElement('div')
      div.classList.add('col')

      div.innerHTML = `
      <div class="card">
      <img src="${element.strDrinkThumb}" class="card-img-top" alt="Drink Images">
      <div class="card-body">
        <h6 class="card-title">${element.strDrink}</h6>
        <p class="card-text">${element.strInstructions.slice(0, 50)}</p>
        <p class="card-text">${element.idDrink}</p>
        <button  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cocktail-modal" onclick='showItemDetails(${element.idDrink})'>Show Details</button>
      </div>
    </div>
      `
      cocktailApi.appendChild(div)
   });
}


// search items
const searchItems = () => {
   const inputField = document.getElementById('input-field')
   const inputFieldValue = inputField.value

   cocktail(inputFieldValue)
   inputField.value = ''
}


// show all details in modal
const showItemDetails = async (id) => {
   console.log(id)
   const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}
   `
   await fetch(url)
      .then(res => res.json())
      .then(data => showAllDetails(data.drinks[0]))
}



const getById = (id) => {
   return document.getElementById(id);
}
const showAllDetails = (data) => {
   const popUp = getById('popup')
   console.log(data)
   const modalTitle = getById("modal-title");

   modalTitle.innerText = data.strDrink
   const modalBody = getById("modal-body");

   modalBody.innerHTML = `
      <img src = "${data.strDrinkThumb}" class="img-fluid"/>
      <br />

      <div>
      ${data.strInstructions}
      </div>
   `




}