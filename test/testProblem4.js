const inventory=require('../dataSet/dataSet.js')
const getAllCarYear = require('../problem4.js');

const carYears = getAllCarYear(inventory);
console.log('Car years array:', carYears);

