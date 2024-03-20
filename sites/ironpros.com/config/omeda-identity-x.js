const config = require('@ac-business-media/package-global/config/omeda-identity-x');
const omedaConfig = require('./omeda');
const idxConfig = require('./identity-x');

module.exports = config({
  omedaConfig,
  idxConfig,
  rapidIdentProductId: 15407,
  websiteBehaviorAttributeId: 496738,
});
