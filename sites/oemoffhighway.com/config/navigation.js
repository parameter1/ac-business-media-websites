const secondaryItems = [
  { href: '/engines', label: 'Engines' },
  { href: '/drivetrains', label: 'Drivetrains' },
  { href: '/fluid-power', label: 'Fluid Power' },
  { href: '/electronics', label: 'Electronics' },
  { href: '/operator-cab', label: 'Operator Cab' },
  { href: '/engineering-manufacturing', label: 'Manufacturing' },
  { href: '/market-analysis', label: 'Market Analysis' },
];

const tertiaryItems = [
  {
    href: 'https://oemoffhighway.dragonforms.com/OOH_new&pk=OEM',
    label: 'Magazine',
    icon: 'book',
    forceLabel: true,
    target: '_blank',
  },
  {
    href: 'https://acbusiness.dragonforms.com/loading.do?omedasite=OOHprefs&pk=managepref',
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
  secondary: {
    items: secondaryItems,
  },
  primary: {
    items: [
      { href: '/magazine', label: 'Magazine' },
      { href: '/podcasts', label: 'Podcast' },
      { href: '/webinars', label: 'Webinars' },
      { href: 'https://www.oemsummit.com/', label: 'OEM Summit', target: '_blank' },
      { href: '/expert-columns', label: 'Expert Columns' },
      { href: '/premium-content', label: 'Premium Content' },
      { href: '/videos', label: 'Videos' },
      { href: 'https://www.oemoffhighwaymediakit.com/', label: 'Advertise', target: '_blank' },
      { href: '/contact-us', label: 'Contact Us' },
    ],
  },
  tertiary: {
    items: tertiaryItems,
  },
  contexts: [
    {
      when: ['/engines'],
      secondary: { items: secondaryItems },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/engines/cooling', label: 'Cooling' },
          { href: '/engines/engines', label: 'Engines' },
          { href: '/engines/filtration', label: 'Filtration' },
          { href: '/engines/fuels-fluids', label: 'Fuels & Fluids' },
        ],
      },
    },
    {
      when: ['/drivetrains'],
      secondary: { items: secondaryItems },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/drivetrains/axles-driveshafts', label: 'Axles & Driveshafts' },
          { href: '/drivetrains/brake-system', label: 'Brake System' },
          { href: '/drivetrains/clutch-transmission', label: 'Clutch & Transmission' },
          { href: '/drivetrains/hardware', label: 'Hardware' },
          { href: '/drivetrains/steering-control', label: 'Steering Control' },
          { href: '/drivetrains/tracks-tires', label: 'Tracks & Tires' },
        ],
      },
    },
    {
      when: ['/fluid-power'],
      secondary: { items: secondaryItems },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/fluid-power/actuators', label: 'Actuators' },
          { href: '/fluid-power/fluid-system', label: 'Fluid System' },
          { href: '/fluid-power/pumps-motors', label: 'Pumps & Motors' },
          { href: '/fluid-power/valves-manifolds', label: 'Valves & Manifolds' },
        ],
      },
    },
    {
      when: ['/electronics'],
      secondary: { items: secondaryItems },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/electronics/actuators', label: 'Actuators' },
          { href: '/electronics/connectors', label: 'Connectors' },
          { href: '/electronics/lighting', label: 'Lighting' },
          { href: '/electronics/power-systems', label: 'Power Systems' },
          { href: '/electronics/safety', label: 'Safety' },
          { href: '/electronics/sensors', label: 'Sensors' },
          { href: '/electronics/smart-systems', label: 'Smart Systems' },
          { href: '/electronics/wiring', label: 'Wiring' },
        ],
      },
    },
    {
      when: ['/operator-cab'],
      secondary: { items: secondaryItems },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/operator-cab/cab-system', label: 'Cab System' },
          { href: '/operator-cab/camera-systems', label: 'Camera Systems' },
          { href: '/operator-cab/operator-comfort', label: 'Operator Comfort' },
          { href: '/operator-cab/operator-interface', label: 'Operator Interface' },
        ],
      },
    },
    {
      when: ['/engineering-manufacturing'],
      secondary: { items: secondaryItems },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/engineering-manufacturing/adhesives', label: 'Adhesives' },
          { href: '/engineering-manufacturing/apps', label: 'Apps' },
          { href: '/engineering-manufacturing/greases', label: 'Greases' },
          { href: '/engineering-manufacturing/manufacturing', label: 'Manufacturing' },
          { href: '/engineering-manufacturing/materials', label: 'Materials' },
          { href: '/engineering-manufacturing/services', label: 'Services' },
          { href: '/engineering-manufacturing/software', label: 'Software' },
          { href: '/engineering-manufacturing/testing', label: 'Testing' },
          { href: '/engineering-manufacturing/vehicle-body-structure', label: 'Vehicle Body & Structure' },
        ],
      },
    },
    {
      when: ['/market-analysis'],
      secondary: { items: secondaryItems },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/market-analysis/equipment-market-outlook', label: 'Equipment Market Outlook' },
          { href: '/market-analysis/industry-news', label: 'Industry News' },
          { href: '/market-analysis/trends', label: 'Trends' },
        ],
      },
    },
  ],
  footer: {
    items: [
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://www.oemoffhighwaymediakit.com/', label: 'Advertise', target: '_blank' },
      { href: '/page/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: '/page/terms-conditions', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: [
        { href: '/engines', label: 'Engines' },
        { href: '/drivetrains', label: 'Drivetrains' },
        { href: '/fluid-power', label: 'Fluid Power' },
        { href: '/electronics', label: 'Electronics' },
        { href: '/operator-cab', label: 'Operator Cab' },
        { href: '/engineering-manufacturing', label: 'Engineering & Manufacturing' },
        { href: '/market-analysis', label: 'Market Analysis' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { href: '/magazine', label: 'Magazine' },
        { href: '/podcasts', label: 'Podcast' },
        { href: '/webinars', label: 'Webinars' },
        { href: 'https://www.oemsummit.com/', label: 'OEM Industry Summit', target: '_blank' },
        { href: '/expert-columns', label: 'Expert Columns' },
        { href: '/premium-content', label: 'Premium Content' },
        { href: '/specguide', label: 'Engine Spec Guide' },
        { href: '/awards', label: 'Awards' },
        { href: '/videos', label: 'Videos' },
        { href: '/events', label: 'Event Calendar' },
        { href: '/directory', label: 'Component Directory' },
        { href: '/media-center/whitepapers-ebooks', label: 'White Papers & E-Books' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: '/page/sitemap', label: 'Site Section Map' },
        { href: 'https://acbusiness.dragonforms.com/loading.do?omedasite=OOHprefs&pk=managepref', label: 'Newsletters', target: '_blank' },
        { href: 'https://www.oemoffhighwaymediakit.com/', label: 'Advertise', target: '_blank' },
        { href: '/magazine', label: 'Current Issue' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: '/page/terms-conditions', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
  ],
};
