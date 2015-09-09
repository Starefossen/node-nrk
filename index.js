'use strict';

const jsonist = require('jsonist');

const nrkTvApi      = process.env.NRK_TV_API   || 'https://tv.nrk.no';
const nrkPsApi      = process.env.NRK_PS_API   || 'http://v8.psapi.nrk.no';
const nrkTvMobilApi = process.env.NRK_TV_MOBIL;

module.exports._opts = function _opts(agent) {
  if (agent === 'app') {
    return {
      headers: {
        'User-Agent': 'NRK%20TV/43 CFNetwork/711.5.6 Darwin/14.0.0',
        'accept': '*/*',
        'app-version-ios': '43',
        'Accept-Language:': 'en-us',
      },
    };
  }

  return {
    headers: {
      'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25',
      'accept': 'application/json, text/javascript, */*; q=0.01',
      'x-requested-with': 'XMLHttpRequest',
    },
  };
};

module.exports.tv = {};
module.exports.tv.mobil = {};

/**
 * Get TV categories
 *
 * @param cb - callback function (err, data, res)
 *
 * @return Array of categories
 */
module.exports.tv.mobil.categories = function categories(cb) {
  const url = `${nrkTvMobilApi}/categories`;
  jsonist.get(url, module.exports._opts('app'), cb);
};

/**
 * Get one ore more TV program
 *
 * @param pid - program id
 * @param cb - callback function (err, data, res)
 *
 * @return Array of programs
 */
module.exports.tv.mobil.programs = function programs(pid, cb) {
  let url;

  if (!pid) {
    url = `${nrkTvMobilApi}/programs`;
  } else {
    url = `${nrkTvMobilApi}/programs/${pid}`;
  }

  jsonist.get(url, module.exports._opts('app'), cb);
};

/**
 * Search for TV programs
 *
 * @param str - string to search for
 * @param cb - callback function (err, data, res)
 *
 * @return Array of matching programs
 */
module.exports.tv.mobil.search = function search(str, cb) {
  const url = `${nrkTvMobilApi}/search/${encodeURIComponent(str)}`;
  jsonist.get(url, module.exports._opts('app'), cb);
};

/**
 * Get programs matching string (autocomplete)
 *
 * @param str - string to autcomplete
 * @param cb - callback function (err, data, res)
 *
 * @return Array of matching programs
 */
module.exports.tv.autocomplete = function autocomplete(str, cb) {
  const url = `${nrkTvApi}/autocomplete?query=${str}`;
  jsonist.get(url, module.exports._opts(), cb);
};

/**
 * Get all programs starting with a given letter
 *
 * @param letter - letter to filter programs ("a"…"z" + "0-9")
 * @param category - optionaly category name
 * @param cb - callback function (err, data, res)
 *
 * @return Array of matching programs
 */
module.exports.tv.programs = function programs(letter, category, cb) {
  let url;

  if (category) {
    url = `${nrkTvApi}/programmer/${category}/${letter}`;
  } else {
    url = `${nrkTvApi}/programmer/${letter}`;
  }

  jsonist.get(url, module.exports._opts(), cb);
};

/**
 * Get program / episode details by ID
 *
 * @param pid - program id
 * @param cb - callback function (err, data, res)
 *
 * @return Object with details
 */
module.exports.tv.program = function program(pid, cb) {
  const url = `${nrkPsApi}/mediaelement/${pid}`;
  jsonist.get(url, module.exports._opts(), cb);
};

/**
 * Get series details by ID
 *
 * @param sid - series id
 * @param cb - callback function (err, data, res)
 *
 * @return Object with details
 */
module.exports.tv.series = function series(sid, cb) {
  const url = `${nrkPsApi}/series/${sid}/latestornextepisode/mediaelement`;
  jsonist.get(url, module.exports._opts(), cb);
};
