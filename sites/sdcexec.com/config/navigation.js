const topics = [
  { href: '/warehousing', label: 'Warehousing' },
  { href: '/transportation', label: 'Transportation' },
  { href: '/software-technology', label: 'Software & Tech' },
  { href: '/safety-security', label: 'Safety' },
  { href: '/sustainability', label: 'Sustainability' },
  { href: '/sourcing-procurement', label: 'Procurement' },
  { href: '/professional-development', label: 'Prof Development' },
  { href: 'https://www.scnsummit.com/', label: 'SCN Summit', target: '_blank' },
];

const resources = [
  { href: '/magazine', label: 'Magazine' },
  { href: '/awards', label: 'Awards' },
  { href: '/events', label: 'Events' },
  { href: '/blogs', label: 'Expert Columns' },
  { href: '/webinars', label: 'Webinars' },
  { href: '/podcast', label: 'Podcasts' },
  { href: '/premium-content', label: 'Premium Content' },
  { href: 'http://www.supplychainnetworkmediakit.com/', label: 'Advertise', target: '_blank' },
  { href: '/contact-us', label: 'Contact Us' },

];

const tertiaryItems = [
  {
    href: 'https://acbusiness.dragonforms.com/loading.do?omedasite=SDCEprefs&pk=managepref',
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
    items: resources,
  },
  secondary: {
    items: topics,
  },
  tertiary: {
    items: tertiaryItems,
  },

  contexts: [
    {
      when: ['/warehousing'],
      secondary: { items: topics },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/warehousing/material-handling-equipment', label: 'Material Handling Equipment' },
          { href: '/warehousing/micro-fulfillment', label: 'Micro-Fulfillment' },
          { href: '/warehousing/automation', label: 'Automation' },
          { href: '/warehousing/design-build', label: 'Design-Build' },
          { href: '/warehousing/cold-storage', label: 'Cold Storage' },
          { href: '/warehousing/robotics', label: 'Robotics' },
          { href: '/warehousing/ai-ar', label: 'AI/AR' },
          { href: '/warehousing/retail', label: 'Retail' },
          { href: '/warehousing/packaging', label: 'Packaging' },
        ],
      },
    },
    {
      when: ['/transportation'],
      secondary: { items: topics },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/transportation/3pl-4pl', label: '3PL/4PL' },
          { href: '/transportation/cold-chain', label: 'Cold Chain' },
          { href: '/transportation/last-mile', label: 'Last-Mile' },
          { href: '/transportation/wms-tms', label: 'WMS/TMS' },
          { href: '/transportation/fleet-management', label: 'Fleet Management' },
          { href: '/transportation/automation', label: 'Automation' },
          { href: '/transportation/rail-intermodal', label: 'Rail & Intermodal' },
          { href: '/transportation/air-cargo', label: 'Air Cargo' },
          { href: '/transportation/trucking', label: 'Trucking' },
          { href: '/transportation/ocean-ports-carriers', label: 'Ocean Ports & Carriers' },
        ],
      },
    },
    {
      when: ['/software-technology'],
      secondary: { items: topics },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/software-technology/software-solutions', label: 'Software Solutions' },
          { href: '/software-technology/robotics', label: 'Robotics' },
          { href: '/software-technology/automation', label: 'Automation' },
          { href: '/software-technology/wms-tms', label: 'WMS/TMS' },
          { href: '/software-technology/ai-ar', label: 'AI/AR' },
          { href: '/software-technology/e-commerce-solutions', label: 'E-Commerce Solutions' },
          { href: '/software-technology/emerging-technologies', label: 'Emerging Technologies' },
          { href: '/software-technology/supply-chain-visibility', label: 'Supply Chain Visibility' },
        ],
      },
    },
    {
      when: ['/safety-security'],
      secondary: { items: topics },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/safety-security/regulations', label: 'Regulations' },
          { href: '/safety-security/sanitization', label: 'Sanitization' },
          { href: '/safety-security/pest-management', label: 'Pest Management' },
          { href: '/safety-security/worker-safety', label: 'Worker Safety' },
          { href: '/safety-security/plant-safety', label: 'Plant Safety' },
          { href: '/safety-security/risk-compliance', label: 'Risk/Compliance' },
        ],
      },
    },
    {
      when: ['/sustainability'],
      secondary: { items: topics },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/sustainability/packaging', label: 'Packaging' },
          { href: '/sustainability/waste-reduction', label: 'Waste Reduction' },
          { href: '/sustainability/clean-energy', label: 'Clean Energy' },
          { href: '/sustainability/carbon-footprint', label: 'Carbon Footprint' },

        ],
      },
    },
    {
      when: ['/sourcing-procurement'],
      secondary: { items: topics },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/sourcing-procurement/visibility-software', label: 'Visibility Software' },
          { href: '/sourcing-procurement/procurement-software', label: 'Procurement Software' },
          { href: '/sourcing-procurement/project-management-software', label: 'Project Management Software' },
          { href: '/sourcing-procurement/financial-management-software', label: 'Financial Management Software' },
          { href: '/sourcing-procurement/erp', label: 'ERP' },
          { href: '/sourcing-procurement/manufacturing', label: 'Manufacturing' },
          { href: '/sourcing-procurement/sourcing-solutions', label: 'Sourcing Solutions' },

        ],
      },
    },
    {
      when: ['/professional-development'],
      secondary: { items: topics },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/professional-development/hiring', label: 'Hiring' },
          { href: '/professional-development/training', label: 'Training/Onboarding' },
          { href: '/professional-development/retention', label: 'Retention' },
          { href: '/professional-development/mentorship-programs', label: 'Mentorship Programs' },
          { href: '/professional-development/supply-chain-education', label: 'Supply Chain Education' },
          { href: 'https://www.supplychainlearningcenter.com/', label: 'Supply Chain Learning Center' },
        ],
      },
    },
    {
      when: ['/awards'],
      secondary: { items: resources },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/awards/women-in-supply-chain', label: 'Women In Supply Chain' },
          { href: '/awards/pros-to-know', label: 'Pros To Know' },
          { href: '/awards/top-supply-chain-projects', label: 'Top Supply Chain Projects' },
          { href: '/awards/green-supply-chain', label: 'Green Supply Chain' },
          { href: '/awards/top-tech-startups', label: 'Top Tech Startups' },
        ],
      },
    },
    {
      when: ['/podcasts'],
      secondary: { items: resources },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/podcasts/link', label: 'L.I.N.K' },
          { href: '/videos/link-live', label: 'L.I.N.K LIVE' },
          { href: '/podcasts/link-educate', label: 'L.I.N.K Educate' },
        ],
      },
    },
    {
      when: ['/multimedia'],
      secondary: { items: resources },
      tertiary: { items: tertiaryItems },
      primary: {
        items: [
          { href: '/podcasts/link', label: 'L.I.N.K' },
          { href: '/videos/link-live', label: 'L.I.N.K LIVE' },
          { href: '/podcasts/link-educate', label: 'L.I.N.K Educate' },
          { href: '/videos', label: 'Videos' },
          { href: '/videos/transportation-chain', label: 'Transportation Chain' },
          { href: '/awards', label: 'Awards' },
        ],
      },
    },

  ],

  footer: {
    items: [
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'http://www.supplychainnetworkmediakit.com/', label: 'Advertise', target: '_blank' },
      { href: '/page/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: '/page/terms-conditions', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: topics,
    },
    {
      label: 'Resources',
      items: [
        { href: '/magazine', label: 'Magazines' },
        { href: '/awards', label: 'Awards' },
        { href: '/case-studies', label: 'Case Studies' },
        { href: '/modex', label: 'MODEX' },
        { href: '/events', label: 'Events' },
        { href: '/webinars', label: 'Webinars' },
        { href: 'http://www.supplychainlearningcenter.com/', label: 'Supply Chain Learning Center', target: '_blank' },
        { href: '/podcasts', label: 'Podcasts' },
        { href: '/premium-content', label: 'Premium Content' },
        { href: '/videos', label: 'Videos' },
        { href: '/blogs', label: 'Expert Columnists' },
        { href: '/multimedia', label: 'Multimedia' },
        { href: '/scn-summit', label: 'SCN Summit' },
        { href: '/20-year-anniversary', label: '20 Year Anniversary Coverage' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: 'https://acbusiness.dragonforms.com/loading.do?omedasite=SDCEprefs&pk=managepref', label: 'Newsletters', target: '_blank' },
        { href: 'http://www.supplychainnetworkmediakit.com/', label: 'Advertise', target: '_blank' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: '/page/terms-conditions', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
  ],
};
