const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@ac-business-media/package-global/graphql/fragments/website-section-with-cover-image-page');
const webinars = require('../templates/website-section/webinars');
const section = require('../templates/website-section');

module.exports = (app) => {
  app.get('/:alias(webinars)', withWebsiteSection({
    template: webinars,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
