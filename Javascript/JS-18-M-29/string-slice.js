/* 
                  topic
                  // split
                  // slice
                  // substr
                  // subSting
                  // join
                  // concat
*/


const anthem = "Amar Sonar Bangla Ami Tomai Valobashi"
const words = anthem.split(' ')
const withoutA = anthem.split('a')
// console.log(withoutA)

// slice ==> specific kono string er joto tuku dorkar toto tuku neoar jonno slice use kora hoy
const smallSlice = anthem.slice(5 /* koto number latter theke shuru */, 13 /* koto number latter a sesh hobe */)
console.log(smallSlice)

// substring
const anotherPart = anthem.substring(11, 15)
console.log(anotherPart)   // like slice

// substr
const anotherParts = anthem.substr(11 /* koto number charecter theke shuru hobe */, 8 /*  and koyta charecter porjonto jabe */)
console.log(anotherParts)

// concat  ==>  kono kichu jukto korar jonno concat use kora hoy
const first = 'Amader'
const second = 'City'
const fullString = first.concat(" ").concat(second).concat(' ').concat('abc').concat(' ').concat('RJ Kibria')
console.log(fullString)

// same as concat       join all array word
const words2 = ['Alim', 'Badhon', 'Cagol', 'David']
// const allJoined = words2.join('')
// const allJoined = words2.join(' ')
// const allJoined = words2.join(',')
const allJoined = words2.join(', ')
console.log(allJoined)