const blog = document.getElementById("my-blog")
blog.innerHTML =
   `<div>
      <label style="color: green;">Hello Blogs</label>
      <ol>
         <li>First blog</li>
         <li>Second blog</li>
         <li>Third blog</li>
         <li>Fourth blog</li>
         <li>Fifth blog</li>
      </ol>
   </div>`

// 
const friends = document.getElementById(`friends`)
// console.log(friends.childNodes)
console.log(friends.children)
// 
const fifth = friends.children[4];
const sixth = friends.children[5];
console.log(fifth)
friends.removeChild(fifth);            // remove element
friends.removeChild(sixth);            // remove element
// friends.appendChild(fifth);         // element add

// create element
const friend = document.createElement("li")
friend.innerText = `Friend-11`
friends.appendChild(friend)