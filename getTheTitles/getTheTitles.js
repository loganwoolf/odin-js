const getTheTitles = function(arr) {
   let titles = []
   for (let book of arr) {
      titles.push(book.title)
   }
   return titles
};

module.exports = getTheTitles;
