const corporate = require('@ac-business-media/package-global/config/corporate');
const contentMeter = require('./content-meter');
const identityX = require('./identity-x');
const nativeX = require('./native-x');
const navigation = require('./navigation');
const omeda = require('./omeda');
const omedaIdentityX = require('./omeda-identity-x');
const identityXOptInHooks = require('./identity-x-opt-in-hooks');
const pageDetails = require('./page-details');
const search = require('./search');

module.exports = {
  headerTagName: 'iron-site-header',
  footerTagName: 'iron-site-footer',
  // Module configs
  useLinkInjectedBody: process.env.USE_LINK_INJECTED_BODY || true,
  contentMeter,
  identityX,
  nativeX,
  navigation,
  omeda,
  omedaIdentityX,
  identityXOptInHooks,
  gcse: {
    id: 'NOT-SETUP', // '@TODO-Configure '003355913687346718228:la4zrhjf2r9',
  },
  // Site configs
  idxNavItems: {
    enable: process.env.IDX_NAV_ENABLE || false,
  },
  company: corporate.name,
  p1events: {
    tenant: 'acbm',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'www.ironpros.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/ironpros-logo-white.png?h=45&auto=format,compress',
      srcset: [
        'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/ironpros-logo-white.png?h=90&auto=format,compress 2x',
      ],
    },
    footer: {
      src: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/ironpros-logo-white.png?h=45&auto=format,compress',
      srcset: [
        'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/ironpros-logo-white.png?h=90&auto=format,compress 2x',
      ],
    },
    corporate: corporate.logo,
  },
  tagline: ' ',
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/IronProsResearch/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/iron_pros/', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/iron_pros/', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/ironpros/', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/@ironpros', target: '_blank' },
  ],
  podcastLinks: [],
  gtm: {
    containerId: 'GTM-NOTSET',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'requestmoreinfo@acbusinessmedia.com',
    sendFrom: 'IronsPros.com <noreply@parameter1.com>',
    logo: 'https://img.ironpros.com/files/base/acbm/fcp/image/static/logo/site_logo.png?h=45&auto=format,compress&bg=000000&pad=5',
    bgColor: '#000',
  },
  pageDetails,
  search,
};
