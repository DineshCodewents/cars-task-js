const validateInventory = require('../Javascript Cars/Functionhandling/functionhandling');
function getOlderCars(inventory) {
    try {
        const validatedInventory = validateInventory(inventory);
        if (!Array.isArray(validatedInventory)) {
            throw new Error('Invalid inventory: Inventory must be an array.');
        }
        const olderCars = [];
        let count = 0;
        let result = '';

        for (let i = 0; i < validatedInventory.length; i++) {
            const car = validatedInventory[i];
            if (car.car_year < 2000) {
                olderCars.push(`id: ${car.id}, car_make: ${car.car_make}, car_model: ${car.car_model}, car_year: ${car.car_year}`);
                count++;
            }
        }
        if (count > 0) {
            result = olderCars.join('\n');
            result += `\nNumber of older cars: ${count}`;
        } else {
            result = 'No older cars found.';
        }
        return result;
    } catch (error) {
        console.error('Error in getOlderCars:', error.message);
        return null;
    }
}
module.exports = getOlderCars;