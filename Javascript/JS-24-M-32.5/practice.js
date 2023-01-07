// 1. variable declearation: কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।
const name = `Asraful Alam Jehad`
let age = 25
age = 26

// 2. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 
const details = `My name is ${name}. And my age is ${age}.`
console.log(details)

// ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে।
const divided = (number) => number / 5
const divide = divided(10)
console.log(divide)

// ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 
// way - 1
const multiplyy = (num1, num2) => ((num1 + 2) * (num2 + 2))
console.log(multiplyy(18, 18))
// way - 2
const multiply = (num1, num2) => {
   num1 = num1 + 2
   num2 = num2 + 2
   const result = num1 * num2
   return result
}
const into = multiply(8, 8)
console.log(into)

// ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 
// system - 1
/* const multiply3 = (num1, num2, num3) => num1 * num2 * num3
const into3 = multiply3(10, 10, 10)
console.log(into3) */
// 
// system - 2
const multiply3 = (num1, num2, num3) => {
   const result = num1 * num2 * num3
   return result
}
const into3 = multiply3(10, 10, 11)
console.log(into3)

// ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।
const addition = (number1, number2) => {
   number1 += 2
   number2 += 2
   const result = number1 * number2
   return result
}
const add = addition(18, 18)
console.log(add)


// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
const numbers = [4, 5, 7, 9, 10, 6]
let newNumbers = []
const number = numbers.map((num) => newNumbers.push(num * 5))
console.log(newNumbers)

// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 
const numbersArray = [15, 22, 88, 65, 79, 19, 93, 15, 90, 38, 77, 10, 22, 90, 99];
const oddNumbers = numbersArray.filter((num) => num % 2 === 1)
console.log(oddNumbers)

// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
const products = [
   {
      mobile: "iphone",
      price: 100000
   },
   {
      mobile: "samsung",
      price: 50000
   },
   {
      mobile: "Asus",
      price: 70000
   },
   {
      mobile: "samphony",
      price: 5000
   },
   {
      mobile: "HTC",
      price: 30000
   }
]
const product = products.find((findPrice) => findPrice.price === 5000)
console.log(product)

// ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।
// ১। map => map শুধু array এর উপর লুপ এর মত কাজ করে, একটি array এর উপর সকল এলিমেন্ট গুলোকে for loop এর মত বার বার run করতে থাকে। map একটা object return করবে।
// ২। for each ও map এর মত কাজ করবে। for each কিছুই return করে না।
// ৩। filter একটা array return করবে, array মধ্যে থেকে কিছু বের করতে হলে filter use করে বের করা যেতে প্যাঁরে।
// ৪। find একটা object return করবে, object মধ্যে থেকে কিছু বের করতে হলে find use করে বের করা যেতে প্যাঁরে।


// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।
const obj = { objName: "Rizvi", objAge: 23, gender: "male" }
const { objName, objAge, gender } = obj
console.log(objName)
console.log(objAge)
console.log(gender)

// ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।
const numberOfArray = [10, 20, 30, 40, 50, 11, 22, 44, 33]
const [n1, n2, three, ...n4] = numberOfArray
// const three = n3
console.log(three)

// ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 
const threeParameterFunc = (n1, n2, n3 = 7) => {
   const sum = n1 + n2 + n3
   return sum
}
const prints = threeParameterFunc(10, 20)
console.log(prints)

// ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )
const phoneDetails = {

   mobileBrand: {
      phoneName: 'iphone-14',
      storageWisePrice: {
         storage: {
            ram: '8 GB',
            rom: '256 GB',
         },
         price: 120000,
      },
   },

   mobileBrand: {
      phoneName: 'Samsung S22 Ultra',
      storageWisePrice: {
         storage: {
            ram: '8 GB',
            rom: '128 GB',
         },
         price: 140000,
      },
   },

   mobileBrand: {
      phoneName: 'Asus ZenPhone',
      storageWisePrice: {
         storage: {
            ram: '6 GB',
            rom: '64 GB',
         },
         price: 40000,
      },
   },

   mobileBrand: {
      phoneName: 'HTC',
      storageWisePrice: {
         storage: {
            ram: '4 GB',
            rom: '32 GB',
         },
         price: 25000,
      },
   }

}

const printPhoneName = phoneDetails?.mobileBrand?.phoneName?.ram
console.log(printPhoneName)

const printPhoneRom = phoneDetails?.mobileBrand?.storage?.ram
console.log(printPhoneRom)

const storageWisePrice = phoneDetails?.mobileBrand?.storageWisePrice?.storage?.rom
console.log(storageWisePrice)