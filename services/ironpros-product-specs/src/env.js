const {
  bool,
  port,
  cleanEnv,
  str,
} = require('envalid');

module.exports = cleanEnv(process.env, {
  HOST: str({ desc: 'The host that the service will run on.', default: '0.0.0.0' }),
  NEW_RELIC_ENABLED: bool({ desc: 'Whether New Relic is enabled.', default: false }),
  NEW_RELIC_LICENSE_KEY: str({ desc: 'The license key for New Relic.', default: '(unset)' }),
  PORT: port({ desc: 'The port that the service will run on.', default: 80 }),
  EXPOSED_PORT: port({ desc: 'The port that the service will run on.', default: 80 }),
  MONGO_URL: str({ desc: 'The MongoDB connection string' }),
  MONGO_DB: str({ default: 'arizent-webhook-payloads-production' }),
});
