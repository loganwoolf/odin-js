// all tests passing

const reverseString = function(str) {
   let revStr = '';
   for (let i = str.length - 1; i >= 0; i--) {
      revStr += str.charAt(i);
   }
   return revStr;
};

module.exports = reverseString;
