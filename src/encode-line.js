const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) return '';

  let compressed = '';
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count += 1;
    } else {
      if (count > 1) {
        compressed += count;
      }
      compressed += str[i - 1];
      count = 1;
    }
  }

  return compressed;
}

module.exports = {
  encodeLine
};
