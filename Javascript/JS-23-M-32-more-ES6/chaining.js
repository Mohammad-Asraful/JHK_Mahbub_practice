// declear variable based on the name of an object property
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 }
const { x, b } = myObject
console.log(b)

// destructuring array
const [p, q] = [45, 47, 91, 86]
console.log(p, q)

const [best, faltu] = ['Sazzad', 'Asraf']
// console.log(best, faltu)
const { sky, color, money } = { sky: 'blue', soil: 'matti', color: 'red', money: 500 }

// chainnig object
const company = {
   name: 'GP',
   ceo: {
      id: 1,
      name: 'ajmol',
      food: 'fuchka'
   },
   web: {
      work: 'website development',
      employee: 22,
      framework: 'react',
      tech: {
         first: 'html',
         second: 'css',
         third: 'js'
      }
   }
}
