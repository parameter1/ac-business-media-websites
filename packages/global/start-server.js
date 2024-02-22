const newrelic = require('newrelic');
const { startServer } = require('@parameter1/base-cms-marko-web');
const { set, get, getAsObject } = require('@parameter1/base-cms-object-path');
const loadInquiry = require('@parameter1/base-cms-marko-web-inquiry');
const htmlSitemapPagination = require('@parameter1/base-cms-marko-web-html-sitemap/middleware/paginated');
const identityX = require('@parameter1/base-cms-marko-web-identity-x');
const omedaIdentityX = require('@parameter1/base-cms-marko-web-omeda-identity-x');

const document = require('./components/document');
const components = require('./components');
const fragments = require('./fragments');
const sharedRoutes = require('./routes');
const paginated = require('./middleware/paginated');
// const omedaConfig = require('./config/omeda');
const redirectHandler = require('./redirect-handler');
const idxRouteTemplates = require('./templates/user');
const recaptcha = require('./config/recaptcha');
const idxNavItems = require('./config/identity-x-nav');

const routes = (siteRoutes, siteConfig) => (app) => {
  // Handle submissions on /__inquiry
  loadInquiry(app);
  // Shared/global routes (all sites)
  sharedRoutes(app, siteConfig);
  // Load site routes
  siteRoutes(app);
};

module.exports = (options = {}) => {
  const { onStart } = options;
  return startServer({
    ...options,
    routes: routes(options.routes, options.siteConfig),
    document: options.document || document,
    components: options.components || components,
    fragments: options.fragments || fragments,
    sitemapsHeaders: {
      'x-google-news-input': JSON.stringify({
        days: 7,
        includeContentTypes: ['Article'],
        excludeLabels: [],
      }),
    },
    onStart: async (app) => {
      if (typeof onStart === 'function') await onStart(app);
      app.set('trust proxy', 'loopback, linklocal, uniquelocal');

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
      set(app.locals, 'GAM', gamConfig);

      // Setup NativeX.
      const nativeXConfig = get(options, 'siteConfig.nativeX');
      set(app.locals, 'nativeX', nativeXConfig);

      // i18n
      const i18n = (v) => v;
      set(app.locals, 'i18n', options.i18n || i18n);

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
