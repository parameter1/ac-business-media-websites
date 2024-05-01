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
      215613,
      215614,
      215615,
      215616,
      215617,
      215618,
      215619,
      215620,
      215621,
      215622,
      215623,
      215624,
      215625,
      215626,
      215627,
      215628,
    ],
    template: directoryTemplate,
  });

  // Native-X story rendering
  nativeX(app);

  // Website Sections
  websiteSections(app);

  specs(app);
};
