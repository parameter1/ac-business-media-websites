const corporate = require('@ac-business-media/package-global/config/corporate');
const contentMeter = require('./content-meter');
const identityX = require('./identity-x');
const nativeX = require('./native-x');
const navigation = require('./navigation');
const omeda = require('./omeda');
const omedaIdentityX = require('./omeda-identity-x');
const identityXOptInHooks = require('./identity-x-opt-in-hooks');
const pageDetails = require('./page-details');
const newsletter = require('./newsletter');
const search = require('./search');

module.exports = {
  headerTagName: 'iron-site-header',
  footerTagName: 'iron-site-footer',
  // Module configs
  newsletter,
  useLinkInjectedBody: false,
  contentMeter,
  identityX,
  nativeX,
  navigation,
  omeda,
  omedaIdentityX,
  identityXOptInHooks,
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
      src: 'https://img.ironpros.com/files/base/acbm/fcp/image/static/logo/ironpros-logo-white.png?h=60&auto=format,compress',
      srcset: [
        'https://img.ironpros.com/files/base/acbm/fcp/image/static/logo/ironpros-logo-white.png?h=120&auto=format,compress 2x',
      ],
    },
    footer: {
      src: 'https://img.ironpros.com/files/base/acbm/fcp/image/static/logo/ironpros-logo-white.png?h=120&auto=format,compress',
      srcset: [
        'https://img.ironpros.com/files/base/acbm/fcp/image/static/logo/ironpros-logo-white.png?h=240&auto=format,compress 2x',
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
    containerId: 'GTM-KZ2ZT5J',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'sales@ironpros.com',
    sendFrom: 'IronsPros.com <noreply@ironpros.com>',
    logo: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/ironpros-logo-white.png?h=45&auto=format,compress&bg=000000&pad=5',
    bgColor: '#000',
  },
  contactUs: {
    title: 'Submit a comment.',
    notificationDefaults: {
      to: 'sales@ironpros.com',
      branding: {
        logo: 'https://img.ironpros.com/files/base/acbm/fcp/image/static/logo/ironpros-logo-white.png?h=45&auto=format,compress&bg=000000&pad=5',
      },
      support: {
        email: 'support@ironpros.com',
      },
    },
    to: 'sales@ironpros.com',
    branding: {
      logo: 'https://img.ironpros.com/files/base/acbm/fcp/image/static/logo/ironpros-logo-white.png?h=45&auto=format,compress&bg=000000&pad=5',
    },
    support: {
      email: 'support@ironpros.com',
    },
  },
  pageDetails,
  search,
  login: {
    description: 'Register or Login to IRONPROS',
    subtitle: 'Register to Gain Full Access to IRONPROS',
    explanation: 'As a registered user, you\'ll gain access to detailed and insightful assets which are essential to successful business decisions in the industry. Join our community of professionals to network, share insights, and stay ahead in the ever-evolving world of construction. Sign up today and start leveraging the full potential of IRONPROS!',
  },
};
