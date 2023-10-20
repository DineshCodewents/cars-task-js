const getBMWAndAudiCars = require('../problem6.js');
const inventory=require('../dataSet/dataSet.js')
const selectedCars = getBMWAndAudiCars(inventory);
console.log('BMW and Audi cars:', JSON.stringify(selectedCars));