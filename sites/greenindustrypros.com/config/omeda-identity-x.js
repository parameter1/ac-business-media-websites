const configure = require('@ac-business-media/refresh-theme/config/omeda-identity-x');
const configureOmeda = require('@ac-business-media/refresh-theme/config/omeda');
const idxConfig = require('./identity-x');

module.exports = configure({
  omedaConfig: configureOmeda({}),
  idxConfig,
  rapidIdentProductId: 15499,
  websiteBehaviorAttributeId: 451157,
  onAuthenticationSuccess: {
    autoSignupDeploymentTypes: [
      { id: 10020, optedIn: true },
    ],
  },
});
