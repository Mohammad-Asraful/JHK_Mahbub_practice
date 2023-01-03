const priya = 'Asif Akbar'
const meye = "Meye tumi ki dukkho chino"
const kobita = `kobita tumi sopno charini`
const multiLine = 'This is my first line \n' +
   'This is my second line\n' +
   'This is my third line'

// console.log(multiLine)   

const multiLineNew = `this is multi line
this is second line
this is third line
`
// console.log(multiLineNew)

const friends = ['abul', 'babaul', 'kabul', 'sabul']
const Count = 5
const old = `<h3 class="friend-name">Friend-5</h3>`
const old2 = `<h3 class="friend-name">Friend-` + Count + `</h3>`
const new1 = `<h3 class="friend-name">Friend-${Count}</h3>`
// console.log(new1)
const new2 = `<h3 class="friend-name">Friend-${friends.length}</h3>`
// console.log(new2)

const first = 'Mamun'
const last = 'Chowdhury'
const fullOld = 'This person name is' + first + ' ' + last
const fullNew = `This person name is: ${first} ${last}. Has money ${friends.length * 500}. He lives in Dhaka.`