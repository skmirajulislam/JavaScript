let num  = '5' + 5
console.log(num); // . its called type coerction

/*
Type coercion in JavaScript refers to the process of automatically 
converting one data type to another when you perform an operation or comparison that involves different data types. 
JavaScript is a dynamically typed language, 
which means that variables can change their data type as needed.
 */

let num1 = 5 + 5
console.log(num1);

// but in case of multipliction and substraction & division it will convert string to nim then 
// performs operation .

let num2 = '5' - 5
console.log(num2);

let num3 = '5' * 5
console.log(num3);

let num4 = '10'/2
console.log(num4);

/*
The strict comparison operator checks the type of the variable while comparing,
and the assignment operator assigns the given value to the variable. 
These two operators don't perform type coercion.
*/