const inventory=require('../dataSet/dataSet.js')
const sortCar = require('../problem3.js');

const sortedCarModels = sortCar(inventory);
console.log(sortedCarModels);
