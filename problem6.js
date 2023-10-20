const validateInventory = require('./functionHandling/functionHandling');
function getBMWAndAudiCars(inventory) {
  try {
    validateInventory(inventory);
    const BMWAndAudiCars = [];
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i].car_make === 'BMW' || inventory[i].car_make === 'Audi') {
        BMWAndAudiCars.push(inventory[i]);
      }
    }
    return BMWAndAudiCars;
  } catch (error) {
    console.error('Error in getBMWandAudiCars:', error.message);
    return null;
  }
}
module.exports = getBMWAndAudiCars;