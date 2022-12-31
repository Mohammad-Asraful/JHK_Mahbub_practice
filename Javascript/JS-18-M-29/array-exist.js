/*
                     topic
                     // indexOf
                     // includes
                     // concat
                     // isArray 
*/

function megaFriend(friends) {
   if (Array.isArray(friends) == false) {
      return 'Please provide an array'
   }

   let mega = friends[0]
   for (const friend of friends) {
      if (friend.length > mega.length) {
         mega = friend
      }

   }
   return mega;
}
const friends = ['Kutub', 'Lion', 'Shamol', 'Sabbir']
const myBigBuddy = megaFriend(friends)
// const myBigBuddy = megaFriend(1212)
console.log(myBigBuddy)

if (friends.indexOf('Lion') != -1) {
   console.log('Lion exist')
} else {
   console.log('Fox doesn\'t exist')
}

// includes
if (friends.includes('Lion')) {
   console.log('Lion exist using includes')
}

// concat / concatination / concatinate
const first = [1, 3, 5]
const second = [4, 6, 8, 9]
const combined = first.concat(second)
console.log(combined)

