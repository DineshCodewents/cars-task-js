import { findlastCar } from './testproblem2.mjs';

const lastcar = findlastCar();
if (lastcar) {
  const { car_make, car_model } = lastcar;
  console.log(`Last car is a ${car_make} ${car_model}`);
}
