// --- Task 7.1: Variables & typeof ---
let name = "Shaniz Ann Mumbua";
let age = 21;
const birthYear = 2005;

// Check types
console.log(typeof name);    // string
console.log(typeof age);     // number
console.log(typeof true);    // boolean

// let vs const difference
let score = 100;
score = 150;

const PI = 3.14159;
// PI = 3;  // Error! Can't reassign const

// Exercise: Variable Practice
let myName = "Shaniz";
let myAge = 21;
let isStudent = true;
let favoriteColors = ["black", "pink", "white"];
let todaysDate = new Date();

console.log("My Name:", myName);
console.log("My Age:", myAge);
console.log("Student status:", isStudent);
console.log("Favorite colors:", favoriteColors);
console.log("Today's date:", todaysDate);


// --- Task 7.2: Data Types & Operators ---

// Exercise 1: Number Operations
let a = 10;
let b = 3;

console.log(a + b);   // Addition
console.log(a - b);   // Subtraction
console.log(a * b);   // Multiplication
console.log(a / b);   // Division
console.log(a % b);   // Modulus (remainder)
console.log(a ** b);  // Exponentiation

let count = 0;
count++;  // Increment to 1
count--;  // Decrement back to 0

// Exercise 2: String Operations
let firstName = "Shaniz";
let lastName = "Mumbua";
let fullName = firstName + " " + lastName;

let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Abigail"));

// Exercise 3: Comparison & Logical Operators
console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 === 5);  // true (strict equality)
console.log(5 == "5"); // true (loose equality - avoid!)
console.log(5 !== 3);  // true

console.log(true && true);   // AND
console.log(true || false);  // OR
console.log(!true);          // NOT

// Challenge: Age Calculations
let userAge = 25;
console.log("Age in days:", userAge * 365);
console.log("Age in hours:", userAge * 365 * 24);
console.log("Year you'll turn 100:", 2026 - userAge + 100);

// --- Task 7.3: Functions ---
// Exercise 1: Function Declarations
function greetUser(name) {
    return `Hello, ${name}!`;
}

const addNums = function(a, b) {
    return a + b;
};

const multiplyNums = (a, b) => a * b;

const divideNums = (a, b) => {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
};

// Exercise 2: Build These Functions
const calculateArea = (width, height) => width * height;
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
const isEven = (num) => num % 2 === 0;
const getInitials = (fullName) => fullName.split(" ").map(n => n[0]).join("");
const reverseString = (str) => str.split("").reverse().join("");

// Exercise 3: Default Parameters & Tip Calculator
function greetWithDefaults(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

const calculateTip = (bill, tipPercent = 15) => bill * (tipPercent / 100);
console.log(calculateTip(100)); // 15


// --- Task 7.4: Control Flow ---

// Exercise 1: If/Else Statements
function getGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

// Exercise 2: Switch Statements
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid day";
    }
}

// Exercise 3: Loops & Built Programs
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let loopCount = 0;

while (loopCount < 5) {
    console.log(loopCount);
    loopCount++;
}

const colorsList = ["brown", "yellow", "gold"];

for (const color of colorsList) {
    console.log(color);
}

// Build Programs:
// 1. Print numbers 1-100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// 2. Print even numbers 1-50
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

// 3. FizzBuzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

// 4. Triangle of stars
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}


// --- Mini-Project: Calculator ---
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "Error: Cannot divide by zero";
    return a / b;
}

function modulus(a, b) {
    return a % b;
}

function power(a, b) {
    return a ** b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return divide(num1, num2);
        case "%": return modulus(num1, num2);
        case "**": return power(num1, num2);
        default: return "Invalid operator";
    }
}

// Calculator Tests
console.log(calculate(10, "+", 5));  // 15
console.log(calculate(10, "-", 5));  // 5
console.log(calculate(10, "*", 5));  // 50
console.log(calculate(10, "/", 5));  // 2
console.log(calculate(10, "/", 0));  // Error message
