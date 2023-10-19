const validateInventory = require('../Javascript Cars/Functionhandling/functionhandling');
function sortCar(inventory) {
  try {
    validateInventory(inventory);
    inventory.sort((a, b) => a.car_model.toLowerCase().localeCompare(b.car_model.toLowerCase()));
    let result = '';
    for (let i = 0; i < inventory.length; i++) {
      const car = inventory[i];
      result += `id: ${car.id}, car_make: ${car.car_make}, car_model: ${car.car_model}, car_year: ${car.car_year}\n`;
    }
    return result;
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}
module.exports = sortCar;
