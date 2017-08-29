Array.prototype.cycle = function(startIndex) {
  let array = this;
  let index = startIndex || 0;

  return {
    next: () => {
      index++;
      if (index >= array.length) {
        index = 0;
      }
      return array[index];
    },
    previous: () => {
      index--;
      if (index < 0) {
        index = array.length - 1;
      }
      return array[index];
    },
    start: () => {
      return array[index];
    },
  };
};
