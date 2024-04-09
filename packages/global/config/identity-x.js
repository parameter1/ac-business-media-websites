const IdentityXConfiguration = require('@parameter1/base-cms-marko-web-identity-x/config');
const newrelic = require('newrelic');

module.exports = ({
  appId,
  hiddenFields = [
    'organizationTitle',
  ],
  requiredServerFields = [
    'givenName',
    'familyName',
    'organization',
    'countryCode',
  ],
  requiredClientFields = [
    'regionCode',
    'countryCode',
    'postalCode',
  ],
  gtmUserFields,
  defaultFieldLabels = {
    mobileNumber: 'Mobile Phone',
    organization: 'Company Name',
  },
} = {}) => {
  console.log(appId, defaultFieldLabels)
  const config = new IdentityXConfiguration({
    appId,
    apiToken: process.env.IDENTITYX_API_TOKEN,
    hiddenFields,
    requiredServerFields,
    requiredClientFields,
    gtmUserFields,
    defaultFieldLabels,
    onHookError: newrelic.noticeError.bind(newrelic),
  });
  return config;
};
