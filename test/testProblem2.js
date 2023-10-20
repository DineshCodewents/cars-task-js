const inventory=require('../dataSet/dataSet.js')
const findLastCar = require('../problem2.js');
const lastCar = findLastCar(inventory);

  const { car_make, car_model } = lastCar;
  console.log(`Last car is a ${car_make} ${car_model}`);
