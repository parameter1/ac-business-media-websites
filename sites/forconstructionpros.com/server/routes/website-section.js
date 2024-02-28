const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const section = require('@ac-business-media/refresh-theme/templates/website-section');
const contactUs = require('@ac-business-media/refresh-theme/templates/website-section/contact-us');
const events = require('@ac-business-media/refresh-theme/templates/website-section/events');
const feed = require('@ac-business-media/refresh-theme/templates/website-section/feed');
const publishedVideos = require('@ac-business-media/refresh-theme/templates/website-section/published-videos');
const media = require('@ac-business-media/refresh-theme/templates/website-section/media');
const webinars = require('@ac-business-media/refresh-theme/templates/website-section/webinars');
const queryFragment = require('@ac-business-media/refresh-theme/graphql/fragments/website-section-page');
const leadersFragment = require('@ac-business-media/refresh-theme/graphql/fragments/leaders-section');
const leaders = require('@ac-business-media/refresh-theme/templates/website-section/leaders');
const awards = require('@ac-business-media/refresh-theme/templates/website-section/awards');

const onSiteSeries = require('../templates/website-section/on-site-series');
const directory = require('../templates/website-section/directory');

module.exports = (app) => {
  app.get('/:alias(leaders)', withWebsiteSection({
    template: leaders,
    queryFragment: leadersFragment,
  }));
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
    queryFragment,
  }));
  app.get('/:alias(events)', withWebsiteSection({
    template: events,
    queryFragment,
  }));
  app.get('/:alias(podcasts|videos)', withWebsiteSection({
    template: media,
    queryFragment,
  }));
  app.get('/:alias(videos/library)', withWebsiteSection({
    template: publishedVideos,
    queryFragment,
  }));
  app.get('/:alias(podcasts/*|videos/*)', withWebsiteSection({
    template: feed,
    queryFragment,
  }));
  app.get('/:alias(webinars)', withWebsiteSection({
    template: webinars,
    queryFragment,
  }));
  app.get('/:alias(directory)', withWebsiteSection({
    template: directory,
    queryFragment,
  }));
  app.get('/:alias(directory/[a-z0-9-/]+)', withWebsiteSection({
    template: directory,
    queryFragment,
  }));
  app.get('/:alias(premium-content)', withWebsiteSection({
    template: feed,
    queryFragment,
  }));
  app.get('/:alias(km-international-videos)', withWebsiteSection({
    template: feed,
    queryFragment,
  }));
  app.get('/:alias(equipment/USG-your-unrivaled-edge-series)', withWebsiteSection({
    template: feed,
    queryFragment,
  }));
  app.get('/:alias(profit-matters/on-site-series)', withWebsiteSection({
    template: onSiteSeries,
    queryFragment,
  }));
  app.get('/:alias(expert-columns)', withWebsiteSection({
    template: feed,
    queryFragment,
    context: ({ section: s }) => ({
      query: {
        name: 'website-optioned-content',
        params: { sectionId: s.id, optionName: 'Pinned', limit: 12 },
      },
    }),
  }));
  app.get('/:alias(awards/*)', withWebsiteSection({
    template: feed,
    queryFragment,
  }));
  app.get('/:alias(awards)', withWebsiteSection({
    template: awards,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
