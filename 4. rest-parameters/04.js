var somar = (...array) => {
   return array.reduce((prev, next) => prev + next)
};

console.log(somar(1,2,3,4,5));

