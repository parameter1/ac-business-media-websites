const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const identityX = require('./identity-x');
const dragonForms = require('./dragon-forms');
const events = require('./events');

module.exports = {
  gam,
  nativeX,
  identityX,
  dragonForms,
  navigation,
  events,
  company: 'AC Business Media, LLC',
  p1events: {
    tenant: 'acbm',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'greenindustrypros.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.greenindustrypros.com/files/base/acbm/static/GIP_Logo2013_Reverse.png?h=45&auto=format,compress',
      srcset: [
        'https://img.greenindustrypros.com/files/base/acbm/static/GIP_Logo2013_Reverse.png?h=90&auto=format,compress 2x',
      ],
    },
    footer: {
      src: 'https://img.greenindustrypros.com/files/base/acbm/static/GIP_Logo2013_Reverse.png?h=60&auto=format,compress',
      srcset: [
        'https://img.greenindustrypros.com/files/base/acbm/static/GIP_Logo2013_Reverse.png?h=120&auto=format,compress 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/green-industry-pros/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/greenindpros', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/GreenIndustryPros', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/greenindustrypros/', target: '_blank' },
    { provider: 'flipboard', href: 'https://flipboard.com/@GreenIndustry', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/c/greenindustrypros', target: '_blank' },
  ],
  radix: {
    enabled: true,
    url: 'https://radix.base.parameter1.com',
    appId: '436dd265-a7ac-4608-8331-d5ea70e65102',
    submissionFieldIds: [
      { name: 'comments', id: '5b99725a81284d4fc4e58233' },
    ],
  },
  gtm: {
    containerId: 'GTM-T2K6NQQ',
  },
  mediaFuse: {
    id: 6062,
  },
  gcse: {
    id: '017383739850048358259:WMX-939532962',
  },
  wufoo: {
    userName: 'acbm',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#164f77',
      logo: 'https://img.greenindustrypros.com/files/base/acbm/static/GIP_Logo2013_Reverse.png?h=60&auto=format,compress',
    },
    to: 'jsage@acbusinessmedia.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'requestmoreinfogip@acbusinessmedia.com',
    sendFrom: 'GreenIndustryPros.com <noreply@parameter1.com>',
    logo: 'https://img.greenindustrypros.com/files/base/acbm/static/GIP_Logo2013_Reverse.png?h=60&auto=format,compress',
    bgColor: '#164f77',
  },
};
