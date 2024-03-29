const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragmentWC = require('../graphql/fragments/website-section-page-with-childeren');

const regions = require('../templates/website-section/regions');

module.exports = (app) => {
  app.get('/:alias(recommended)', withWebsiteSection({
    template: regions,
    queryFragment: queryFragmentWC,
  }));
};
