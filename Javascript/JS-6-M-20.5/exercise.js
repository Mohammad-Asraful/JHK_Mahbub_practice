// ৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। 

(function calc() {
   // p is principal amount
   let principalAmount = 100000;
   // t is time
   let time = 10;
   // r is interest rate
   let interestRate = 7.6
   // x is the final interest 
   let x = principalAmount;
   for (let i = 1; i < time; i++) {
      if (i == 1) {
         x *= (1 + interestRate / 100);
      }
      x = (principalAmount + x) * (1 + interestRate / 100);
   }
   console.log(x)
})()


// 
const principal = 2000;
const time = 5;
const rate = .08;
const n = 12;
const compoundInterest = (p, t, r, n) => {
   const amount = p * (Math.pow((1 + (r / n)), (n * t)));
   const interest = amount - p;
   return interest;
};
console.log(compoundInterest(principal, time, rate, n));

// //
{
   function names() {
      let a = 30;
      return a;
   }
   let b = names();
   console.log(b);
}