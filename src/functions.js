function sumArray(arr) {
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const numbers = [10, 20, 30, 40, 50];
const strings = ['Hello, ', 'this ', 'is an ', 'array ', 'of strings.'];

console.log('Sum of numbers:', sumArray(numbers));
console.log('String concatenation:', sumArray(strings));
