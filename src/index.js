
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let result = [];
  if (matrix) {
    matrix.forEach((el, i) => {
      if (i % 2) el.reverse();
      result = [...result, ...el]
    });
  }
  return result;
}
