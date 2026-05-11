/**
 * switch .. case construct in JavaScript.
 */

/**
 * Gets the name of the day of the week by its number.
 * Using switch with return is a more modern and clean approach.
 * @param {number} day 
 * @returns {string}
 */
function getDayName(day) {
    switch (day) {
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6:
        case 7: return "Weekend";
        default: return "Invalid day";
    }
}

const dayOfWeek = 3;
console.log(`Day #${dayOfWeek} is: ${getDayName(dayOfWeek)}`);

/**
 * Gets the description of a fruit.
 * @param {string} fruitName 
 * @returns {string}
 */
const getFruitDescription = (fruitName) => {
    switch (fruitName) {
        case "banana": return "This is a banana.";
        case "apple": return "This is an apple.";
        default: return "Unknown fruit.";
    }
};

const fruit = "apple";
console.log(getFruitDescription(fruit));
