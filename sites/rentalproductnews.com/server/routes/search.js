const template = require('@ac-business-media/refresh-theme/templates/search');

module.exports = (app) => {
  app.get('/search', (_, res) => { res.marko(template); });
};
