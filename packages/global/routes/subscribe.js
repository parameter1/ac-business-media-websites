const index = require('../templates/subscribe/index');

module.exports = (app) => {
  app.get('/subscribe', (_, res) => { res.marko(index); });
};
