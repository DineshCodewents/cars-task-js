import {findcarbyid} from './testproblem1.mjs';
const caridtofind = 33;
const foundCar = findcarbyid(caridtofind);
if (foundCar) {
  const { car_year, car_make, car_model } = foundCar;
  console.log(`Car ${caridtofind} is a ${car_year} ${car_make} ${car_model}`);
}
