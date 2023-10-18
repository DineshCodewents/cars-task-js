function sortcar(inventory) {
    const carModels = [];
    const inventoryLength = inventory.length;
    for (let i = 0; i < inventoryLength; i++) {
      carModels.push(inventory[i].car_model);
    }
  
    for (let i = 0; i < carModels.length - 1; i++) {
      for (let j = i + 1; j < carModels.length; j++) {
        if (carModels[i] > carModels[j]) {
          [carModels[i], carModels[j]] = [carModels[j], carModels[i]];
        }
      }
    }
  
    return carModels;
  }
  
  module.exports = sortcar