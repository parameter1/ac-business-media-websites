const newrelic = require('newrelic');
const { startServer } = require('@parameter1/base-cms-marko-web');
const { set, get, getAsObject } = require('@parameter1/base-cms-object-path');
const contactUsHandler = require('@ac-business-media/package-common/contact-us');
const companySearchHandler = require('@ac-business-media/package-common/company-search');
const specGuideHandler = require('@ac-business-media/package-common/spec-guide');
const loadInquiry = require('@parameter1/base-cms-marko-web-inquiry');
const omedaIdentityX = require('@parameter1/base-cms-marko-web-omeda-identity-x');

const sharedRedirectHandler = require('./redirect-handler');

const buildGAMConfig = require('./gam/build-config');
const buildNativeXConfig = require('./native-x/build-config');

const document = require('./components/document');
const components = require('./components');
const fragments = require('./fragments');
const omedaConfig = require('./config/omeda');
const idxRouteTemplates = require('./templates/user');

const routes = siteRoutes => (app) => {
  // Handle submissions on /__inquiry
  loadInquiry(app);
  // Handle contact submissions on /__contact-us
  contactUsHandler(app);
  // Handle spec-guide sheet request on /__company-search?searchQuery=CompanyName
  companySearchHandler(app);
  // Handle spec-guide sheet request on /__spec-guide?src=${sheetSrc}
  specGuideHandler(app);
  // Load site routes.
  siteRoutes(app);
};

module.exports = (options = {}) => {
  const { onStart, redirectHandler } = options;
  const gamConfig = get(options, 'siteConfig.gam');
  const nativeXConfig = getAsObject(options, 'siteConfig.nativeX');
  const specGuideConfig = getAsObject(options, 'siteConfig.specGuides');
  return startServer({
    ...options,
    routes: routes(options.routes),
    document: options.document || document,
    components: options.components || components,
    fragments: options.fragments || fragments,
    onStart: async (app) => {
      if (typeof onStart === 'function') await onStart(app);
      app.set('trust proxy', 'loopback, linklocal, uniquelocal');
      // Setup GAM.
      if (gamConfig) {
        set(app.locals, 'GAM', buildGAMConfig(gamConfig));
      }
      // Setup NativeX.
      set(app.locals, 'nativeX', buildNativeXConfig(nativeXConfig));
      // Setup Spec Guides
      if (specGuideConfig.guides && Object.keys(specGuideConfig.guides).length) {
        set(app.locals, 'specGuides', specGuideConfig);
      }

      // Setup IdentityX + Omeda
      const idxConfig = getAsObject(options, 'siteConfig.identityX');
      omedaIdentityX(app, {
        brandKey: omedaConfig.brandKey,
        appId: omedaConfig.appId,
        inputId: omedaConfig.inputId,
        rapidIdentProductId: get(omedaConfig, 'rapidIdentification.productId'),
        idxConfig,
        idxRouteTemplates,
      });

      // Force set all date formats.
      app.use((req, res, next) => {
        set(app.locals, 'markoCoreDate.format', 'MMMM D, YYYY');
        next();
      });
    },
    redirectHandler: async (redirectOps) => {
      if (typeof redirectHandler === 'function') {
        const result = await redirectHandler(redirectOps);
        if (result) return result;
      }
      return sharedRedirectHandler(redirectOps);
    },
    onAsyncBlockError: e => newrelic.noticeError(e),
  });
};
