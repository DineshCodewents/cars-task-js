const validateInventory = require('../functionHandling/functionHandling');
function sortCar(inventory) {
    try {
        validateInventory(inventory);
        const sortedInventory = inventory
            .sort((a, b) => a.car_model.toLowerCase().localeCompare(b.car_model.toLowerCase()));
        return sortedInventory;
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}
module.exports = sortCar;