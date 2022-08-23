const configure = require('@ac-business-media/refresh-theme/config/omeda-identity-x');
const configureOmeda = require('@ac-business-media/refresh-theme/config/omeda');
const idxConfig = require('./identity-x');

module.exports = configure({
  omedaConfig: configureOmeda({}),
  idxConfig,
  rapidIdentProductId: 15440,
  websiteBehaviorAttributeId: 451159,
  appendDemographicToHook: [
    {
      hook: 'onLoginLinkSent',
      demographicId: 5081075, // Email Authorization Status
      valueIds: [5104243], // Submitted
    },
    {
      hook: 'onAuthenticationSuccess',
      demographicId: 5081075,
      valueIds: [5104243, 5104242], // Submitted, Verified
    },
    {
      hook: 'onUserProfileUpdate',
      demographicId: 5081075,
      valueIds: [5104243, 5104242, 5104241], // Submitted, Verified, Full Profile
    },
  ],
});
