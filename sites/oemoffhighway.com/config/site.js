const navigation = require('./navigation');
const contentMeter = require('./content-meter');
const gam = require('./gam');
const nativeX = require('./native-x');
const identityX = require('./identity-x');
const specGuides = require('./spec-guides');
const dragonForms = require('./dragon-forms');
const events = require('./events');

module.exports = {
  contentMeter,
  gam,
  nativeX,
  identityX,
  dragonForms,
  navigation,
  specGuides,
  events,
  company: 'AC Business Media, LLC',
  p1events: {
    tenant: 'acbm',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'oemoffhighway.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.oemoffhighway.com/files/base/acbm/static/OEM_Logo2019_Reversed_NoTag.png?h=45&auto=format,compress',
      srcset: [
        'https://img.oemoffhighway.com/files/base/acbm/static/OEM_Logo2019_Reversed_NoTag.png?h=90&auto=format,compress 2x',
      ],
    },
    footer: {
      src: 'https://img.oemoffhighway.com/files/base/acbm/static/OEM_Logo2019_Reversed_NoTag.png?h=60&auto=format,compress',
      srcset: [
        'https://img.oemoffhighway.com/files/base/acbm/static/OEM_Logo2019_Reversed_NoTag.png?h=120&auto=format,compress 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/OEMOffHighway', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/OEMOffHighway', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/oem-off-highway/', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCuAwQzKyZOqJolRTNYa0ZyA', target: '_blank' },
    { provider: 'flipboard', href: 'https://flipboard.com/@OEMOffHighway', target: '_blank' },
  ],
  radix: {
    enabled: true,
    url: 'https://radix.base.parameter1.com',
    appId: '3415bd29-da4c-463a-8c3f-fce02de88347',
    submissionFieldIds: [
      { name: 'comments', id: '580f6cc935ab46ff40b015b7' },
    ],
  },
  gtm: {
    containerId: 'GTM-KFFMFV4',
  },
  mediaFuse: {
    id: 6063,
  },
  gcse: {
    id: '017383739850048358259:aj4j1qbs7ai',
  },
  wufoo: {
    userName: 'acbm',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#ed1c24',
      logo: 'https://img.oemoffhighway.com/files/base/acbm/static/OEM_Logo2019_Reversed_NoTag.png?h=60&auto=format,compress',
    },
    to: 'jsage@acbusinessmedia.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'requestmoreinfooem@acbusinessmedia.com',
    sendFrom: 'OEM Off-Highway <noreply@parameter1.com>',
    logo: 'https://img.oemoffhighway.com/files/base/acbm/static/OEM_Logo2019_Reversed_NoTag.png?h=60&auto=format,compress',
    bgColor: '#ed1c24',
  },
};
