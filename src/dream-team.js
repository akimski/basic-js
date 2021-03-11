const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let array = [];

  for (let name of members) {
    if (typeof name === 'string') {
      array.push(name.trim().charAt(0).toUpperCase());
    }
  }

  return array.sort().join('');
};
