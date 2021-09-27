import { ValidateDate } from './date.js';
console.log(__dirname)
const test1 = new ValidateDate('17/08/2001');
console.log( test1.calculateDatesBetweenToDates() );
