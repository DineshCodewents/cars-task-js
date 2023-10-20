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
        typeof car.car_year === 'number' || car.car_year === '' || (typeof car.car_year === 'string' && !isNaN(car.car_year))
    }
    return inventory;
  }

  
  module.exports= validateInventory;