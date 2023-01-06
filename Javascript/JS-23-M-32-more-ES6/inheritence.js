class Supports {
   name1
   role = 'support web dev'
   address1 = 'BD'
   constructor1(name1, address1) {
      this.name1 = name1
      this.address1 = address1
   }
   startSession1() {
      console.log(this.name1, 'start a support session')
   }
}
const amir = new Supports('Amir Khan', 'BD')
console.log(amir)
const salman = new Supports('Salman Khan', 'Dubai')
console.log(salman)


// 
class StudentCare {
   name;
   designation = 'Student care web dev'
   address = 'BD'
   constructor(name, address) {
      this.name = name
      this.address = address
   }

   BuildARoutine(student) {
      console.log(this.name, 'Build a routine for', student)
   }
}
const alia = new StudentCare('Alia bhatt', 'Mumbai')
console.log(alia)


// 
class NeptuneDev {
   name;
   designation = 'Student care web dev'
   address = 'BD'
   constructor(name, address) {
      this.name = name
      this.address = address
   }

   BuildARoutine(student) {
      console.log(this.name, 'Build a routine for', student)
   }
}