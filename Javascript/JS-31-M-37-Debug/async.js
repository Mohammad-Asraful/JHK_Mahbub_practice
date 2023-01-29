const doSomething = () => {
   console.log('third')
}


console.log('first')
console.log('second')
// doSomething()
// setTimeout(doSomething)
fetch('https://jsonplaceholder.typicode.com/todos/1')
   .then(response => response.json())
   .then(json => console.log(json))

setTimeout(() => { console.log('third') })
console.log('fourth')
console.log('fifth')

