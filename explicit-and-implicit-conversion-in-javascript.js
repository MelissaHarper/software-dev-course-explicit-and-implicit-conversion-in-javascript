/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean(""); //assuming "false" is desired, removing the word "false" and leaving the string empty makes it falsy
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
age = Number(age); //this step converts the string "25" to a number
let totalAge = age + 5;
console.log("Total Age: " + totalAge);


let width; //undefined
console.log("width is a " + typeof width);

width = 0.5; //initializes width and implicitly converts to a Number (float)
console.log("width is a " + typeof width);

let length = 3;
let depth = "0.75";
console.log("depth is a " + typeof depth);

let feet = "true";
console.log("feet is a " + typeof feet);

feet = Boolean(feet); //explicit conversion of feet
console.log("feet is " + typeof feet + "and is " + feet);

if (feet) {
  console.log("Total board feet is ", (width * length * depth) / 12); //implicit conversion of depth 
} else {
  console.log("Total board feet is ", (width * length * depth) / 144); //implicit conversion of depth 
}
