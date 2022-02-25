const configureIdentityX = require('@ac-business-media/refresh-theme/config/identity-x');

module.exports = configureIdentityX({
  appId: '5e28a33658e67bda3655ae3f',
  requiredServerFields: [
    'givenName',
    'familyName',
  ],
  requiredClientFields: [
    'regionCode',
    'countryCode',
    'postalCode',
  ],
});
