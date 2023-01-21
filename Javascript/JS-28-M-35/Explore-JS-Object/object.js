// create Object using object literals
const player = {}
player.name = 'Small Nirob'
player.speciality = 'batsman'
player.bat = function () {
   console.log('swing your bat')
}
console.log(player)
player.bat()

const student = {
   name: 'Pande',
   job: 'khay ande',
   ball: function () {
      console.log('Throw the ball')
   },
   salary: 10000
}
console.log(student)
student.ball()

// object constructor
const person = new Object()
console.log(person)

// 3. object create
// const item = Object.create(null)
// console.log(item)
const atel = Object.create(student)
console.log(atel.name)

// 4. class
class Person {
   name = 'abul'
   address = 'sodor ghat'
   constructor(age) {
      this.age = age
   }
}
const person1 = new Person(56)
console.log(person1)

// 5. Function
function Car(model, price) {
   this.model = model
   this.price = price
}

const tesla = new Car('elon', 32)