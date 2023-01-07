class Support {
   name;
   designation = 'Support Web Dev';
   address = 'BD';
   startSession() {
      console.log('start a support session')
   }
}

const aamir = new Support()
console.log(aamir)


// practice
class Supports {
   name1
   role = 'support web dev'
   address1 = 'BD'
   constructor(name1) {
      this.name1 = name1
   }
   startSession1() {
      console.log('start a support session')
   }
}
const amir = new Supports('Amir Khan')
console.log(amir)
const salman = new Supports('Salman Khan')
console.log(salman)