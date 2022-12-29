var computer = {
    price: 29000,
    storage: "156gb",
    color: "silver",
    processor: "intel i5"
}

// set a object property value
console.log(computer);
console.log(computer.processor);
var computerPrice = computer.price;
console.log(computerPrice);
// 
var computerColor = computer.color;
var computerColor = "red";
console.log(computerColor)
// 
computer.price = 22000;
console.log(computer.price)

// different ways to set a value of an object property
computer["price"] = 24000;
console.log(computer);
console.log(computer.price);
// 
var storageProperty = "storage";
computer[storageProperty] = "1TB"
console.log(computer.storage)