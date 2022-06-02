const newrelic = require('newrelic');
const { startServer } = require('@parameter1/base-cms-marko-web');
const { set, get, getAsObject } = require('@parameter1/base-cms-object-path');
const contactUsHandler = require('@parameter1/base-cms-marko-web-contact-us');
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

const getId = (value) => {
  if (!value) return null;
  const trimmed = `${value}`.trim();
  return /^[a-z0-9]{15}$/i.test(trimmed) ? trimmed : null;
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

      // Look for and set global for olyEncId off query params or by cookie
      app.use((req, res, next) => {
        const {
          query,
          cookies,
        } = req;

        const idFromQuery = getId(query.oly_enc_id);
        const idFromCookie = cookies.oly_enc_id ? getId(cookies.oly_enc_id.replace(/^"/, '').replace(/"$/, '')) : undefined;
        const olyEncId = idFromQuery || idFromCookie;
        set(app.locals, 'olyEncId', olyEncId);
        next();
      });

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
      omedaIdentityX(app, {
        clientKey: omedaConfig.clientKey,
        brandKey: omedaConfig.brandKey,
        appId: omedaConfig.appId,
        inputId: omedaConfig.inputId,
        rapidIdentProductId: get(omedaConfig, 'rapidIdentification.productId'),
        omedaPromoCodeDefault: omedaConfig.promoCodeDefault,
        omedaPromoCodeCookieName: omedaConfig.promoCodeCookieName,
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
