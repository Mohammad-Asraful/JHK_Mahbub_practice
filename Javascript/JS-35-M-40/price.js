let array = [
   { Name: " ASUS", Price: "100", Ram: "12 gb" },
   { Name: " Oppo", Price: "2000", Ram: "12 gb" },
   { Name: " Vivo", Price: "2000", Ram: "12 gb" },
   { Name: " HP", Price: "5000", Ram: "12 gb" },
   { Name: " Apple", Price: "200", Ram: "120 gb" }
];

function mobile(mobile) {
   let sum = 0;
   for (let i = 0; i < mobile.length; i++) {
      let mobiles = mobile[i];
      sum = sum + parseInt(mobiles.Price);
   }
   return sum;
};


let arrays = mobile(array);
console.log(arrays);
