const newrelic = require('newrelic');
const { startServer } = require('@parameter1/base-cms-marko-web');
const { set, get, getAsObject } = require('@parameter1/base-cms-object-path');
const loadInquiry = require('@parameter1/base-cms-marko-web-inquiry');
const htmlSitemapPagination = require('@parameter1/base-cms-marko-web-html-sitemap/middleware/paginated');
const contactUsHandler = require('@parameter1/base-cms-marko-web-contact-us');
const identityX = require('@parameter1/base-cms-marko-web-identity-x');
const omedaIdentityX = require('@parameter1/base-cms-marko-web-omeda-identity-x');

const specGuideHandler = require('./routes/spec-guide');
const document = require('./components/document');
const components = require('./components');
const fragments = require('./fragments');
const sharedRoutes = require('./routes');
const contentGating = require('./middleware/content-gating');
const paginated = require('./middleware/paginated');
// const omedaConfig = require('./config/omeda');
const redirectHandler = require('./redirect-handler');
const idxRouteTemplates = require('./templates/user');
const recaptcha = require('./config/recaptcha');
const idxNavItems = require('./config/identity-x-nav');

const routes = (siteRoutes, siteConfig) => (app) => {
  // load contact us route /__contact-us
  contactUsHandler(app);
  // Handle submissions on /__inquiry
  loadInquiry(app);
  // Shared/global routes (all sites)
  sharedRoutes(app, siteConfig);
  // Handle spec-guide sheet request on /__spec-guide?src=${sheetSrc}
  specGuideHandler(app);
  // Load site routes
  siteRoutes(app);
};

module.exports = (options = {}) => {
  const { onStart } = options;
  const specGuideConfig = getAsObject(options, 'siteConfig.specGuides');
  return startServer({
    ...options,
    routes: routes(options.routes, options.siteConfig),
    document: options.document || document,
    components: options.components || components,
    fragments: options.fragments || fragments,
    onStart: async (app) => {
      if (typeof onStart === 'function') await onStart(app);
      app.set('trust proxy', 'loopback, linklocal, uniquelocal');

      // Setup Spec Guides
      if (specGuideConfig.guides && Object.keys(specGuideConfig.guides).length) {
        set(app.locals, 'specGuides', specGuideConfig);
      }

      // Use paginated middleware
      app.use(paginated());

      // Use paginated middleware
      app.use(htmlSitemapPagination());

      // Setup IdentityX + Omeda
      const idxConfig = getAsObject(options, 'siteConfig.identityX');
      const omedaIdentityXConfig = getAsObject(options, 'siteConfig.omedaIdentityX');
      if (!omedaIdentityXConfig.inputId) {
        identityX(app, idxConfig, { templates: idxRouteTemplates });
      } else {
        omedaIdentityX(app, { ...omedaIdentityXConfig, idxConfig, idxRouteTemplates });
      }
      idxNavItems({ site: app.locals.site });

      // Setup GAM.
      const gamConfig = get(options, 'siteConfig.gam');
      if (gamConfig) {
        set(app.locals, 'GAM', gamConfig);
      }

      // Setup NativeX.
      const nativeXConfig = get(options, 'siteConfig.nativeX');
      set(app.locals, 'nativeX', nativeXConfig);

      // i18n
      const i18n = (v) => v;
      set(app.locals, 'i18n', options.i18n || i18n);

       // Install custom content gating middleware
       contentGating(app);

      // Recaptcha
      set(app.locals, 'recaptcha', recaptcha);

      // Personas Handler
      const personasHandler = () => ({ assignedPersonas: [] });
      set(app.locals, 'personasHandler', options.personasHandler || personasHandler);
    },
    onAsyncBlockError: (e) => newrelic.noticeError(e),
    redirectHandler,
  });
};
