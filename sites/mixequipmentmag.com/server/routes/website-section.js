const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const section = require('../templates/website-section');
const queryFragment = require('../graphql/fragments/website-section-page');

module.exports = (app) => {
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
