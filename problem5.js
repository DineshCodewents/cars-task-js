const validateInventory = require('../functionHandling/functionHandling');
function getOlderCars(inventory) {
    try {
        const validatedInventory = validateInventory(inventory);
        if (!Array.isArray(validatedInventory)) {
            throw new Error('Invalid inventory: Inventory must be an array.');
        }
        const olderCars = [];

        for (let i = 0; i < validatedInventory.length; i++) {
            const car = validatedInventory[i];
            if (car.car_year < 2000) {
                olderCars.push({
                    id: car.id,
                    car_make: car.car_make,
                    car_model: car.car_model,
                    car_year: car.car_year
                });
            }
        }
        const count = olderCars.length;

        return {
            olderCars: olderCars,
            count: count
        };
    } catch (error) {
        console.error('Error in getOlderCars:', error.message);
        return null;
    }
}
module.exports = getOlderCars;