const validateInventory = require('../Javascript Cars/Functionhandling/functionhandling');
function sortCar(inventory) {
  try {
    validateInventory(inventory);
    inventory.sort((a, b) => a.car_model.toLowerCase().localeCompare(b.car_model.toLowerCase()));
    return inventory;
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}

module.exports = sortCar;
