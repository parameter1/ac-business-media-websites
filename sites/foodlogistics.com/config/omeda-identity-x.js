const configure = require('@ac-business-media/refresh-theme/config/omeda-identity-x');
const configureOmeda = require('@ac-business-media/refresh-theme/config/omeda');
const idxConfig = require('./identity-x');

module.exports = configure({
  omedaConfig: configureOmeda({}),
  idxConfig,
  rapidIdentProductId: 15374,
  websiteBehaviorAttributeId: 451158,
  appendDemographicToHook: [
    {
      hook: 'onLoginLinkSent',
      demographicId: 5081076, // Email Authorization Status
      valueIds: [5104246], // Submitted
    },
    {
      hook: 'onAuthenticationSuccess',
      demographicId: 5081076,
      valueIds: [5104246, 5104250], // Submitted, Verified
    },
    {
      hook: 'onUserProfileUpdate',
      demographicId: 5081076,
      valueIds: [5104246, 5104250, 5104249], // Submitted, Verified, Full Profile
    },
  ],
});
