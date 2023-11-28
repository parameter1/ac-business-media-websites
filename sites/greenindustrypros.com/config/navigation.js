const snowProNav = 'https://img.greenindustrypros.com/files/base/acbm/gip/image/static/logo/SnowPro_Logo_horizontal-white.png?h=18&auto=format';
const snowProMenu = 'https://img.greenindustrypros.com/files/base/acbm/gip/image/static/logo/SnowPro_Logo_horizontal-color.png?h=18&auto=format';

const topics = [
  { href: '/business-management', label: 'Business Management' },
  { href: '/design-installation', label: 'Design/Build' },
  { href: '/irrigation-water-management', label: 'Irrigation' },
  { href: '/lawn-care', label: 'Lawn Care' },
  { href: '/mowing-maintenance', label: 'Mow & Maintenance' },
  { href: '/tree-ornamental', label: 'Tree Care' },
  { href: '/industry-updates', label: 'Industry Updates' },
  { href: '/snowpro', label: `<img src=${snowProNav} />` },
];

const resources = [
  { href: '/magazine', label: 'Magazine' },
  { href: '/awards', label: 'Awards' },
  { href: '/videos', label: 'Videos' },
  { href: '/expert-columns', label: 'Expert Columns' },
  { href: '/webinars', label: 'Webinars' },
  { href: 'https://cms.megaphone.fm/channel/grassroots?selected=ACBMI1756535736', target: '_blank', label: 'Podcast' },
  { href: '/premium-content', label: 'Premium Content' },
  { href: '/advertise', label: 'Advertise' },
  { href: '/contact-us', label: 'Contact Us' },
];

const tertiaryItems = [
  {
    href: 'https://acbm.dragonforms.com/GIPROSnew&pk=GIP',
    label: 'Magazine',
    icon: 'book',
    forceLabel: true,
    target: '_blank',
  },
  {
    href: 'https://acbusiness.dragonforms.com/loading.do?omedasite=GIPROSprefs&pk=managepref',
    label: 'Newsletter',
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
];

module.exports = {
  primary: {
    items: topics,
  },
  secondary: {
    items: resources,
  },
  tertiary: {
    items: tertiaryItems,
  },
  contexts: [
    {
      when: ['/business-management'],
      secondary: { items: topics },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/business-management/software', label: 'Software & Technology' },
          { href: '/business-management/recruitment-retention', label: 'Recruitment & Retention' },
          { href: '/business-management/marketing', label: 'Marketing' },
          { href: '/business-management/training-education', label: 'Training & Education' },
        ],
      },
    },
    {
      when: ['/lawn-care'],
      secondary: { items: topics },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/lawn-care/spraying-spreading', label: 'Spreader-Sprayers & Equipment' },
          { href: '/lawn-care/weed-insect-id', label: 'Weed & Insect ID' },
          { href: '/lawn-care/fungicides-herbicides-insecticides', label: 'Fungicides, Herbicides, Insecticides' },
          { href: '/lawn-care/fertilizer', label: 'Fertilizing' },
          { href: '/lawn-care/aeration-dethatching', label: 'Aeration & Dethatching' },
        ],
      },
    },
    {
      when: ['/mowing-maintenance'],
      secondary: { items: topics },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/mowing-maintenance/mowing', label: 'Mowing & Maintenance' },
          { href: '/mowing-maintenance/mulching', label: 'Mulching' },
          { href: '/mowing-maintenance/handheld-equipment', label: 'Handheld Equipment' },
          { href: '/mowing-maintenance/cleanups', label: 'Cleanups' },
          { href: '/mowing-maintenance/engines-parts-shop-equipment', label: 'Engines, Parts & Shop Equipment' },
          { href: '/mowing-maintenance/trucks-trailers-utility-vehicles', label: 'Trucks, Trailers & UTVs' },
          { href: '/mowing-maintenance/alternative-fuels', label: 'Alternative Fuels' },
          { href: '/mowing-maintenance/robotics', label: 'Robotics' },
        ],
      },
    },
    {
      when: ['/tree-ornamental'],
      secondary: { items: topics },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/tree-ornamental/safety', label: 'Safety' },
          { href: '/tree-ornamental/disease-control', label: 'Disease Control' },
          { href: '/tree-ornamental/tools-safety-equipment', label: 'Tools & Equipment' },
          { href: '/tree-ornamental/debris-handling', label: 'Debris Handling' },
          { href: '/tree-ornamental/alternative-fuels', label: 'Alternative Fuels' },
        ],
      },
    },
    {
      when: ['/design-installation'],
      secondary: { items: topics },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/design-installation/design', label: 'Design' },
          { href: '/design-installation/hardscaping', label: 'Hardscaping & Installation' },
          { href: '/design-installation/compact-equipment', label: 'Compact Equipment' },
          { href: '/design-installation/attachments', label: 'Attachments' },
          { href: '/design-installation/water-features', label: 'Water Features' },
        ],
      },
    },
    {
      when: ['/irrigation-water-management'],
      secondary: { items: topics },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/irrigation-water-management/smart-irrigation-water-management', label: 'Smart Irrigation & Water Management' },
          { href: '/irrigation-water-management/controllers', label: 'Controllers' },
          { href: '/irrigation-water-management/irrigation', label: 'Irrigation Components' },
          { href: '/irrigation-water-management/trenching', label: 'Trenchers' },
          { href: '/irrigation-water-management/installation-maintenance', label: 'Installation & Maintenance' },
        ],
      },
    },
    {
      when: ['/snowpro'],
      secondary: { items: topics },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/snowpro/operations', label: 'Operations' },
          { href: '/snowpro/deicing', label: 'Liquid De-icing' },
          { href: '/snowpro/sand-salt-spreading', label: 'Sand & Salt Spreading' },
          { href: '/snowpro/snow-attachments', label: 'Snow Attachments' },
          { href: '/snowpro/snow-clearing-equipment', label: 'Snow-Clearing Equipment' },
        ],
      },
    },
    {
      when: ['/awards'],
      secondary: { items: resources },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/awards/editors-choice', label: 'Editor\'s Choice' },
          { href: '/awards/women-in-the-green-industry-award', label: 'Women in the Green Industry' },
        ],
      },
    },
  ],

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
        { href: '/design-installation', label: 'Design/Build & Installation' },
        { href: '/irrigation-water-management', label: 'Irrigation & Water Management' },
        { href: '/lawn-care', label: 'Lawn Care' },
        { href: '/mowing-maintenance', label: 'Mowing & Maintenance' },
        { href: '/tree-ornamental', label: 'Tree & Ornamental' },
        { href: '/snowpro', label: `<img src=${snowProMenu} />` },
        { href: '/industry-updates', label: 'Industry Updates' },
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
        { href: '/awards', label: 'Awards' },
        { href: '/webinars', label: 'Webinars' },
        { href: '/events', label: 'Events' },
        { href: '/directory', label: 'Directory' },
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
