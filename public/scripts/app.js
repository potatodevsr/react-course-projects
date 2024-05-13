"use strict";

console.log('es6-arrow-function.js');

// function square(x) {
//     return x * x;
// };
// console.log('square ->', square(3));

// const squareArrow = (x) => {
//     return x * x;
// };

var squareArrow = function squareArrow(x) {
  return x * x;
};
console.log('squareArrow ->', squareArrow(4));
