/*
    Project: Assignment 01: 
    Date: 9/25/23
    Author: Van Do
*/

/* ------------------------------------------------------------------- */

// STEP 1: 
/* Convert the following highlighted identifiers to Camel Case notation:
1a. let some_month
1b. function the Month()
1c. let current-month
1d. let summer_month
1e. let MyLibrary-function   */

// ANSWER 1:
// let someMonth;
// function theMonth();
// let currentMonth;
// let summerMonth;
// let myLibraryFunction;

/* ------------------------------------------------------------------- */

// STEP 2: 
/* Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.
2a. numeric literal expression  
2b. string literal expression
2c. Boolean literal expression
2d. null literal expression   */

// ANSWER 2:
// 4.5
// 'javascript rocks!'
// false
// null

/* ------------------------------------------------------------------- */

// STEP 3: 
/* Give me two examples of complex / variable expressions. */

// ANSWER 3:
// let anEquation = 124 - (18 * 3);
// let secondEquation = 53 + Math.sqrt(49) - 8;

/* ------------------------------------------------------------------- */

// STEP 4:
/* Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers. */

// ANSWER 4:
// let firstName;
// let lastName;
// let address;
// let city;
// let state;
// let zipCode;             
// let yourAge;
// let referralSource;
// let mayWeContactYou;

/* ------------------------------------------------------------------- */

// STEP 5: 
/*  Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.    */

// ANSWER 5:
// const state = CA
// let zipCode = 92108             
// var yourAge = 32

/* ------------------------------------------------------------------- */

// STEP 6: 
/* Create a variable. Add a number and a string and display the coerced result in the browser’s console window.   */

// ANSWER 6:
// let newValue = 8 + '109';
// console.log(number);

/* ------------------------------------------------------------------- */

// STEP 7: 
/* Create two variables. For the first variable, add a Boolean and a string and display the coerced result. For the second variable, add a number and a Boolean and display the coerced result.    */

// ANSWER 7:
// let firstVariable = false + 'result';
// let secondVariable = 2 + true;
// console.log(firstVariable);
// console.log(secondVariable);

/* ------------------------------------------------------------------- */

// STEP 8: 
/* Is the following string literal valid? If not, how would you fix it?
 let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'
 console.log(someString)     */

// ANSWER 8:
// let someString = `Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."`
// console.log(someString) 

/* ------------------------------------------------------------------- */

// STEP 9: 
/* Create a variable that produces a null value in the console window. Then, create a variable that produces an undefined value in the console window.     */

// ANSWER 9:
// let instructor = null;
// let course;
// console.log(instructor);
// console.log(course);

/* ------------------------------------------------------------------- */

// STEP 10: 
/* Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.    */

// ANSWER 10:
// let str = 'JavaScript';
// let num = 98;
// let isFalse = false;
// let obj = {make: 'honda', model: 'accord'};
// let undefinedVar;
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof isFalse);
// console.log(typeof obj);
// console.log(typeof undefinedVar);

/* ------------------------------------------------------------------- */

// STEP 11: 
/* Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows: Hello Zak Ruvalcaba, welcome to the JavaScript class!
Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.     */

// ANSWER 11:
// alert('Hello ' +  'Zak Ruvalcaba' + ', welcome to the JavaScript class!');
// alert('Hello ' + 'Van Do' + ', welcome to the JavaScript class!');

/* ------------------------------------------------------------------- */

// STEP 12: 
/* Declare a variable called name and set it equal to your name.
 Substitute your name in the previous alert string with the variable instead.    */

// ANSWER 12:
// let name = 'Van Do';
// alert('Hello ' + name + ', welcome to the JavaScript class!');

/* ------------------------------------------------------------------- */

// STEP 13: 
/* Declare a variable called course and set it equal to “JavaScript”.
Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.     */

// ANSWER 13:
// let course = 'JavaScript';
// alert(`Hello ${name}, welcome to the ${course} class!`);

/* ------------------------------------------------------------------- */

// STEP 14: 
/* Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:
Hello Zak Ruvalcaba.
Welcome to the JavaScript class!     */

// ANSWER 14:
// name = 'Zak Ruvalcaba';
// alert(`Hello ${name}.\nWelcome to the ${course} class!`);

/* ------------------------------------------------------------------- */

// STEP 15: 
/* Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable.     */

// ANSWER 15:
// let personName = prompt("Please enter your name");
// alert('Hello ' + personName + ', welcome to the JavaScript class!');

/* ------------------------------------------------------------------- */

// STEP 16: 
/* Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.    */

// ANSWER 16:
// let personName = prompt("Please enter your name");
// let courseName = prompt("Please enter course name");
// alert(`Hello ${personName}, welcome to the ${courseName} class!`);

/* ------------------------------------------------------------------- */

// STEP 17: 
/* Declare a variable called x and assign it a value of 10.
Declare a variable called y and assign it a value of 20.
Display the sum of those two numbers in the console window. */

// ANSWER 17:
// let x = 10;
// let y = 20;
// console.log( x + y );

/* ------------------------------------------------------------------- */

// STEP 18: 
/* Declare a variable called x and assign it a value of 20.
Add and assign 20 to that variable and display the result in the console window.
The result should be 40.      */

// ANSWER 18:
// let x;
// x = 20;
// x = x + 20;
// console.log(x);

/* ------------------------------------------------------------------- */

// STEP 19: 
/* Declare a variable called x and assign it a value of 20.
Multiply and assign 5 to that variable and display the result in the console window.
The result should be 100.    */

// ANSWER 19:
// let x;
// x = 20;
// x = x * 5;
// console.log(x);

/* ------------------------------------------------------------------- */

// STEP 20: 
/* Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3. Divide and assign 1 to that variable and display the result in the console window.     */

// ANSWER 20:
// let x;
// x = 20 % 3;
// x = x / 1;
// console.log(x);

/* ------------------------------------------------------------------- */

// STEP 21: 
/* Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.    */

// ANSWER 21:
// let a = 4;
// let b = 7;
// console.log(a <= 10 && b <= 10)


/* ------------------------------------------------------------------- */

// STEP 22: 
/* Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.    */

// ANSWER 22:
// let x = 8;
// let y = 3;
// console.log(x == 10 || y == 10)


/* ------------------------------------------------------------------- */