const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};

  domains.forEach(domain => {
      const parts = domain.split('.').reverse();

      let subdomain = '';
      for (let i = 0; i < parts.length; i++) {
          subdomain += `.${parts[i]}`;
          result[subdomain] = (result[subdomain] || 0) + 1;
      }
  });

  return result;
}

module.exports = {
  getDNSStats
};
