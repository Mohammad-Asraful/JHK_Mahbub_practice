/* const greetings = 'Hello how are you?'

function reverseString(text) {
   let reverse = '';
   for (const letter of text) {
      console.log(reverse);
      reverse = letter + reverse;

   }
   console.log(reverse)
}
const reversed = reverseString(greetings);
console.log(reversed); */


// // // practice
/* const paragraph = "Hello how are you?"
function reverseStrings(text) {
   let reverse = "";
   for (let i = 0; i < text.length; i++) {
      letter = text[i];
      reverse = letter + reverse;
   }
   console.log(reverse)
}
const reverseStr = reverseStrings(paragraph)
console.log(reverseStr) */

// // practice 
const passage = "Where are you going"
function passageReveerse(text) {
   let reversePassage = "";
   /* for (i = 0; i < text.length; i++) {
      let singleLetter = text[i];
      reversePassage = singleLetter + reversePassage;
      console.log(reversePassage)
   } */
   for (const letter of text) {
      reversePassage = letter + reversePassage;
   }
   console.log(reversePassage)
}
passageReveerse(passage)