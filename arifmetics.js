/**
 * Arithmetic operations in JavaScript.
 * Using variables of different types: Number, String, and Boolean.
 */

let num1 = 100;
const num2 = 35;

const str1 = "100";
const str2 = "Hello";

const isTrue = true;
const isFalse = false;

console.log("--- Arithmetic operations with same types (Number) ---");
console.log(`Addition: ${num1} + ${num2} = ${num1 + num2}`);
console.log(`Subtraction: ${num1} - ${num2} = ${num1 - num2}`);
console.log(`Multiplication: ${num1} * ${num2} = ${num1 * num2}`);
console.log(`Division: ${num1} / ${num2} = ${num1 / num2}`);
console.log(`Remainder: ${num1} % ${num2} = ${num1 % num2}`);
console.log(`Exponentiation: ${num1} ** 2 = ${num1 ** 2}`);

console.log("\n--- Increment and Decrement ---");
console.log(`Initial num1 value: ${num1}`);
num1++;
console.log(`After increment (num1++): ${num1}`);
num1--;
console.log(`After decrement (num1--): ${num1}`);

console.log("\n--- Arithmetic operations with different types ---");
console.log(`Concatenation (number + string): ${num1} + "${str1}" = ${num1 + str1}`);
console.log(`Subtraction (string - number): "${str1}" - ${num2} = ${str1 - num2}`);

console.log(`Boolean in arithmetic (true + 5): ${isTrue} + 5 = ${isTrue + 5}`);
console.log(`Boolean in arithmetic (false * 10): ${isFalse} * 10 = ${isFalse * 10}`);

console.log(`Multiplication by non-numeric string: ${num1} * "${str2}" = ${num1 * str2} (result NaN)`);
