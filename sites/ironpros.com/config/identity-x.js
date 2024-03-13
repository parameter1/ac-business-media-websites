const configureIdentityX = require('@ac-business-media/package-global/config/identity-x');
const formDefault = require('@ac-business-media/package-global/config/identity-x/default');

formDefault.anonymousCta = 'Register on IronPros.com to download this document, gain access to premium content, and more.';

module.exports = configureIdentityX({
  // '@TODO-Configure',
  appId: '5e28a2d858e67b162e55ae3b',
});
