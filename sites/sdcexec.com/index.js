const startServer = require('@ac-business-media/refresh-theme/start-server');
const cufv1 = require('@ac-business-media/refresh-theme/redirect-handler-cufv1');

const routes = require('./server/routes');
const siteConfig = require('./config/site');
const coreConfig = require('./config/core');

const { log } = console;

module.exports = startServer({
  rootDir: __dirname,
  coreConfig,
  siteConfig,
  routes,
  redirectHandler: cufv1('update.sdcexec.com'),
}).then(() => log('Website started!')).catch(e => setImmediate(() => { throw e; }));
