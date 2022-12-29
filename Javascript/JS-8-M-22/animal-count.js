/* function animalCount(miles) {
   const animalQuantityFirst10Miles = 10;
   const animalQuantitySecond10Miles = 50;
   const animalQuantityRestMiles = 100;
   if (miles <= 10) {
      const count = miles * animalQuantityFirst10Miles;
      return count;
   } else if (miles <= 20) {
      const firstDenseAnimals = 10 * animalQuantityFirst10Miles;
      const restMiles = miles - 10;
      const secondDenseAnimals = restMiles * animalQuantitySecond10Miles;
      const totalAnimals = firstDenseAnimals + secondDenseAnimals;
      return totalAnimals;
   } else {
      const firstDenseAnimals = 10 * animalQuantityFirst10Miles;
      const secondDenseAnimals = 10 * animalQuantitySecond10Miles;
      const restMiles = miles - 20;
      const RestDenseAnimals = restMiles * animalQuantityRestMiles;
      const totalAnimals = firstDenseAnimals + secondDenseAnimals + RestDenseAnimals;
      return totalAnimals;
   }
}
const animals = animalCount(12);
console.log(animals); */
// console.log((10 * 10) + (10 * 50) + (100 * 15))

// // //
function animalCounting(miles) {
   let firstTenMile = 10;
   let secondTenMile = 50;
   let anotherMile = 100;
   if (miles <= 10) {
      let firstTenMileTotal = miles * firstTenMile;
      return firstTenMileTotal;
   } else if (miles <= 20) {
      let firstTenMileTotal = 10 * firstTenMile;
      let secondTenMileTotal = ((miles - 10) * secondTenMile) + firstTenMileTotal;
      return secondTenMileTotal;
   } else {
      let firstTenMileTotal = 10 * firstTenMile;
      let secondTenMileTotal = (10 * secondTenMile) + firstTenMileTotal;
      let anotherMileTotal = ((miles - 20) * anotherMile) + secondTenMileTotal;
      return anotherMileTotal;
   }
}
const totalAnimalsOutput = animalCounting(35);
console.log(totalAnimalsOutput);