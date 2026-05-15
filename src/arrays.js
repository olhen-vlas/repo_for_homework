const stringArray = ['Apple', 'Banana', 'Cherry'];
const numberArray = [1, 2, 3, 4, 5];
const booleanArray = [true, false, true];
const anyArray = ['Hello', 42, true, { key: 'value' }];

console.log(stringArray);
console.log(numberArray);
console.log(booleanArray);
console.log(anyArray);

stringArray.push('Date');
console.log(stringArray);

numberArray.pop();
console.log(numberArray);

anyArray.splice(1, 1, 'World');
console.log(anyArray);

console.log('--- forEach loop ---');
booleanArray.forEach((item, index) => {
    console.log(`${index}: ${item}`);
});

console.log('--- map result ---');
const doubledNumbers = numberArray.map((num) => num * 2);
console.log(doubledNumbers);
