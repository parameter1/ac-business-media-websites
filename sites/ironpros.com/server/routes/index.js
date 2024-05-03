const directory = require('@ac-business-media/package-global/routes/directory');
const nativeX = require('@ac-business-media/package-global/routes/native-x');
const home = require('./home');
const content = require('./content');
const dynamicPages = require('./dynamic-page');
const websiteSections = require('./website-section');
const specs = require('./specs');
const directoryTemplate = require('../templates/directory/index');

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
      87730,
      87731,
      87733,
      87732,
      87734,
      87735,
      87736,
      87737,
      87739,
      87738,
      87740,
      87742,
      87741,
      87743,
      87744,
      87745,
    ],
    template: directoryTemplate,
  });

  // Native-X story rendering
  nativeX(app);

  // Website Sections
  websiteSections(app);

  specs(app);
};
