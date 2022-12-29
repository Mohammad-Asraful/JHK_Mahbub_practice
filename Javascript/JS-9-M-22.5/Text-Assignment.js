// 1. ১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো। 
/* var string = "Asraful";
var bolean = true / false;
var number = 34; */


// ২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে। 
/* let name = "Abu Zafor Emon"
name = "Asraful Alam Jehad"
const schoolName = "KHSC" */


// ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো। 
/* let number1 = 20;
let number2 = 5;
let addition = number1 + number2;
console.log(addition)
let substraction = number1 - number2;
console.log(substraction)
let multiplication = number1 * number2;
console.log(multiplication)
let division = number1 / number2;
console.log(division) */


// ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 
/* // // numb1 is smaller than numb2
let numb1 = 20;
let numb2 = 30;
if (numb1 < numb2) {
   console.log(`${numb2} is bigger than ${numb1}`, true)
} else {
   console.log(`${numb1} is bigger than ${numb2}`, false)
}
// // numb1 is bigger than numb2
numb1 = 40;
numb2 = 30;
if (numb1 > numb2) {
   console.log(`${numb2} is smaller than ${numb1}`, true)
} else {
   console.log(`${numb2} is bigger than ${numb1}`, false)
}
// // numb1 and numb2 are equal
numb1 = 30;
numb2 = 30;
if (numb1 == numb2) {
   console.log(`Both are equal`)
} else {
   console.log(`Both are not equal`)
}
// // numb1 and numb2 are not equal
numb1 = 50;
numb2 = 30;
if (numb1 != numb2) {
   console.log(`Both are not equal`)
} else {
   console.log(`Both are equal`)
}
// // numb1 and numb2 are equal or numb2 is bigger than numb1
numb1 = 25;
numb2 = 30;
if (numb1 <= numb2) {
   console.log(`${numb1} is equal or smaller than ${numb2}`)
} else {
   console.log(`${numb1} is equal or bigger than ${numb2}`)
}
// // numb1 and numb2 are equal or numb2 is smaller than numb1
numb1 = 50;
numb2 = 30;
if (numb1 >= numb2) {
   console.log(`${numb1} is equal or bigger than ${numb2}`)
} else {
   console.log(`${numb1} is equal or smaller than ${numb2}`)
} */


// ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো।

/* // && AND OPERTOR
for (let i = 1; i <= 100; i++) {
   if (i % 3 === 0 && i % 5 === 0) {
      console.log(`And operator`, i);
   }

}
// || OR OPERATOR
for (let i = 1; i <= 100; i++) {
   if (i % 3 === 0 || i % 5 === 0) {
      console.log(`Or operator`, i);
   }

} */


// ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো
/* var MyName = "Asraful Alam"
if (MyName == "Asraful Alam") {
   console.log("My Name is:", MyName)
} else {
   console.log("This is not my name.")
} */


// ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 

/* var number = 7;
while (number <= 19) {
   if (number % 2 === 1) {
      console.log(number)
   }
   number++
} */


// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 

/* var FriendName = ["Sazzad", "Sabit", "Akib", "nnnnnn", "Tanvir", "Nayeem"]
console.log(FriendName);
FriendName[3] = "HD Sazzad"
console.log(FriendName)
FriendName.push("Hridoy", "Tuhin")
FriendName.push("Sabet", "Mehedi")
console.log(FriendName)
FriendName.pop()
console.log(FriendName); 
Splice 
Slice
*/


// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 
/* var FriendName = ["Sazzad", "Sabit", "Akib", "Mehedi", "HD Sazzad", "Tanvir", "Nayeem", "Hridoy", "Sabet", "Tuhin"]
for (let i = 0; i < FriendName.length; i++) {
   console.log(FriendName[i])

} */


// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো
/* var SubNumbers = [34, 44, 55, 66, 77, 88, 80, 65, 91, 90, 51, 84, 99, 75, 83]
for (let i = 0; i < SubNumbers.length; i++) {
   if (SubNumbers[i] >= 80) {
      console.log(SubNumbers[i])
   }
} */


// ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 
/* function Addition(n1, n2, n3) {
   let multiply = n1 * n2 * n3;
   return multiply;
}
let totalMultiply = Addition(2, 4, 5)
console.log(totalMultiply); */


// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 
/* var computer = {
   name: "HP",
   processor: "Core i4",
   storage: "256-GB"
}
console.log(computer)
computer.processor = "Core i5"
console.log(computer) */


// // // প্রব্লেম সলভিং চেকলিস্ট/সেলফ এসেসমেন্ট : 

// ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 
/* function feetToInch(feet) {
   inch = feet * 12;
   return inch;
}
var inchResult = feetToInch(12);
console.log(inchResult);
 */


// ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 
/* function centimeterToMeter(centimeter) {
   let meter = centimeter / 100;
   return meter;
}
var centimeterResult = centimeterToMeter(3);
console.log(centimeterResult)
 */

// ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে।                // এইবার ভালো করে খেয়াল করো। প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা, সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা, তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা       // এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 
/* function paperRequirements(Book1, Book2, Book3) {
   var totalPages = Book1 + Book2 + Book3;
   return totalPages;
}
var totalBookPages = paperRequirements(100, 200, 300);
console.log(totalBookPages); */


// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।
/* var myBestFriends = ["Dew Sazzad", "Sabit", "Akib", "Mehedi", "HD Sazzad", "Tanvir", "Nayeem", "Hridoy", "Sabet", "Tuhin"]
function bestFriend(Friends) {
   maxName = Friends[0].length;
   ans = Friends[0];
   for (let i = 0; i < Friends.length; i++) {
      var nameLengthCheck = Friends[i].length
      if (nameLengthCheck > maxName) {
         ans = Friends[i];
         maxName = nameLengthCheck;
      }

   }
   return ans;
}
console.log(bestFriend(myBestFriends)) */
// Again for try
/* const bestFriendNames = ["HD Sazzad", "Sabit", "Akib", "Dew Sazzad", "Tuhin", "Mehedi", "Nayeem", "Shakhawat", "Sabet"]

function bestFriend(FriendsArray) {
   let largeFriendName = FriendsArray[0]
   for (let friend of FriendsArray) {
      if (friend.length > largeFriendName.length) {
         largeFriendName = friend;
         console.log(largeFriendName)
      }

   }
}
bestFriend(bestFriendNames); */


// ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।
/* const numbersArray = [12, 22, 21, 32, 34, 26, 33, 43, 55, 68, 78, 23, 24, 766, 444, 44, 33, 567, 8, 111, 10]
function printEvenNumbers(numbers) {
   let evenNumberCheck = [];
   for (let i = 0; i < numbers.length; i++) {

      if (numbers[i] % 2 === 0) {
         evenNumberCheck = numbers[i]
         console.log(evenNumberCheck);
      }
   }
}
printEvenNumbers(numbersArray); */
// Again for try.
/* const myArray = [12, 22, 21, 32, 34, 26, 33, 43, 55, 68, 78, 23, 24, 766, 444, 44, 33, 567, 8, 111, 10]
function getEvanNumbers(numbers) {
   let takeEvenNumbers = [];
   for (let i = 0; i < numbers.length; i++) {

      if (numbers[i] % 2 === 0) {
         takeEvenNumbers = numbers[i]
         console.log(takeEvenNumbers)
      }

   }
}
getEvanNumbers(myArray); */