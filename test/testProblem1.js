const inventory=require('../dataSet/dataSet.js')
const getCarById = require('../problem1.js');
const carId = 33;

  const car = getCarById(carId, inventory);
  const { car_year, car_make, car_model } = car;
  console.log(`Car ${carId} is a ${car_year} ${car_make} ${car_model}`);


