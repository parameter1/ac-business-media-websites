const loader = require('@parameter1/base-cms-marko-web-search/loaders/search');
const { asyncRoute } = require('@parameter1/base-cms-utils');

const queryFragment = require('../graphql/fragments/company-search');

module.exports = (app) => {
  app.use('/__company-search', asyncRoute(async (req, res) => {
    const { searchQuery } = req.query;
    const { apollo, $baseBrowse } = res.locals;

    try {
      const response = await loader(
        {
          apolloBaseCMS: apollo,
          apolloBaseBrowse: $baseBrowse,
        },
        {
          status: 1,
          contentTypes: ['COMPANY'],
          searchQuery,
          queryFragment,
        },
      );
      res.send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  }));
};
