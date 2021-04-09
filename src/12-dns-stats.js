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
  const domainPartsList = [];
  const result = {};
  // create array with arrays, that contain domain parts
  for (let i = 0; i < domains.length; i++) {
    domainPartsList.push(domains[i].split('.').reverse());
  }
  // iterate through domain parts array, create names and push them to result object
  for (let i = 0; i < domainPartsList.length; i++) {
    let domainName = '.';
    for (let j = 0; j < domainPartsList[i].length; j++) {
      // todo
      if (j === 0) domainName = `.${domainPartsList[i][j]}`;
      else {
        domainName = `.${domainPartsList[i].slice(0, j + 1).join('.')}`;
      }
      if (domainName in result) result[domainName] += 1;
      else result[domainName] = 1;
    }
  }
  return result;
}

module.exports = getDNSStats;
