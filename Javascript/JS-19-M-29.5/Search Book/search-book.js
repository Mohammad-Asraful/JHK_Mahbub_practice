const booksName = [
   'A Smarter Way to Learn JavaScript.',
   'A Brain-Friendly Guide.',
   'Eloquent JavaScript.',
   'The Definitive Guide.',
   'Secrets of the JavaScript Ninja.',
   'The Good Parts.',
   'Interactive Front-End Web Development.',
   'ES6 and Beyond.'
]

const find = 'javascript'
const books = []
/* for (const book of booksName) {
   if (book.toLowerCase().indexOf(find) != -1) {
      books.push(book)
   }
}
console.log(books) */

for (const book of booksName) {
   if (book.toLowerCase().includes(find)) {
      books.push(book)
   }
}
console.log(books)

// sort
const numbers = [1, 3, 5, 7, 9, 4, 22, 33, 11, 23, 52, 14, 18]

numbers.sort(function (a, b) {
   return a - b
})
console.log(numbers)

