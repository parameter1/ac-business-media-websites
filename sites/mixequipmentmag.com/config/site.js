const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Astec Industries, Inc',
  p1events: {
    tenant: 'acbm',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'mixequipmentmag.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://p1-cms-assets.imgix.net/files/base/acbm/mixequipmentmag/image/static/mix-equipment-logo.svg?h=45&auto=format,compress',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/acbm/mixequipmentmag/image/static/mix-equipment-logo.svg?h=90&auto=format,compress 2x',
      ],
    },
    footer: {
      src: 'https://p1-cms-assets.imgix.net/files/base/acbm/mixequipmentmag/image/static/mix-equipment-logo.svg?h=60&auto=format,compress',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/acbm/mixequipmentmag/image/static/mix-equipment-logo.svg?h=120&auto=format,compress 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/AstecInc1', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/astecinc', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/astecinc', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/astecinc', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-55P9PL4',
  },
  contactUs: {
    branding: {
      bgColor: '#ec131c',
      logo: 'https://p1-cms-assets.imgix.net/files/base/acbm/mixequipmentmag/image/static/mix-equipment-logo.svg?h=60&auto=format,compress',
    },
    to: 'nraether@acbusinessmedia.com',
  },
};
