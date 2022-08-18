const newrelic = require('newrelic');
const { startServer } = require('@parameter1/base-cms-marko-web');
const { set, get, getAsObject } = require('@parameter1/base-cms-object-path');
const contactUsHandler = require('@parameter1/base-cms-marko-web-contact-us');
const companySearchHandler = require('@ac-business-media/package-common/company-search');
const specGuideHandler = require('@ac-business-media/package-common/spec-guide');
const loadInquiry = require('@parameter1/base-cms-marko-web-inquiry');
const omedaIdentityX = require('@parameter1/base-cms-marko-web-omeda-identity-x');

const sharedRedirectHandler = require('./redirect-handler');
const omedaIdentityXHooks = require('./omeda-identity-x/hooks');

const buildGAMConfig = require('./gam/build-config');
const buildNativeXConfig = require('./native-x/build-config');

const document = require('./components/document');
const components = require('./components');
const fragments = require('./fragments');
const idxRouteTemplates = require('./templates/user');

const defaultContentGatingHandler = () => false;
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
  const idxConfig = getAsObject(options, 'siteConfig.identityX');
  const omedaConfig = getAsObject(options, 'siteConfig.omeda');
  const nativeXConfig = getAsObject(options, 'siteConfig.nativeX');
  const specGuideConfig = getAsObject(options, 'siteConfig.specGuides');
  const contentGatingHandler = options.contentGatingHandler || defaultContentGatingHandler;
  return startServer({
    ...options,
    routes: routes(options.routes),
    document: options.document || document,
    components: options.components || components,
    fragments: options.fragments || fragments,
    onStart: async (app) => {
      set(app.locals, 'contentGatingHandler', contentGatingHandler);
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

      const omedaIdentityXConfig = getAsObject(options, 'siteConfig.omedaIdentityX');
      omedaIdentityX(app, { ...omedaIdentityXConfig, idxRouteTemplates });

      // Custom Omeda+IdentityX hooks
      omedaIdentityXHooks({ app, omedaConfig, idxConfig });

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
