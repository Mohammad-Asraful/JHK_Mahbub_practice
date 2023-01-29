// একটি ক্লোজার হল একটি ফাংশনের সংমিশ্রণ যা তার আশেপাশের অবস্থার (আভিধানিক পরিবেশ) উল্লেখ সহ একসাথে বান্ডিল (ঘেরা)। অন্য কথায়, একটি ক্লোজার আপনাকে একটি অভ্যন্তরীণ ফাংশন থেকে বাইরের ফাংশনের সুযোগে অ্যাক্সেস দেয়। জাভাস্ক্রিপ্টে, ফাংশন তৈরির সময়, ফাংশন তৈরি করার সময় প্রতিবার ক্লোজার তৈরি করা হয়।

function kitchen() {
   let raost = 0;
   return function () {
      raost++;
      return raost;
   }
}

const firstServer = kitchen()
console.log(firstServer())
console.log(firstServer())
console.log(firstServer())
console.log(firstServer())