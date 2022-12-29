const myYear = 2023;
const yourYear = 2088;
function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    return false;
}

var isMyYearLeapYear = isLeapYear(myYear)
console.log("Is my year is leap year: ", isMyYearLeapYear);
// 
const isYourYearLeapYear = isLeapYear(yourYear)
console.log("Is Your year is leap year", isYourYearLeapYear)


// 
// program to check leap year
function checkLeapYear(year) {
    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}
// take input
const year = 2400;

checkLeapYear(year);



// // // // //      Try leap year
function leapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        console.log(year, `is a leap year`);
    } else {
        console.log(year, `is not a leap year`)
    }
}
const dropYear = 2300;
leapYear(dropYear)