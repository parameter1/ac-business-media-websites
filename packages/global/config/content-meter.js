module.exports = {
  enabled: process.env.ENABLE_CONTENT_METER === 'true',
  viewLimit: process.env.CONTENT_METER_VIEW_LIMIT || 2,
  excludeLabels: ['Sponsored'],
  excludeContentTypes: [
    'contact',
    'company',
    'document',
    'event',
    'product',
    'webinar',
    'whitepaper',
    'video',
  ],
  // excludePrimarySectionIds: [
  //   75347,
  // ],
  // excludePrimarySectionAlias: [
  //   'home',
  // ],
  // 30 days to milliseconds
  timeframe: 30 * 24 * 60 * 60 * 1000,
  displayOverlay: true,
  promoCode: 'registration_meter',
};
