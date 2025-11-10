const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = Array.from(String(n));
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const newNumber = arr.slice(0, i).concat(arr.slice(i + 1)).join('');
    res.push(Number(newNumber));
}

return Math.max(...res);
}

module.exports = {
  deleteDigit
};
