const configure = require('@ac-business-media/refresh-theme/config/omeda-identity-x');
const configureOmeda = require('@ac-business-media/refresh-theme/config/omeda');
const idxConfig = require('./identity-x');

module.exports = configure({
  omedaConfig: configureOmeda({}),
  idxConfig,
  rapidIdentProductId: 15356,
  websiteBehaviorAttributeId: 451160,
  appendDemographicToHook: [
    {
      hook: 'onLoginLinkSent',
      demographicId: 5081074, // Email Authorization Status
      valueIds: [5104240], // Submitted
    },
    {
      hook: 'onAuthenticationSuccess',
      demographicId: 5081074,
      valueIds: [5104240, 5104239], // Submitted, Verified
    },
    {
      hook: 'onUserProfileUpdate',
      demographicId: 5081074,
      valueIds: [5104240, 5104239, 5104238], // Submitted, Verified, Full Profile
    },
  ],
});
