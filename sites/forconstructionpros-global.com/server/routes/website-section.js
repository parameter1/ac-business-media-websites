const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/website-section-page');
const blogs = require('@ac-business-media/package-global/templates/website-section/blogs');
const webinars = require('@ac-business-media/package-global/templates/website-section/webinars');
const podcasts = require('@ac-business-media/package-global/templates/website-section/podcasts');
const upcomingEvents = require('@ac-business-media/package-global/templates/website-section/upcoming-events');
const section = require('@ac-business-media/package-global/templates/website-section');
const sectionWithoutNativeX = require('@ac-business-media/package-global/templates/website-section/without-native-x');

const withoutNativeXAlias = [
  'events',
  'expert-insights',
  'expert-insights/white-papers',
];

module.exports = (app) => {
  app.get('/:alias(expert-insights/podcasts)', withWebsiteSection({
    template: podcasts,
    queryFragment,
  }));
  app.get('/:alias(webinars)', withWebsiteSection({
    template: webinars,
    queryFragment,
  }));
  withoutNativeXAlias.forEach((alias) => {
    app.get(`/:alias(${alias})`, withWebsiteSection({
      template: sectionWithoutNativeX,
      queryFragment,
    }));
  });
  app.get('/:alias(events/event-calendar)', withWebsiteSection({
    template: upcomingEvents,
    queryFragment,
  }));
  app.get('/:alias(blogs)', withWebsiteSection({
    template: blogs,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
