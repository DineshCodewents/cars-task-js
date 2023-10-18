import {getallcar, getolder } from './testproblem5.mjs';

const caryearsarray = getallcar();
const oldercararray = getolder(caryearsarray);

console.log('Older cars array:', oldercararray);
console.log('Number of cars older than 2000:', oldercararray.length);
