const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date)) throw new Error();
  if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error('THROWN');

  let month = date.getMonth() + 1;

  if (3 <= month && month <= 5) return 'spring';
  if (6 <= month && month <= 8) return 'summer';
  if (9 <= month && month <= 11) return 'autumn';

  return 'winter';
};
