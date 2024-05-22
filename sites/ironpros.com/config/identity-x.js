const configureIdentityX = require('@ac-business-media/package-global/config/identity-x');
const formDefault = require('@ac-business-media/package-global/config/identity-x/default');

formDefault.anonymousCta = 'Register on IRONPROS.com to download this document, gain access to premium content, and more.';

module.exports = configureIdentityX({
  // '@TODO-Configure',
  appId: '661564bda370d83993649ffc',
});
