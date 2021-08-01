// all tests passing

const removeFromArray = function(arr, ...remove) {
   for (let i in remove) {
      let position = arr.indexOf(remove[i]);
      if (position >= 0) {
         arr.splice(position, 1)
      }
   }
   return arr;
};

module.exports = removeFromArray;
