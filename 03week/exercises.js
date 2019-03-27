// 1. Length
let cars = ["Ford", "Chevrolet", "Dodge", "Jeep"];
console.log("cars.length: ", cars.length, "\n");

// 2. Concat
let moreCars = ["Nissan", "Fiat", "Lexus", "Honda"];
let totalCars = cars.concat(moreCars);
console.log("cars concat: ", totalCars, "\n");

// 3. indexOf and lastIndexOf
console.log("indexof Honda: ", moreCars.indexOf("Honda"), "\n");
console.log("indexof Ford: ", cars.lastIndexOf("Ford"), "\n");

// 4. join
let stringOfCars = totalCars.join(" ");
console.log("stringofcars join: ", stringOfCars, "\n");

// 5. split
console.log("stringofcars split: ", stringOfCars.split(" "), "\n");

// 6. reverse
let carsInReverse = totalCars.reverse(); 
console.log("carsinreverse reverse: ", carsInReverse, "\n");

// 7. sort
let sortedCars = []
sortedCars = sortedCars.concat(carsInReverse)
sortedCars.sort();
console.log("sortedcars concat: ", sortedCars, "\n");

// 8. slice
let removedCars = carsInReverse.slice(3, 5);
console.log("removedcars slice: ", removedCars, " ", carsInReverse, "\n");

// 9. splice
let spliced = carsInReverse.splice(1, 2, "Ford", "Honda",);
console.log("carsinreverse splice: ", carsInReverse, "\n");

// 10. push
carsInReverse.push("Lexus", "Fiat");
console.log("carsinreverse push: ", carsInReverse, "\n");

// 11. pop
carsInReverse.pop([-1]);
console.log("carsinreverse pop: ", carsInReverse, "\n");

//12. shift
carsInReverse.shift([1]);
console.log("carsinreverse shift: ", carsInReverse, "\n");

//13. unshift
carsInReverse.unshift("Ferrari");
console.log("carsinreverse unshift: ", carsInReverse, "\n");

//1. forEach
let numbers = [ 23, 45, 0, 2 ];
numbers.forEach(function(numbers) {
    numbers += 2;
    console.log(numbers);
  });