/* 
8 way to get undefined

1. variable that is not initiallized will give undefined
let first;
console.log(first)

2. function with no return
function second(a, b) {
   const total = a + b
}
const result = second()
console.log(result)

3. parameter that is not passed will be undefined
function third(a, b, c, d) {
   const total = a + b + c + d
   console.log(a, b, c, d)
}
third(2, 5)

4. if return has nothing on the right side will return undefined
function noNegative(a, b) {
   if (a < 0 || b < 0) {
      return
   }
   return a + b
}
const total = noNegative(2, -5) // don't include negative value
console.log(total)

5. property that doesn't exists on an object will give you undefined
const fifth = { id: 2, name: 'fifth', age: 40 }
console.log(fifth.age, fifth.salary)

6.accessing array elements outside of the index range
const sixth = [4, 55, 66, 77, 38, 20, 98, 71]
console.log(sixth[1], sixth[5], sixth[100])

7. deleting an elements inside an array
const seventh = [4, 55, 66, 77, 38, 20, 98, 71]
delete seventh[1] // you should not do it, Instead use splice
console.log(seventh[1], seventh[5], seventh[100])
console.log(seventh)

8. set a value directly to undefined
const eight = undefined
const ninth = null
const data = { result: [], updated: null }
// console.log(eight, ninth, data.result, data.updated)
// console.log(typeof undefined)
console.log(typeof null)

*/



