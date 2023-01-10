function getProducts() {
   fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
         const productDiv = document.getElementById('product')

         for (const singleData of data) {
            const div = document.createElement('div')

            div.innerHTML = `
         <p>ID: ${singleData.id}</p>
         <p>Title: ${singleData.title}</p>
         <p>Price: ${singleData.price}</p>
         <p>Description: ${singleData.description}</p>
         <p>Catagory: ${singleData.category}</p>
         
         <div>
         <pre>    Rating's rate: ${singleData.rating?.rate}</p>
         <pre>    Rating's count: ${singleData.rating?.count}</p>
         </div>
         `
            div.style.border = '3px solid orange'
            div.style.padding = '10px'
            div.style.margin = '10px 0'
            div.style.backgroundColor = 'lightblue'

            productDiv.appendChild(div)
         }
      })
}
getProducts()