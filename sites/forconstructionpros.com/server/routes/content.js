const fetch = require('node-fetch');
const { withContent } = require('@parameter1/base-cms-marko-web/middleware');
const userState = require('@ac-business-media/refresh-theme/middleware/user-state');
const content = require('@ac-business-media/refresh-theme/templates/content');
// const contact = require('@ac-business-media/refresh-theme/templates/content/contact');
const company = require('@ac-business-media/refresh-theme/templates/content/company');
// const whitepaper = require('@ac-business-media/refresh-theme/templates/content/whitepaper');
const queryFragment = require('@ac-business-media/refresh-theme/graphql/fragments/content-page');
const companyQueryFragment = require('@ac-business-media/refresh-theme/graphql/fragments/content-company-page');

module.exports = (app) => {
  app.get('/*?company/:id(\\d{8})*', withContent({
    template: company,
    queryFragment: companyQueryFragment,
  }));
  app.get('/*?:id(\\d{8})*', userState(), withContent({
    template: content,
    queryFragment,
    async sideloadDataFn() {
      try {
        const res = await fetch('https://bcl.tauron.base.parameter1.com/', {
          method: 'POST',
          headers: { 'content-type': 'application/json', 'x-tenant-key': 'acbm_fcp' },
          body: JSON.stringify({
            query: `query { highlightedContentBody(input: { _id: ${this.variables.input.id} }) }`,
          }),
        });
        const { data } = await res.json();
        if (!data || !data.highlightedContentBody) return {};
        return {
          bcl: { body: data.highlightedContentBody },
        };
      } catch (e) {
        // log this somehow?
        return {};
      }
    },
  }));
};
