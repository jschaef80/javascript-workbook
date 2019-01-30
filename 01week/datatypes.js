// 1. Write a JavaScript program to display the current day and time.
const dateTime = new Date();
document.write(dateTime);

// 2. Write a JavaScript program to convert a number to a string.
var num = 10;
var str = num.toString();
console.log(str)

// 3. Write a JavaScript program to convert a string to the number.
var str = "10"
var num = Number(str)
console.log(typeof num)

// 4. Write a JavaScript program that takes in different datatypes and prints out whether they are a: Boolean, Null, Undefined, Number, NaN, String
console.log(typeof true);
console.log(typeof null);
console.log(typeof x);
console.log(typeof 5);
console.log(typeof Nan)
console.log(typeof "Hello World")

// 5. Write a JavaScript program that adds 2 numbers together.
var x = 5;
var y = 5;
var z = x + y;
console.log(z)

// 6. Write a JavaScript program that runs only when 2 things are true.
function myFunction(val1, val2){
    if ((val1 % 2 == 1) && (val2 % 2 == 0)){
    return true
  } else {
    return false
    }
  }
  console.log(myFunction(1, 2))

// 7. Write a JavaScript program that runs when 1 of 2 things are true. 
function myFunction(val1, val2){
    if ((val1 % 2 == 0) || (val2 % 2 == 1)){
    return true
  } else {
    return false
    }
  }
  console.log(myFunction(4, 2))

// 8. Write a JavaScript program that runs when both things are not true.
function myFunction(val1, val2){
    if ((val1 % 2 == 1) && (val2 % 2 == 1)){
    return false
  } else {
    return true
    }
  }
  console.log(myFunction(4, 2))


  