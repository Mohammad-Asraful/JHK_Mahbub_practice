// //       বেসিক জাভাস্ক্রিপ্ট চেকলিস্ট 
// ১. আমি যদি বলি তিনটা ভেরিয়েবল ডিক্লেয়ার করতে হবে। সেটা তোমাকে পারতে হবে। 
var age = 26;
let position = "Student in CSE";
const name = "Asraful Alam";


// ২. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে
for (let i = 1; i <= 100; i++) {
   console.log(i)

}

// ৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে।
for (let i = 51; i <= 80; i += 2) {
   console.log("Odd Numbers in 50 to 80", i)

}

// with if condition
for (let i = 50; i <= 80; i++) {
   if (i % 2 != 0) {
      console.log(`Odd number:`, i)
   }

}

// ৪. তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো 
function add(number1, number2, number3) {
   let sum = number1 + number2 + number3;
   console.log(`Total number is:`, sum);
}
add(20, 30, 44);

// with value return
function addSum(number1, number2, number3) {
   let sum = number1 + number2 + number3;
   return (sum);
}
const totalNumbers = addSum(20, 30, 44);
console.log(`Total number is:`, totalNumbers);


/* Exercise 2 */
// ১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 
// Celsius to Farenheit
function farenheitConvertor(celsiusValue) {
   let farenheit = ((celsiusValue * 1.8) + 32);
   return farenheit;
}
/*
//       Take user value
var getFarenheit = farenheitConvertor(prompt("Enter your Celsius number: ")) 
alert(getFarenheit);
*/
var getFarenheit = farenheitConvertor(13)
console.log(getFarenheit);



// ২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে।
// Farenheit to Celsius
function celsiusConvertor(farenheitValue) {
   let celsius = ((farenheitValue - 32) / 1.8);
   return celsius;
}

/* //       Take user value
var getCelsius = celsiusConvertor(prompt("Enter your Farenheit number: "))
alert(getCelsius); */
var getCelsius = celsiusConvertor(13)
console.log(getCelsius);



// ৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে।
function getGPA() {
   const Subjectnumber = prompt("Enter Your Subject Number: ")
   if (Subjectnumber >= 80) {
      console.log("You got A+")
      alert("You got A+")
   } else if (Subjectnumber >= 70) {
      console.log("You got A")
      alert("You got A")
   } else if (Subjectnumber >= 60) {
      console.log("You got A-")
      alert("You got A-")
   } else if (Subjectnumber >= 50) {
      console.log("You got B")
      alert("You got B")
   } else if (Subjectnumber >= 40) {
      console.log("You got C")
      alert("You got C")
   } else if (Subjectnumber >= 33) {
      console.log("You got D")
      alert("You got D")
   } else {
      console.log("You got F and You are Failed")
      alert("You got F and You're Failed")
   }


}
// getGPA()


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




//  IIFE function (Immidiately invokable function expression)
(function plus(number1, number2) {
   console.log(number1 + number2)
})(23, 23);