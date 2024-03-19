const directory = require('@ac-business-media/package-global/routes/directory');
const nativeX = require('@ac-business-media/package-global/routes/native-x');
const home = require('./home');
const content = require('./content');
const dynamicPages = require('./dynamic-page');
const websiteSections = require('./website-section');
const specguide = require('./spec-guide');

module.exports = (app) => {
  // Homepage
  home(app);

  // Dynamic Pages
  dynamicPages(app);

  // Content Pages
  content(app);

  specguide(app);

  // Directory Pages have to happen after content or they wont match
  directory(app, {
    rootAlias: 'product-categories',
    contentTypes: ['Company', 'Product'],
    assignedToWebsiteSectionIds: [
      214237,
      214238,
      214239,
      214240,
      214241,
      214242,
      214243,
      214244,
      214245,
      214246,
      214247,
      214248,
      214249,
      214250,
      214251,
      214252,
    ],
  });

  // Native-X story rendering
  nativeX(app);

  // Website Sections
  websiteSections(app);
};
