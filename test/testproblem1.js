const inventory = require('./problem1.js');

const carId = 33;
const car = inventory.getCarById(carId);

if (car) {
  const { car_year, car_make, car_model } = car;
  console.log(`Car ${carId} is a ${car_year} ${car_make} ${car_model}`);
} else {
  console.log(`Car with ID ${carId} not found in the inventory`);
}