const contentMetering = require('@parameter1/base-cms-marko-web-theme-monorail/middleware/content-metering');

const { withContent } = require('@parameter1/base-cms-marko-web/middleware');
const { newsletterState, formatContentResponse } = require('@ac-business-media/package-global/middleware/newsletter-state');
const loaderFragment = require('@ac-business-media/package-global/graphql/fragments/content-primary-section');
const redirectHandler = require('@ac-business-media/package-global/redirect-handler');
const qf = require('@ac-business-media/package-global/graphql/fragments/content-page');
const company = require('../templates/content/company');
const contact = require('../templates/content/contact');
const product = require('../templates/content/product');
const content = require('../templates/content/default');

function redirectToFn({ content: contentItem, requestingSiteId }) {
  const existingRedirect = redirectHandler({
    from: `/${contentItem.id}`,
    app: { locals: { config: { website: () => requestingSiteId } } },
  });
  if (existingRedirect) {
    return existingRedirect.to;
  }
  if (contentItem.deletedContent && contentItem.type === 'company') {
    return '/directory';
  }
  return null;
}

module.exports = (app) => {
  const { site } = app.locals;
  // base on site config||USE_LINK_INJECTED_BODY to enable bcl
  const useLinkInjectedBody = site.get('useLinkInjectedBody');
  const queryFragment = qf.factory ? qf.factory(
    { useLinkInjectedBody, withMagazineSchedules: true },
  ) : qf;
  const routesList = [
    { // contact
      regex: '/*?contact/:id(\\d{8})*',
      template: contact,
      queryFragment,
      loaderFragment,
    },
    { // company
      regex: '/*?company/:id(\\d{8})*',
      template: company,
      queryFragment,
      loaderFragment,
    },
    { // company
      regex: '/*?product/:id(\\d{8})*',
      template: product,
      queryFragment,
      loaderFragment,
    },
    { // default
      regex: '/*?/:id(\\d{8})/*|/:id(\\d{8})(/|$)*',
      template: content,
      queryFragment,
      loaderFragment,
      withContentMeter: true,
    },
  ];

  const cmConfig = site.getAsObject('contentMeter');
  const contentMeterEnable = cmConfig.enabled;
  // determin to use newsletterstate or contentMeter middleware
  routesList.forEach((route) => {
    if (route.withContentMeter && contentMeterEnable) {
      app.get(
        route.regex,
        newsletterState({ setCookie: false }),
        contentMetering(cmConfig),
        withContent({
          template: route.template,
          queryFragment: route.queryFragment,
          formatResponse: formatContentResponse,
          redirectToFn,
        }),
      );
    } else {
      app.get(route.regex, newsletterState({ setCookie: false }), withContent({
        template: route.template,
        queryFragment: route.queryFragment,
        formatResponse: formatContentResponse,
        redirectToFn,
      }));
    }
  });
};
