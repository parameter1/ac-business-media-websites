const IdentityXConfiguration = require('@parameter1/base-cms-marko-web-identity-x/config');
const newrelic = require('newrelic');

module.exports = ({
  appId,
  hiddenFields,
  requiredServerFields,
  requiredClientFields,
} = {}) => {
  const config = new IdentityXConfiguration({
    appId,
    apiToken: process.env.IDENTITYX_API_TOKEN,
    hiddenFields,
    requiredServerFields,
    requiredClientFields,
    onHookError: newrelic.noticeError.bind(newrelic),
  });
  return config;
};
