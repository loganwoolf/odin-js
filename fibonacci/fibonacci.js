const fibonacci = function(n) {
   let fib = [1, 1]
   if (n - 1 < 0) {
      return "OOPS"
   }
   do {
      fib.push(fib[fib.length - 1] + fib[fib.length - 2])
   } while (n > fib.length)
   return fib[+n-1]
};

module.exports = fibonacci;
