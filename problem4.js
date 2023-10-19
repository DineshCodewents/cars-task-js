function validateInventory(inventory) {
  if (!Array.isArray(inventory)) {
    throw new Error('Invalid inventory: Inventory must be an array.');
  }

  for (let i = 0; i < inventory.length; i++) {
    const car = inventory[i];
    const isValidCar =
      typeof car === 'object' &&
      typeof car.id === 'number' &&
      Number.isInteger(car.id) &&
      typeof car.car_make === 'string' &&
      car.car_make.length > 0 &&
      typeof car.car_model === 'string' &&
      car.car_model.length > 0 &&
      (typeof car.car_year === 'number' || (typeof car.car_year === 'string' && !isNaN(parseInt(car.car_year))));

    if (!isValidCar) {
      throw new Error(`Invalid inventory item at index ${i}: 
        - id must be a positive integer,
        - car_make and car_model must be strings with length greater than 3,
        - car_year must be a positive integer or a valid numeric string.`);
    }
  }

  return inventory;
}

function getallcaryear(inventory) {
  try {
    validateInventory(inventory);
    const caryears = [];
    for (let i = 0; i < inventory.length; i++) {
      caryears.push(inventory[i].car_year);
    }
    const carCount = inventory.length;
    const countMessage = `Total cars in inventory: ${carCount}`;
    return { years: caryears, count: countMessage };
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}

module.exports = getallcaryear;
