const cycle = require('../');

let arrayCycle = [
  'John Smith',
  'Chris Johnson',
  'Mike Henry',
  'Amy Michelle',
].cycle();

console.log(arrayCycle.start(1));
console.log(arrayCycle.next());
console.log(arrayCycle.previous());
