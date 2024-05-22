const privacyPolicy = require('@ac-business-media/package-global/config/privacy-policy');

const defaults = {
  name: 'Stay in the Know',
  description: 'Get industry news updates and product information to help you stay up to date.',
  defaultNewsletter: {
    deploymentTypeId: 0,
    name: 'TBD',
    eventCategory: 'TBD',
  },
  privacyPolicy,
};

module.exports = {
  // uses inline omeda form
  signupBanner: {
    ...defaults,
    imagePath: 'files/base/fcp/all/image/static/newsletter-pushdown/fg-full.png',
  },
  // pushdown: {
  //   ...defaults,
  //   imagePath: 'files/base/datia/all/image/static/newsletter-pushdown/fg-half.png',
  //   description: '',
  // },
  signupFooter: {
    ...defaults,
  },
};
