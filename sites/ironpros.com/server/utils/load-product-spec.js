const fetch = require('node-fetch');

const url = process.env.IRONPROS_PRODUCT_SPECS_SERVICE_URL || '';

/**
 * @typedef LoadArticleFnArgs
 * @prop {array} ids
 *
 * @param {LoadArticleFnArgs} o
 * @returns {Promise<object>}
 * @throws Will throw when encountering a bad API response and `shouldThrow=true`.
 */
module.exports = async ({
  id,
  shouldThrow,
} = { ids: [], shouldThrow: false }) => {
  const res = await fetch(`${url}/load-spec`, {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      id,
    }),
  });
  if (!res.ok && shouldThrow) throw new Error(`${res.status}: ${res.statusText}`);
  return res.json();
};
