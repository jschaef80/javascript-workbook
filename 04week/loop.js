// for loop
const cars = ["ford", "chevrolet", "dodge", "mazda", "fiat"];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i])
}
// for...in loop
const persons = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female",
}

// Use a for...in loop to console.log each key.

var text = "";
var x = Object.keys(persons);
for (x in persons) {
  text += x + " ";
}
console.log(text);

// Use a for...in loop and if state to console.log the value associated with the key birthDate.

var text1 = "";
var x = Object.keys(persons);
for (x in persons) {
	if (x === 'birthDate') {
		text1 += persons[x];
    } 
} 
console.log(text1);

// while loop
let number = 0;
while (number < 1000){
  number ++;
  console.log(number);
}

//do while
let digit = 0;
do {
  digit += 1;
  console.log(digit);
} while (digit < 1000);

// When is a for loop better than a while loop?


// How is the readability of the code affected?


// What is the difference between a for loop and a for...in loop?


// What is the difference between a while loop and a do...while loop?

