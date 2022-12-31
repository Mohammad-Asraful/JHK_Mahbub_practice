/* 
                  topic
                  // sort
                  // reverse
                  // number sorting with using function
*/


const numbers = [4, 7, 1, 3, 9, 2, 5]
const sortedNumbers = numbers.sort()
// console.log(sortedNumbers)
const friends = ['kabli', 'joim', 'raZZak', 'anwar', 'deepjol', 'badsha']
// const sortedFriends = friends.sort()   // number/latter onujayi sajiye likha
// console.log(sortedFriends)

// const reverseFriends = friends.reverse()  // for reverse array
// console.log(reverseFriends)

const sortedReversedFriends = friends.sort().reverse()
console.log(sortedReversedFriends)

// number sorting fun
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2]
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
   return a - b
})
console.log(sortedBigNumbers)