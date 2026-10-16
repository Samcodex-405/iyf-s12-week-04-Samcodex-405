
"use strict";

// Task 7.1: Variables and data types
const name = "Shaniz Ann Mumbua";
const age = 21; 
const isStudent = true;
const favoriteColors = ["burgundy", "pink"];
const today = new Date();

// Display values and their types
console.log("Name:", name);
console.log("Age:", age);
console.log("Is a student:", isStudent);
console.log("Favorite colors:", favoriteColors);
console.log("Today's date:", today);

console.log("Name type:", typeof name);
console.log("Age type:", typeof age);
console.log("Student status type:", typeof isStudent);


// Task 7.2: Operators
// Arithmetic operators
const num1 = 20;
const num2 = 6;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Remainder:", num1 % num2);
console.log("Power:", num1 ** 2);

// Comparison operators
console.log("Is num1 greater than num2?", num1 > num2);
console.log("Are the numbers equal?", num1 === num2);
console.log("Are the numbers different?", num1 !== num2);

// Logical operators
const hasPassed = true;
const submittedWork = true;

console.log("Passed and submitted:", hasPassed && submittedWork);
console.log("Passed or submitted:", hasPassed || submittedWork);
console.log("Has not passed:", !hasPassed);

// Task 7.3: Functions

// 1. Function declaration
function greetStudent(name)
    {
        return `Hello, ${name}! Welcome to JavaScript.`;
    }

const greeting = greetStudent("Shaniz");
console.log(greeting);

// 2. Function with two parameters
function addNumbers(num1, num2)
    {
        return num1 + num2;
    }

const sum = addNumbers(10, 15);
console.log("Sum:", sum);

// 3. Arrow function
const multiplyNumbers = (num1, num2) => 
    {
      return num1 * num2;
    };

const product = multiplyNumbers(4, 5);
console.log("Product:", product);

// 4. Arrow function with a concise return
const squareNumber = number => number * number;

const square = squareNumber(6);
console.log("Square:", square);

// 5. Function to calculate an average
function calculateAverage(mark1, mark2, mark3) 
    {
        return (mark1 + mark2 + mark3) / 3;
    }

const average = calculateAverage(80, 90, 100);
console.log(`Average mark: ${average}`);