// all tests passing!

const repeatString = function(str, n) {
   if (n === 0) {
      return '';
   } else if (n <= -1) {
      return 'ERROR'
   } else {
      let newStr = str;
      for (let i = n - 1; i > 0; i--) {
         newStr += str;
      }
      return newStr
   }
};

module.exports = repeatString;
