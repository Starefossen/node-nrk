'use strict';

const jsonist = require('jsonist');

const nrk_tv_api   = process.env.NRK_TV_API   || 'https://tv.nrk.no';
const nrk_ps_api   = process.env.NRK_PS_API   || 'http://v8.psapi.nrk.no';

module.exports._opts = function _opts(agent) {
  return {
    headers: {
      'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25',
      'accept': 'application/json, text/javascript, */*; q=0.01',
      'x-requested-with': 'XMLHttpRequest',
    }
  };
};

module.exports.tv = {};

/**
 * Get programs matching string (autocomplete)
 *
 * @param str - string to autcomplete
 * @param cb - callback function (err, data, res)
 *
 * @return Array of matching programs
 */
module.exports.tv.autocomplete = function autocomplete(str, cb) {
  const url = `${nrk_tv_api}/autocomplete?query=${str}`;
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
    url = `${nrk_tv_api}/programmer/${category}/${letter}`;
  } else {
    url = `${nrk_tv_api}/programmer/${letter}`;
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
  const url = `${nrk_ps_api}/mediaelement/${pid}`;
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
  const url = `${nrk_ps_api}/series/${sid}/latestornextepisode/mediaelement`;
  jsonist.get(url, module.exports._opts(), cb);
};
