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
    assignedToWebsiteSectionIds: [
      94758,
      94759,
      94760,
      94761,
      94762,
      94763,
      94764,
      94765,
      94766,
      94767,
      94768,
      94769,
      94770,
      94771,
    ],
  });

  // Native-X story rendering
  nativeX(app);

  // Website Sections
  websiteSections(app);
};
