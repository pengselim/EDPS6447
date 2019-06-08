/* 

Example of multi-line comments syntax in JS:
https://www.w3schools.com/js/js_comments.asp

Single line comments can be added via "//"

*/

// Debug your code by printing information in the console. Open the console in your browser's developer tool. For additional options, see https://www.w3schools.com/js/js_output.asp

console.log("Hello World!");

// Defining a variable, see https://www.w3schools.com/js/js_datatypes.asp
var helloworld; // variable is undefined
console.log(helloworld);

var helloword = null; // variable is defined, but with no value
console.log(helloword);

// Assigning values to variables
helloworld = 5; // variable is a number without decimals
console.log(helloworld);

helloworld = 5.01; // variable is a number with decimals
console.log(helloworld);

helloworld = true; // variable is a boolean value
console.log(helloworld);

helloworld = "Hello World"; // variable is a string
console.log(helloworld);

helloworld = ["Hello", "World"]; // variable is an array
console.log(helloworld);

helloworld = {first: "Hello", second: "World"}; // variable is an object
console.log(helloworld);

// Arithmetic Operators, see https://www.w3schools.com/js/js_operators.asp
helloworld = 3+4;
console.log(helloworld);

// String Concatenation, see https://www.w3schools.com/js/js_operators.asp
helloworld = "Hello" + " World " + 7;
console.log(helloworld);

/* JavaScript provides you with a list of properties and methods for both strings and numbers to transform and gain information about the values assigned in variables. We will revisit these later, but the relevant documentation is available here.
    String Methods: https://www.w3schools.com/js/js_string_methods.asp
    Number Methods: https://www.w3schools.com/js/js_number_methods.asp
*/

// HTML elements can also be assigned to variables, we will make extensive use of this method in JS for building web apps to return the element with the ID attribute of a specified value - https://www.w3schools.com/jsref/met_document_getelementbyid.asp

// UI Views
var section_content = document.getElementById("section_content");
console.log(section_content);
var view_landing = document.getElementById("view_landing");
console.log(view_landing);

// UI Components (e.g., Icons, Buttons)
var input_ico_locate = document.getElementById("input_ico_locate");
console.log(input_ico_locate);
var input_btn_now = document.getElementById("input_btn_now");
console.log(input_btn_now);


