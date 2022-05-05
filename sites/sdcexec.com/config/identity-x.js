const configureIdentityX = require('@ac-business-media/refresh-theme/config/identity-x');

module.exports = configureIdentityX({
  appId: '5e28a33658e67bda3655ae3f',
  hiddenFields: [
    'street',
    'addressExtra',
    'city',
    'organizationTitle',
  ],
  requiredServerFields: [
    'givenName',
    'familyName',
    'organization',
    'regionCode',
    'countryCode',
    'postalCode',
  ],
  requiredClientFields: [
    'regionCode',
    'countryCode',
    'postalCode',
  ],
});
