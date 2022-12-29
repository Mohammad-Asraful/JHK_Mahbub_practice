// // // ১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।
/* function leapYear() {
    var leap_Year = 2023;

    if (leap_Year % 4 == 0) {
        console.log("This year is leap year so this is", true)
    } else {
        console.log("This year is not a leap year so this is", false)
    }

    return (leap_Year);
}

var leapYearResult = leapYear();
console.log(leapYearResult); */

// // // ২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।

function myAge(age) {
    if (age % 2 == 0) {
        console.log('even', true)
    } else {
        console.log('odd', false)
    }
    return (age);
}

myAge(4);

/* if (myAge() == "even") {
    console.log(true)
} else {
    console.log(false)
} */

// returnAge = myAge(5);
// console.log(returnAge)


// // // ৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।

function convertor(hour) {
    var hoursToMinute = hour * 60;
    alert(hoursToMinute)
    return (hoursToMinute);
}

var hourConvertIntoMinutes = convertor(prompt("Take an hour, which you want to change to minutes."))

console.log(hourConvertIntoMinutes);