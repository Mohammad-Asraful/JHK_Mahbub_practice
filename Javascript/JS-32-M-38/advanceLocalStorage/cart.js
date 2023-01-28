const getInputValueByID = (id) => {
   const inputField = document.getElementById(id)
   const inputValue = inputField.value
   // inputField.value = ''
   return inputValue
}

const addProduct = () => {
   const product = getInputValueByID('product-name-field')
   const quantity = getInputValueByID('product-quantity-field')
   console.log(product, quantity)

   displayProducts(product, quantity)

   // set to local storage
   // simple way
   // localStorage.setItem(product, quantity)
   saveItemToLocalStorage(product, quantity)
}

const getShoppingCartFromLocalStorage = () => {
   let savedCart = localStorage.getItem('cart')
   let cart = {}
   if (savedCart) {
      cart = JSON.parse(savedCart)
   }
   return cart
}

const saveItemToLocalStorage = (product, quantity) => {
   const cart = getShoppingCartFromLocalStorage()
   // add product to the object property
   cart[product] = quantity
   const cartStringify = JSON.stringify(cart)

   // save to local storage
   localStorage.setItem('cart', cartStringify)
}

const displayProducts = (product, quantity) => {
   const productContainer = document.getElementById('product-container')
   const li = document.createElement('li')
   li.innerText = `${product} : ${quantity}`

   productContainer.appendChild(li)
}