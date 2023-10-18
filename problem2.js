import { findlastCar } from './problem2.js';

const lastcar = findlastCar();
if (lastcar) {
  const { car_make, car_model } = lastcar;
  console.log(`Last car is a ${car_make} ${car_model}`);
}
