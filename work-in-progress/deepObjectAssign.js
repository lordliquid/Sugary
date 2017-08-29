// Deeply nested objects in arrays
module.exports = Array.prototype.deepAssign = function(target, newValue) {
  let array = this;

  function getKeys(obj) {
    return Object.keys(obj);
  }

  function traverse(arr, func) {
    return arr.map(obj => {
      return func(obj);
    });
  }

  let keys = traverse(array, getKeys);
  console.log(keys);
};

let deep = [
  { id: 1, name: { first: 'John', last: 'Smith' } },
  { id: 2, name: { first: 'Chris', last: 'Johnson' } },
  { id: 3, name: { first: 'Michael', last: 'Richards' } },
];

// Immutable assigning in arrays is the goal
module.exports = Array.prototype.assignArray = function(index, replacement) {
  let array = this;

  let obj = array[index];

  function replace() {
    return Object.assign({}, obj, replacement);
  }

  return [...array.slice(0, index), replace(), ...array.slice(index + 1)];
};

console.log(deep.assignArray(1, { name: { first: 'New', last: 'Name' } }));
