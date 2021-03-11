const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cat = '^^';
  let numberCats = 0;
  
  for (let array of matrix) {
    for (let elem of array) {
      if (elem == cat) {
        numberCats++;
      }
    }
  }
  return numberCats;
};
