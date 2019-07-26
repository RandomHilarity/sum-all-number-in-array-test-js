let sumItems = function(array) {
  let sumTotal = 0;
  for (let num of array) {
    if (Array.isArray(num)) {
      sumTotal += sumItems(num);
    } else {
      sumTotal += num;
    }
  }
  return (sumTotal);
};

module.exports = sumItems;