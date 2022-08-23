const configure = require('@ac-business-media/refresh-theme/config/omeda-identity-x');
const configureOmeda = require('@ac-business-media/refresh-theme/config/omeda');
const idxConfig = require('./identity-x');

module.exports = configure({
  omedaConfig: configureOmeda({}),
  idxConfig,
  rapidIdentProductId: 15375,
  websiteBehaviorAttributeId: 451156,
  appendDemographicToHook: [
    {
      hook: 'onLoginLinkSent',
      demographicId: 5081078, // Email Authorization Status
      valueIds: [5104258], // Submitted
    },
    {
      hook: 'onAuthenticationSuccess',
      demographicId: 5081078,
      valueIds: [5104258, 5104260], // Submitted, Verified
    },
    {
      hook: 'onUserProfileUpdate',
      demographicId: 5081078,
      valueIds: [5104258, 5104260, 5104259], // Submitted, Verified, Full Profile
    },
  ],
});
