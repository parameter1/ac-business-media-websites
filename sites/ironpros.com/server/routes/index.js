const directory = require('@ac-business-media/package-global/routes/directory');
const nativeX = require('@ac-business-media/package-global/routes/native-x');
const home = require('./home');
const content = require('./content');
const dynamicPages = require('./dynamic-page');
const websiteSections = require('./website-section');

module.exports = (app) => {
  // Homepage
  home(app);

  // Dynamic Pages
  dynamicPages(app);

  // Content Pages
  content(app);

  // Directory Pages have to happen after content or they wont match
  directory(app, {
    rootAlias: 'product-categories',
    contentTypes: ['Product', 'Company'],
    assignedToWebsiteSectionIds: [
      214925,
      214926,
      214927,
      214928,
      214929,
      214930,
      214931,
      214932,
      214933,
      214934,
      214935,
      214936,
      214937,
      214938,
      214939,
      214940,
    ],
  });

  // Native-X story rendering
  nativeX(app);

  // Website Sections
  websiteSections(app);
};
