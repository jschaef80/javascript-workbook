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
    // A for loop runs "n" times but a while loop runs until a certain condition becomes false. If the initial condition is false, the while loop wont run at all. So if your condition is initially false, a for loop is better.

// What is the difference between a for loop and a for...in loop?
    // A for loop repeats until a specified condition evaluates to false.
    //The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements.

// What is the difference between a while loop and a do...while loop?
    // The do...while statement repeats until a specified condition evaluates to false. A while statement executes its statements as long as a specified condition evaluates to true. 