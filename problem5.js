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
  function getallcar(inventory) {
    try {
      validateInventory(inventory);
      const carYears = [];
      for (let i = 0; i < inventory.length; i++) {
        carYears.push(inventory[i].car_year);
      }
      return carYears;
    } catch (error) {
      console.error('Error in getallcar:', error.message);
      return null;
    }
  }
  function getolder(caryears) {
    try {
      if (!Array.isArray(caryears)) {
        throw new Error('Invalid input: car years must be an array.');
      }
  
      const oldercars = [];
      for (let i = 0; i < caryears.length; i++) {
        if (caryears[i] < 2000) {
          oldercars.push(caryears[i]);
        }
      }
      return oldercars;
    } catch (error) {
      console.error('Error in getolder:', error.message);
      return null;
    }
  }
  module.exports.getallcar = getallcar;
  module.exports.getolder = getolder;  