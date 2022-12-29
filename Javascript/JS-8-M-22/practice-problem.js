// ১. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো।
// Length * Width * Height
function triangleArea(length, width, height) {
   const totalArea = (length * width * height)
   console.log(totalArea)
}
triangleArea(10, 10, 10)
// return function
function trianglesArea(length, width, height) {
   const totalArea = (length * width * height)
   return totalArea;
}
const totalTriangleArea = trianglesArea(20, 20, 20);
console.log(totalTriangleArea);



// ২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো। 

function test_prime(n) {

   if (n === 1) {
      return false;
   }
   else if (n === 2) {
      return true;
   } else {
      for (var x = 2; x < n; x++) {
         if (n % x === 0) {
            return false;
         }
      }
      return true;
   }
}

console.log(test_prime(38));

// factorial
function factorial(numbers) {
   var sum = 1;
   for (let i = 1; i <= numbers; i++) {
      sum *= i;
      console.log(sum)

   }
}
factorial(7);