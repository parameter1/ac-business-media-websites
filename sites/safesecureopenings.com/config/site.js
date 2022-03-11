const navigation = require('./navigation');
const contentMeter = require('./content-meter');
const gam = require('./gam');
const nativeX = require('./native-x');
const identityX = require('./identity-x');
const dragonForms = require('./dragon-forms');
const events = require('./events');

module.exports = {
  contentMeter,
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
    cookieDomain: process.env.NODE_ENV === 'production' ? 'safesecureopenings.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.safesecureopenings.com/files/base/acbm/fcp/image/static/sso/Logo-Final.png?h=45&auto=format,compress',
      srcset: [
        'https://img.safesecureopenings.com/files/base/acbm/fcp/image/static/sso/Logo-Final.png?h=90&auto=format,compress 2x',
      ],
    },
    footer: {
      src: 'https://img.safesecureopenings.com/files/base/acbm/fcp/image/static/sso/Logo-Final.png?h=60&auto=format,compress',
      srcset: [
        'https://img.safesecureopenings.com/files/base/acbm/fcp/image/static/sso/Logo-Final.png?h=120&auto=format,compress 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/fordsspros/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/ssopenings', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/SafeSecureOpenings', target: '_blank' },
  ],
  radix: {
    enabled: false,
    // url: 'https://radix.base.parameter1.com',
    // appId: '436dd265-a7ac-4608-8331-d5ea70e65102',
    // submissionFieldIds: [
    //   { name: 'comments', id: '5b99725a81284d4fc4e58233' },
    // ],
  },
  gtm: {
    containerId: 'GTM-M92TRPK',
  },
  // mediaFuse: {
  //   id: 6062,
  // },
  gcse: {
    id: '003355913687346718228:zrqhmh7lvw4',
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
      logo: 'https://img.safesecureopenings.com/files/base/acbm/fcp/image/static/sso/Logo-Final.png?h=60&auto=format,compress',
    },
    to: 'jsage@acbusinessmedia.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'requestmoreinfo@acbusinessmedia.com',
    sendFrom: 'Safe & Secure Openings <noreply@parameter1.com>',
    logo: 'https://img.safesecureopenings.com/files/base/acbm/fcp/image/static/sso/Logo-Final.png?h=60&auto=format,compress',
    bgColor: '#164f77',
  },
};
