const configure = require('@ac-business-media/refresh-theme/config/omeda-identity-x');
const configureOmeda = require('@ac-business-media/refresh-theme/config/omeda');
const idxConfig = require('./identity-x');

module.exports = configure({
  omedaConfig: configureOmeda({}),
  idxConfig,
  rapidIdentProductId: 15438,
  websiteBehaviorAttributeId: 451157,
  appendDemographicToHook: [
    {
      hook: 'onLoginLinkSent',
      demographicId: 5081077, // Email Authorization Status
      valueIds: [5104253], // Submitted
    },
    {
      hook: 'onAuthenticationSuccess',
      demographicId: 5081077,
      valueIds: [5104253, 5104252], // Submitted, Verified
    },
    {
      hook: 'onUserProfileUpdate',
      demographicId: 5081077,
      valueIds: [5104253, 5104252, 5104251], // Submitted, Verified, Full Profile
    },
  ],
});
