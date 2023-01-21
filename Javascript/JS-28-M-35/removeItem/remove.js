/* const comments = () => {
   const commentDiv = document.getElementById('comment-div')

   const commentInput = document.getElementById('comment-input')
   const commentInputText = commentInput.value

   const div = document.createElement('div')

   div.innerHTML = commentInputText

   commentDiv.appendChild(div)

} */

document.getElementById('comment-button').addEventListener('click', function () {
   const commentDiv = document.getElementById('comment-div')

   const commentInput = document.getElementById('comment-input')
   const commentInputText = commentInput.value

   const div = document.createElement('div')
   div.setAttribute('id', 'deleted')

   div.innerHTML = `
   <p style='width: 555px;'>${commentInputText}</p>
   <input style='height: 30px;' onclick="removeComment()" type='button' value='delete' id='delete-btn'>
   `

   div.style.display = 'flex'
   div.style.justifyContent = 'space-between'
   div.style.alignItems = 'center'
   div.style.gap = '10px'

   commentDiv.appendChild(div)
   commentInput.value = ""

})

function removeComment() {
   // remove
   const deleteDiv = document.getElementById('deleted')
   deleteDiv.remove()
}