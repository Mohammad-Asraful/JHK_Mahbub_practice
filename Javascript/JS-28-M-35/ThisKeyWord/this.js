console.log(this)

const kodomAli = {
   name: 'Kodom Ali',
   money: 5000,
   study: 'Math',
   subjects: ['casculas', 'algebra', 'geometry'],
   exam: function () {
      console.log(this)
      return (this.name + 'is participating in an exam')
   },

   examArrow: () => {
      console.log(this)
   },

   examNested: () => {
      const arrow = () => {
         console.log(this)
      }
      arrow()
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
kodomAli.exam()


function clickHandler() {
   console.log('inside click handler', this)
}

document.getElementById('click-2').addEventListener('click', function () {
   console.log(this)
})