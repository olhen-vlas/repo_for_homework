const complexObject = {
    name: 'John Doe',
    age: 30,
    address: {
        city: 'Kyiv',
        street: 'Khreshchatyk',
        zipCode: 1001
    },
    hobbies: ['Photography', 'Hiking', 'Coding'],
    displayInfo() {
        console.log(`User: ${this.name}, Age: ${this.age}`);
        console.log(`Lives in: ${this.address.city}, ${this.address.street}`);
        console.log(`Hobbies: ${this.hobbies.join(', ')}`);
    }
};

const executeDisplay = (obj) => obj.displayInfo();

executeDisplay(complexObject);
