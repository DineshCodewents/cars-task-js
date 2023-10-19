const validateInventory = require('../Javascript Cars/Functionhandling/functionhandling');
function getAllCarYear(inventory) {
  try {
    validateInventory(inventory);
    const carYears = [];
    for (let i = 0; i < inventory.length; i++) {
      carYears.push(inventory[i].car_year);
    }
    const carCount = inventory.length;
    const countMessage = `Total cars in inventory: ${carCount}`;
    return { years: carYears, count: countMessage };
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}

module.exports = getAllCarYear;
