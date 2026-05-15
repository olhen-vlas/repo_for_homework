const sumArray = (arr) => {
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

const numbers = [5, 15, 25, 35, 45];
const strings = ['Arrow ', 'function ', 'is ', 'working!'];

console.log('Sum of numbers (arrow):', sumArray(numbers));
console.log('String concatenation (arrow):', sumArray(strings));
