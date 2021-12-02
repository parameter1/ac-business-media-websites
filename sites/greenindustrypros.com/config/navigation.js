const snowProLogoSrc = 'https://img.greenindustrypros.com/files/base/acbm/gip/image/static/logo/snow-pro-logo.png?h=30&auto=format';

module.exports = {
  primary: {
    items: [
      { href: '/business-management', label: 'Business Management' },
      { href: '/design-installation', label: 'Design & Installation' },
      { href: '/irrigation-water-management', label: 'Irrigation & Water' },
      { href: '/lawn-care', label: 'Lawn Care' },
      { href: '/mowing-maintenance', label: 'Mowing & Maintenance' },
      { href: '/tree-ornamental', label: 'Tree & Ornamental' },
      { href: '/snowpro', label: `<img src=${snowProLogoSrc} />` },
    ],
  },
  secondary: {
    items: [
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/magazine', label: 'Magazine' },
      { href: '/advertise', label: 'Advertise' },
      { href: '/directory', label: 'Directory' },
      { href: 'https://cms.megaphone.fm/channel/grassroots?selected=ACBMI1756535736', target: '_blank', label: 'Podcast' },
      { href: '/premium-content', label: 'Premium Content' },
      { href: '/videos', label: 'Videos' },
      { href: '/expert-columns', label: 'Expert Columns' },
    ],
  },
  tertiary: {
    items: [
      {
        href: 'https://acbm.dragonforms.com/GIPROSnew&pk=GIP',
        label: 'Magazine (Subscribe)',
        icon: 'book',
        forceLabel: true,
        target: '_blank',
      },
      {
        href: 'https://acbusiness.dragonforms.com/loading.do?omedasite=GIPROSprefs&pk=managepref',
        label: 'Newsletter (Sign Up)',
        icon: 'mail',
        forceLabel: true,
        target: '_blank',
      },
      {
        href: '/search',
        label: 'Search',
        icon: 'search',
        forceLabel: true,
      },
    ],
  },
  footer: {
    items: [
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://www.landscapenetworkmediakit.com/', label: 'Advertise', target: '_blank' },
      { href: '/page/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: '/page/terms-conditions', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: [
        { href: '/business-management', label: 'Business Management' },
        { href: '/design-installation', label: 'Design & Installation' },
        { href: '/irrigation-water-management', label: 'Irrigation & Water' },
        { href: '/lawn-care', label: 'Lawn Care' },
        { href: '/mowing-maintenance', label: 'Mowing & Maintenance' },
        { href: '/tree-ornamental', label: 'Tree & Ornamental' },
        { href: '/snowpro', label: `<img src=${snowProLogoSrc} />` },
      ],
    },
    {
      label: 'Resources',
      items: [
        { href: '/podcasts', label: 'Podcasts' },
        { href: '/premium-content', label: 'Premium Content' },
        { href: 'https://acbusiness.dragonforms.com/loading.do?omedasite=GIPROSprefs&pk=managepref', label: 'Newsletters', target: '_blank' },
        { href: '/magazine', label: 'Magazines' },
        { href: '/videos', label: 'Videos' },
        { href: 'https://cms.megaphone.fm/channel/grassroots?selected=ACBMI1756535736', target: '_blank', label: 'Podcast' },
        { href: '/expert-columns', label: 'Expert Columns' },
        // { href: '/specguide', label: 'Spec Guide' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: 'https://www.landscapenetworkmediakit.com/', label: 'Advertise', target: '_blank' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: '/page/terms-conditions', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
  ],
};
