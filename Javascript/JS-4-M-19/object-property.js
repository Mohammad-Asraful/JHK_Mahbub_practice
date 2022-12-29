var computer = {
    price: 29000,
    storage: "256gb",
    color: "silver",
    processor: "intel i5"
}

console.log(computer);
console.log(computer.processor)
var computerPrice = computer.price;
console.log(computerPrice)

// different ways to set a value of an object property.
var propertyName = "price";
computer[propertyName] = 30000;
console.log(computer)

computer.price = 22000;
console.log(computer.price)

computer["price"] = 23000;
console.log(computer)

var storageProperty = "storage"
computer[storageProperty] = "512gb"
console.log(computer.storage)

computer.storage = "1tb";
console.log(computer.storage)

computer["storage"] = "5tb";
console.log(computer.storage)




// Exercise
// object declare
var friends = {
    nameAkib: "Akib Ahmed",
    ageAkib: 25,
    classOfAkib: "Hons 4th year",

    nameNayeem: "Nayeem Forkan",
    ageNayeem: 26,
    classOfNayeem: "Hons 3rd year",

    nameSazzad: "Sazzad Hossain Shanto",
    ageSazzad: 25,
    classOfSazzad: "Hons 4th year"
}

var changeAkibName = "nameAkib"
friends[changeAkibName] = "Akib Hossain"
console.log(friends.nameAkib);

friends.nameNayeem = "Hons 4th Year"
console.log(friends.nameNayeem)

friends["nameSazzad"] = "Sazzad Shanto"
console.log(friends.nameSazzad)

// // //
var changeAgeSazzad = "ageSazzad"
friends[changeAgeSazzad] = 28;
console.log(friends.ageSazzad)

var changeClassOfSazzad = "classOfSazzad"
friends[changeClassOfSazzad] = "Masters"
console.log(friends.classOfSazzad);

// 
var friendsName = {
    name1: "Akib Ahmed",
    name2: "Sazzad Dew",
    name3: "Sazzad HD",
    name4: "Sabit",
    name5: "Nayeem Forkan"
}
// variable declare for change the value.
var changeName2 = "name2"
friendsName[changeName2] = "Sazzad Hossian Shanto"
console.log(friendsName.name2)

// same as before top comment
var changeName4 = "name4"
friendsName[changeName4] = "Sabit BRZ"
console.log(friendsName.name4)

// same as before top comment
var changeName3 = "name3"
friendsName[changeName3] = "Tripto Mojumdar Sazzad"
console.log(friendsName.name3)

