// all tests pass

const sumAll = function(firstNum, secondNum) {

   if (typeof firstNum !== 'number' || typeof secondNum !== 'number') {
      return 'ERROR'
   } else if (firstNum < 0 || secondNum < 0) {
      return 'ERROR'
   } else {
      let sum = firstNum + secondNum - 1;
      let avg = (firstNum + secondNum) / 2;
      return sum * avg;
   }
};

module.exports = sumAll;
