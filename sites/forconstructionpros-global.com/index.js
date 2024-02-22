const startServer = require('@ac-business-media/package-global/start-server');

const routes = require('./server/routes');
const siteConfig = require('./config/site');
const coreConfig = require('./config/core');
const { personasHandler } = require('./config/personas');

const { log } = console;

module.exports = startServer({
  rootDir: __dirname,
  coreConfig,
  siteConfig,
  personasHandler,
  routes,
}).then(() => log('Website started!')).catch((e) => setImmediate(() => { throw e; }));
