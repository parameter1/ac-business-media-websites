const { get } = require('@parameter1/base-cms-object-path');
const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const MarkoWebSearchConfig = require('@parameter1/base-cms-marko-web-search/config');
const MarkoWebSearch = require('@parameter1/base-cms-marko-web-search');
const queryFragment = require('../graphql/fragments/website-directory-section-page');
const directory = require('../templates/directory/index');

module.exports = (
  app,
  {
    rootAlias = 'directory',
    contentTypes = ['Company', 'Product'],
    assignedToWebsiteSectionIds = [],
    template = directory,
  },
) => {
  const config = new MarkoWebSearchConfig({
    resultsPerPage: { default: 18 },
    contentTypes,
    assignedToWebsiteSectionIds,
    defaultSortField: 'NAME',
    rootAlias,
  });

  const searchMiddleware = (req, res, next) => {
    res.locals.$markoWebSearch = new MarkoWebSearch({
      config,
      query: {
        ...req.query,
      },
    });
    if (!get(req, 'query.searchQuery') && get(req, 'query.sortField') === 'SCORE') {
      const params = new URLSearchParams(get(req, 'query'));
      params.delete('sortField');
      params.delete('searchQuery');
      if (`${params}`) res.redirect(301, `/${get(req, 'params.alias')}?${params}`);
      else res.redirect(301, `/${get(req, 'params.alias')}`);
    }
    next();
  };

  app.get(`/:alias(${rootAlias})`, searchMiddleware, withWebsiteSection({
    template,
    queryFragment,
  }));
  app.get(`/:alias(${rootAlias}/[a-z0-9-/]+)`, searchMiddleware, withWebsiteSection({
    template,
    queryFragment,
  }));
};
