const loadComments = () => {
   fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => commentsUpload(data))
}
// loadComments()

const commentsUpload = (data) => {
   // console.log(data)
   const commentContainer = document.getElementById('comment-container')


   data.forEach(data => {
      const commentDiv = document.createElement('div')
      commentDiv.innerHTML = `
      <p style="font-weight:bold; font-size:25px;">Post ID: ${data.postId}</p>
      <p style="font-weight:bold; font-size:20px;">ID: ${data.id}</p>
      <p style="font-weight:bold; font-size:20px;">Name: ${data.name}</p>
      <p style="font-weight:bold; font-size:20px;">Email: ${data.email}</p>
      <p style="font-weight:bold; font-size:20px;">Body: ${data.body}</p>
      `
      commentDiv.style.border = '1px solid orange'
      commentDiv.style.borderRadius = '10px'
      commentDiv.style.backgroundColor = '#71FDE4'
      commentDiv.style.padding = '15px'
      commentDiv.style.margin = '10px'

      commentContainer.appendChild(commentDiv)
   });


   /* for (const datas of data) {
      const commentDiv = document.createElement('div')
      commentDiv.innerHTML = `
      <p style="font-weight:bold; font-size:25px;">Post ID: ${datas.postId}</p>
      <p style="font-weight:bold; font-size:20px;">ID: ${datas.id}</p>
      <p style="font-weight:bold; font-size:20px;">Name: ${datas.name}</p>
      <p style="font-weight:bold; font-size:20px;">Email: ${datas.email}</p>
      <p style="font-weight:bold; font-size:20px;">Body: ${datas.body}</p>
      `

      commentDiv.style.border = '1px solid orange'
      commentDiv.style.borderRadius = '10px'
      commentDiv.style.backgroundColor = '#71FDE4'
      commentDiv.style.padding = '10px'
      commentDiv.style.margin = '10px'

      commentContainer.appendChild(commentDiv)
   } */
}