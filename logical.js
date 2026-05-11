/**
 * Logical operations and comparison operators in JavaScript.
 */

const age = 25;
const name = "Junie";
const isAdmin = true;
const emptyValue = null;

console.log("--- Comparison operations ---");
console.log(`Equality (value): ${age} == "25" is ${age == "25"}`);
console.log(`Strict equality (value + type): ${age} === "25" is ${age === "25"}`);
console.log(`Inequality: ${age} != 30 is ${age != 30}`);
console.log(`Greater than: ${age} > 20 is ${age > 20}`);
console.log(`Less than or equal: ${age} <= 25 is ${age <= 25}`);

console.log("\n--- Logical operators ---");
console.log(`Logical AND: (age > 18 && isAdmin) is ${age > 18 && isAdmin}`);
console.log(`Logical OR: (name === "Alice" || isAdmin) is ${name === "Alice" || isAdmin}`);
console.log(`Logical NOT: !isAdmin is ${!isAdmin}`);

console.log("\n--- Nullish Coalescing and Truthy/Falsy ---");
console.log(`Nullish coalescing: emptyValue ?? "default" is "${emptyValue ?? "default"}"`);

if (!emptyValue) {
    console.log(`Variable emptyValue (${emptyValue}) is falsy.`);
}

console.log("\n--- Comparison of different types ---");
console.log(`null == undefined: ${null == undefined}`);
console.log(`null === undefined: ${null === undefined}`);
console.log(`"5" > 2: ${"5" > 2}`);
