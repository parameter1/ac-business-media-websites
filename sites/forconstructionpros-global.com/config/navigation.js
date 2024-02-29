const user = require('@ac-business-media/package-global/config/user');

const subscribe = {
  href: '/subscribe',
  label: 'Subscribe',
};

const topics = [
  { href: '/equipment', label: 'Equipment' },
  { href: '/rental', label: 'Rental' },
  { href: '/concrete', label: 'Concrete' },
  { href: '/asphalt', label: 'Asphalt' },
  { href: '/pavement-maintenance', label: 'Pavement' },
  { href: '/construction-technology', label: 'Technology' },
  { href: '/business', label: 'Business' },
  { href: 'https://www.pavexshow.com/', label: 'PAVE/X', target: '_blank' },
];

const secondary = [
  { href: '/directory', label: 'New Equipment Directory' },
  { href: 'https://ironpros.com', label: 'IRONPROS', target: '_blank' },
  { href: '/videos', label: 'Video Network' },
  { href: '/magazine', label: 'Magazines' },
  { href: '/events', label: 'Events' },
  { href: '/podcasts', label: 'Podcasts' },
  { href: '/premium-content', label: 'Premium Content' },
  { href: '/webinars', label: 'Webinars' },
  { href: 'https://www.constructionnetworkmediakit.com/', label: 'Advertise', target: '_blank' },
];

const exclusives = [
  { href: '/directory', label: 'New Equipment Directory' },
  { href: 'https://ironpros.com', label: 'IRONPROS', target: '_blank' },
  { href: '/specguide', label: 'Spec Guides' },
  { href: '/premium-content', label: 'Premium Content' },
  { href: 'https://www.constructionnetworkmediakit.com/', label: 'Advertise', target: '_blank' },
];

const expertInsights = [
  { href: '/blogs', label: 'Blogs' },
  { href: '/events', label: 'Events' },
  { href: '/magazine', label: 'Magazine' },
  { href: '/podcasts', label: 'Podcasts' },
  { href: '/videos', label: 'Videos' },
  { href: '/webinars', label: 'Webinars' },
  { href: '/whitepapers', label: 'White Papers' },
];

const utilities = [
  { href: '/contact-us', label: 'Contact Us' },
  { href: 'https://www.constructionnetworkmediakit.com/', label: 'Advertise', target: '_blank' },
  { href: '/page/privacy-policy', label: 'Privacy Policy', target: '_blank' },
  { href: '/page/terms-conditions', label: 'Terms & Conditions', target: '_blank' },
];

const mobileMenu = {
  user,
  primary: [
    ...topics,
  ],
  secondary: [
    ...secondary,
    subscribe,
    { href: '/', label: 'Advertise', target: '_blank' },
  ],
};

