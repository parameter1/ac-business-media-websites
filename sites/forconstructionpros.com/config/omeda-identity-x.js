const configure = require('@ac-business-media/refresh-theme/config/omeda-identity-x');
const configureOmeda = require('@ac-business-media/refresh-theme/config/omeda');
const idxConfig = require('./identity-x');

module.exports = configure({
  omedaConfig: configureOmeda({}),
  idxConfig,
  rapidIdentProductId: 15375,
  websiteBehaviorAttributeId: 451156,
  onAuthenticationSuccess: {
    autoSignupDeploymentTypes: [
      { id: 4303, optedIn: true },
    ],
  },
});
