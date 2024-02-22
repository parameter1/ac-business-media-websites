const htmlSitemap = require('@parameter1/base-cms-marko-web-html-sitemap/routes');
const renderBlock = require('@parameter1/base-cms-marko-web-theme-monorail/routes/render-block');
const magazine = require('@parameter1/base-cms-marko-web-theme-monorail-magazine/routes');
const issueFragment = require('@parameter1/base-cms-marko-web-theme-monorail-magazine/graphql/fragments/magazine-issue-page');
const taxonomy = require('@parameter1/base-cms-marko-web-theme-monorail/routes/taxonomy');
const omedaNewsletters = require('@parameter1/base-cms-marko-web-omeda/routes/omeda-newsletters');
const companySearchHandler = require('@ac-business-media/package-common/company-search');

const rss = require('./rss');
const printContent = require('./print-content');
const publicFiles = require('./public-files');
const redirects = require('./redirects');
const recommended = require('./recommended');
const search = require('./search');
const staticPage = require('./static-page');
const subscribe = require('./subscribe');

const magazineIndex = require('../templates/magazine/index');
const magazineIssue = require('../templates/magazine/issue');

module.exports = (app, siteConfig) => {
  // Handle spec-guide sheet request on /__company-search?searchQuery=CompanyName
  companySearchHandler(app);

  // Handle spec-guide sheet request on /__company-search?searchQuery=CompanyName
  companySearchHandler(app);

  // Magazine
  magazine(app, { index: magazineIndex, issue: magazineIssue }, { issueFragment });

  // rss
  rss(app);

  // recommended
  recommended(app);

  // Omeda newsletter signup
  omedaNewsletters(app);

  // Shared Print Content
  printContent(app);

  // Shared Public Files (e.g. ads.txt)
  publicFiles(app);

  // Redirects
  redirects(app);

  // Remote component/block loader
  renderBlock(app);

  // Taxonomy pages (for handling redirects from old WP sites)
  taxonomy(app);

  // Search routes
  search(app, siteConfig);

  // Static pages
  staticPage(app);

  // Subscribe
  subscribe(app);

  // HTML Sitemap
  htmlSitemap(app);
};
