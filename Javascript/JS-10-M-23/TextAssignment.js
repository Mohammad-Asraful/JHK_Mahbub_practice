// ১. [ ফাংশন নেম দিতে হবে anaToVori ]: একটা ফাংশন এ প্যারামিটার হিসেবে নিবে আনা (ana)। তারপর সেটাকে ভরি তে কনভার্ট করে কত মান হয় সেই সংখ্যা রিটার্ন করবে। শুধু সংখ্যাটা রিটার্ন করবে।
/* function anaToVori(ana) {
   let vori = ana / 16;
   console.log(vori)
}
anaToVori(16); */



// ২. [ ফাংশন নেম দিতে হবে pandaCost]: তিনটা প্যারামিটার লাগবে। ভিডিও ভালো করে দেখবে।
// ১ টি সিঙ্গারা এর দাম – ৭ টাকা, ১ টি সমুচা এর দাম – ১০ টাকা ,১ টি জিলাপি এর দাম – ১৫ টাকা
// এখন সে যদি বিভিন্ন সংখ্যার সিঙ্গারা, সমুচা, আর জিলাপি এর অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে।
/* function pandaCost(singara, somucha, jilapi) {
   let totalSingaraPrice = 7 * singara;
   let totalSomuchaPrice = 10 * somucha;
   let totalJilapiPrice = 15 * jilapi;
   let totalPrice = totalSingaraPrice + totalSomuchaPrice + totalJilapiPrice;
   return totalPrice;
}
let totalPriceShow = pandaCost(10, 3, 4);
console.log(totalPriceShow); */



// ৩. [ ফাংশন নেম দিতে হবে picnicBudget]: প্যারামিটার হিসাবে নিবে কয়জন পিকিনিক এ যাবে সেই সংখ্যা।
// যদি ১০০ বা তার কম যায় তাহলে প্রত্যেক এর জন্য খরচ হবে ৫০০০ টাকা করে।
// যদি ১০০ এর বেশি কিন্তু ২০০ এর কম বা সমান যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি (অর্থাৎ ১০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক ওই জন্য ৪০০০ টাকা করে দিতে হবে।
// আর যদি ২০০ এর বেশি যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যতজন আছে তাদের প্রত্যেকের জন্য ৪০০০ টাকা করে দিতে হবে। এর ২০০ এর বেশি (অর্থাৎ ২০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক এর জন্য ৩০০০ টাকা করে দিতে হবে।
// এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে কতটাকা পিকনিক এর বাজেট হতে হবে। ইনপুট প্যারামিটার সংখ্যাটা ১০০ এর কম হতে পারে। ১০০ থেকে ২০০ এর মধ্যে হতে পারে। আবার ২০০ এর বেশিও হতে পারে। তাই সব কেইস ভালো করে টেস্ট করে নিবে। 

function picnicBudget(quantityPicnicMembers) {
   let first100Member = 5000;
   let second100Member = 4000;
   let anotherMember = 3000;
   if (quantityPicnicMembers <= 100) {
      let first100MemberTotal = quantityPicnicMembers * first100Member;
      return (first100MemberTotal);
   } else if (quantityPicnicMembers <= 200) {
      let first100MemberTotal = 100 * first100Member;
      let second100MemberTotal = (((quantityPicnicMembers - 100) * second100Member) + first100MemberTotal);
      return (second100MemberTotal);
   } else {
      let first100MemberTotal = 100 * first100Member;
      let second100MemberTotal = ((100 * second100Member) + first100MemberTotal);
      let anotherMemberTotal = (((quantityPicnicMembers - 200) * anotherMember) + second100MemberTotal)
      return anotherMemberTotal;
   }
}
let totalAmount = picnicBudget(201);
console.log(totalAmount);

// console.log((100 * 5000) + (100 * 4000) + 3000)