const validateInventory = require('./functionHandling/functionHandling');

function getCarById(id, inventory) {
  try {
    if (typeof id !== 'number' || isNaN(id) || !Number.isInteger(id)) {
      throw new Error('Invalid input: Please provide an integer.');
    }
    const validatedInventory = validateInventory(inventory);
    for (let i = 0; i < validatedInventory.length; i++) {
      if (validatedInventory[i].id === id) {
        return validatedInventory[i];
      }
    }
    throw new Error('No car with the specified ID found in the inventory.');
  } catch (error) {
    throw error;
  }
}

module.exports = getCarById;
