const sharedPublicFiles = require('@ac-business-media/refresh-theme/routes/public-files');
const asphaltIndustryDirectory = require('./asphalt-industry-directory');
const content = require('./content');
const dynamicPages = require('./dynamic-page');
const home = require('./home');
const magazine = require('./magazine');
const search = require('./search');
const specGuides = require('./spec-guide');
const websiteSections = require('./website-section');

module.exports = (app) => {
  // Shared Public Files
  sharedPublicFiles(app);

  // Homepage
  home(app);

  // Magazine Pages
  magazine(app);

  // Spec Guides
  specGuides(app);

  // Asphalt Industry Directory
  asphaltIndustryDirectory(app);

  // Dynamic Pages
  dynamicPages(app);

  // Content Pages
  content(app);

  // Search
  search(app);

  // Website Sections
  websiteSections(app);
};
