const MongoDBClient = require('@parameter1/mongodb/client');
const { filterUri, iterateCursor } = require('@parameter1/mongodb/utils');
const { MONGO_URL, MONGO_DB } = require('./env');

const client = new MongoDBClient({ url: MONGO_URL });

module.exports = {
  client,
  filterUri,
  iterateCursor,
  db: (options = {}) => client.db({ name: MONGO_DB, options }),
  collection: (options = {}) => client.collection({
    dbName: MONGO_DB,
    name: 'post-requests',
    options,
  }),
};
