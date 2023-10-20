const validateInventory = require('../functionHandling/functionHandling');
function findLastCar(inventory) {
  try {
    const validatedInventory = validateInventory(inventory);

    if (validatedInventory.length === 0) {
      throw new InventoryError('Empty inventory: No cars available.');
    }

    return validatedInventory[validatedInventory.length - 1];
  } catch (error) {
    console.error('Inventory error:', error.message);
    return null;
  }
}
module.exports = findLastCar;
