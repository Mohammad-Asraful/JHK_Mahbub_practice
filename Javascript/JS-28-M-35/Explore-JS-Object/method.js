// Object method
const student = {
   name: 'Kodom Ali',
   money: 5000,
   study: 'Math',
   subjects: ['casculas', 'algebra', 'geometry'],
   exam: function () {
      return (this.name + 'is participating in an exam')
   },
   improveExam: function (subject) {
      this.exam()
      return `${this.name} is taking improvement exam on ${subject}`
   },
   treatDey: function (amount, tips) {
      this.money = this.money - amount - tips
      return this.money
   }
}
const output = student.exam()
console.log(output)
const reExam = student.improveExam('Algebra')
console.log(reExam)
const remaining = student.treatDey(1900, 100)
console.log(remaining)
const dolaRemaining = student.treatDey(600, 100)
console.log(dolaRemaining)