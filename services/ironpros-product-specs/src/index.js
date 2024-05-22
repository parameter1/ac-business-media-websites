require('./newrelic');
const bootService = require('@parameter1/terminus/boot-service');
const newrelic = require('./newrelic');
const server = require('./server');
const pkg = require('../package.json');
const { HOST, PORT, EXPOSED_PORT } = require('./env');
const { client, filterUri, db } = require('./mongodb');

const { log } = console;

process.on('unhandledRejection', (e) => {
  newrelic.noticeError(e);
  throw e;
});

bootService({
  name: pkg.name,
  version: pkg.version,
  server,
  host: HOST,
  port: PORT,
  exposedPort: EXPOSED_PORT,
  onError: newrelic.noticeError.bind(newrelic),
  onStart: async () => {
    log('Connecting to source MongoDB...');
    const r = await client.connect();
    log(`Connected to ${filterUri(r)}.`);
  },
  onSignal: async () => {
    await client.close();
  },
  onHealthCheck: async () => {
    const database = await db();
    await database.command({ ping: 1 });
  },
}).catch((e) => setImmediate(() => {
  newrelic.noticeError(e);
  throw e;
}));
