/* 

Example of multi-line comments syntax in JS:
https://www.w3schools.com/js/js_comments.asp

Single line comments can be added via "//"

// Debug your code by printing information in the console. Open the console in your browser's developer tool. For additional options, see https://www.w3schools.com/js/js_output.asp

console.log("Hello World!");

// Defining a variable, see https://www.w3schools.com/js/js_datatypes.asp
var helloworld; // variable is undefined
console.log(helloworld);

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

 JavaScript provides you with a list of properties and methods for both strings and numbers to transform and gain information about the values assigned in variables. We will revisit these later, but the relevant documentation is available here.
    String Methods: https://www.w3schools.com/js/js_string_methods.asp
    Number Methods: https://www.w3schools.com/js/js_number_methods.asp


// HTML elements can also be assigned to variables, we will make extensive use of this method in JS for building web apps to return the element with the ID attribute of a specified value - https://www.w3schools.com/jsref/met_document_getelementbyid.asp
*/

// UI Landing
var landingslide1 = document.getElementById("landingslide1");
console.log(landingslide1);
var landingslide2= document.getElementById("landingslide2");
console.log(landingslide2);
var landingslide3 = document.getElementById("landingslide3");
console.log(landingslide3);



// UI Components (Nav Icons)
var arrowleft = document.getElementById("arrowleft");
console.log(arrowleft);
var arrowleft = document.getElementById("arrowleft");
console.log(arrowleft);
var arrowleft = document.getElementById("arrowleft");
console.log(arrowleft);
var arrowleft = document.getElementById("arrowleft");
console.log(arrowleft);

// UI Component (Pagination)
var arrowleft = document.getElementById("arrowleft");
console.log(arrowleft);
var arrow1= document.getElementById("arrow1");
console.log(arrow1);
var arrow2 = document.getElementById("arrow2");
console.log(arrow2);
var arrow3 = document.getElementById("arrow3");
console.log(arrow3);
var arrowright = document.getElementById("arrowright");
console.log(arrowright);