module.exports = {
  type: 'navbar-c',
  promos: [
    {
      title: subscribe.label,
      callToAction: subscribe.label,
      link: subscribe.href,
    },
  ],
  user,
  mobileMenu,
  topics,
  primary: {
    items: topics,
  },
  secondary: {
    items: secondary,
  },
  tertiary: {
    items: [],
  },
  contexts: [
    {
      when: ['/equipment', '/trucks'],
      secondary: { items: topics },
      tertiary: { items: [] },
      primary: {
        items: [
          { href: '/trucks', label: 'Trucks' },
          { href: '/equipment/earthmoving', label: 'Earthmoving' },
          { href: '/equipment/fleet-maintenance', label: 'Fleet Maintenance' },
          { href: '/equipment/attachments', label: 'Attachments' },
          { href: '/equipment/compaction', label: 'Compaction' },
          { href: '/equipment/crane', label: 'Crane' },
        ],
      },
    },
    {
      when: ['/rental'],
      secondary: { items: topics },
      tertiary: { items: [] },
      primary: {
        items: [
          { href: '/rental/construction', label: 'Construction' },
          { href: '/rental/general-tool', label: 'General Tool' },
          { href: '/rental/lifting-equipment', label: 'Lifting Equipment' },
          { href: '/rental/power', label: 'Power' },
          { href: '/rental/rental-business', label: 'Rental Business' },
          {
            href: '/page/Subscribe-Links',
            label: 'Rental Magazine ',
            icon: 'book',
            forceLabel: true,
          },
          {
            href: 'https://acbusiness.dragonforms.com/loading.do?omedasite=RENTALprefs&pk=managepref',
            label: 'Rental Newsletter',
            icon: 'mail',
            forceLabel: true,
            target: '_blank',
          },
        ],
      },
    },
    {
      when: ['/concrete'],
      secondary: { items: topics },
      tertiary: { items: [] },
      primary: {
        items: [
          { href: '/concrete/decorative', label: 'Decorative' },
          { href: '/concrete/equipment-products', label: 'Equipment & Products' },
          { href: '/concrete/equipment-products/concrete-pumps', label: 'Pumps' },
          { href: '/concrete/equipment-products/power-trowels', label: 'Trowels' },
          { href: '/concrete/equipment-products/repair-rehabilitation-products', label: 'Repair' },
          { href: '/concrete/world-of-concrete', label: 'World of Concrete' },
        ],
      },
    },
    {
      when: ['/asphalt'],
      secondary: { items: topics },
      tertiary: { items: [] },
      primary: {
        items: [
          { href: '/asphalt/additives', label: 'Additives' },
          { href: '/asphalt/plants', label: 'Plants' },
          { href: '/asphalt/recycling', label: 'Recycling' },
          { href: '/asphalt/pavers', label: 'Pavers' },
          { href: '/asphalt/material-transfer-vehicles', label: 'MTV\'s' },
        ],
      },
    },
    {
      when: ['/business'],
      secondary: { items: topics },
      tertiary: { items: [] },
      primary: {
        items: [
          { href: '/business/business-services', label: 'Services' },
          { href: '/business/construction-safety', label: 'Safety' },
          { href: '/business/business-services/training-education', label: 'Training & Education' },
          { href: '/business/labor-workforce-development', label: 'Labor' },
        ],
      },
    },
    {
      when: ['/construction-technology'],
      secondary: { items: topics },
      tertiary: { items: [] },
      primary: {
        items: [
          { href: '/construction-technology/apps', label: 'Apps' },
          { href: '/construction-technology/theft-prevention', label: 'Theft Prevention' },
          { href: '/construction-technology/personnel-management', label: 'Personnel Management' },
          { href: '/construction-technology/equipment-monitoring-logistics', label: 'Equipment Monitoring' },
          { href: '/construction-technology/machine-grade-control-gps-laser-other', label: 'Machine Grade Control, GPS, Laser & Other' },
        ],
      },
    },
    {
      when: ['/pavement-maintenance'],
      secondary: { items: topics },
      tertiary: { items: [] },
      primary: {
        items: [
          { href: '/pavement-maintenance/sweepers', label: 'Sweepers' },
          { href: '/pavement-maintenance/marking-striping', label: 'Marking & Striping' },
          { href: '/pavement-maintenance/preservation-maintenance', label: 'Preservation' },
        ],
      },
    },
    {
      when: ['/profit-matters'],
      secondary: { items: topics },
      tertiary: { items: [] },
      primary: {
        items: [
          { href: '/profit-matters?contentTypes=Blog', label: 'Blogs' },
          { href: '/profit-matters?contentTypes=Podcast', label: 'Podcasts' },
          { href: '/profit-matters?contentTypes=Webinar', label: 'Webinars' },
          { href: '/profit-matters?contentTypes=Video', label: 'Videos' },
          { href: '/profit-matters?contentTypes=Article', label: 'Articles' },
          { href: '/profit-matters/on-site-series', label: 'Contractor’s Site Report' },
        ],
      },
    },
  ],
  toggleMenu: {
    about: {
      // label: 'About',
      // items: utilities,
    },
    col1: {
      label: 'Topics',
      items: [
        ...topics,
      ],
    },
    col2: {
      label: 'Exclusives',
      items: [
        ...exclusives,
      ],
    },
    col3: {
      label: 'Expert Insights',
      items: expertInsights,
    },
    col4: {
      label: 'Resources',
      items: utilities,
    },
  },
  footer: {
    topics,
    more: exclusives,
    items: [
      ...utilities,
      { href: '/page/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
};
