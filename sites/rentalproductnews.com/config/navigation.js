const channels = [
  { href: '/rental/construction', label: 'Construction' },
  { href: '/rental/general-tool', label: 'General Tool' },
  { href: '/rental/lifting-equipment', label: 'Lifting Equipment' },
  { href: '/rental/power', label: 'Power' },
  { href: '/rental/rental-business', label: 'Rental Business' },
];

const resources = [
  { href: 'https://rentalmagazine.dragonforms.com/loading.do?omedasite=RPNnew&pk=RENTAL', label: 'Magazine', target: '_blank' },
  { href: 'https://acbusiness.dragonforms.com/loading.do?omedasite=RENTALprefs&pk=managepref', label: 'Newsletter', target: '_blank' },
  { href: 'https://www.constructionnetworkmediakit.com/', label: 'Advertise', target: '_blank' },
];

const tertiaryItems = [
  {
    href: '/search',
    label: 'Search',
    icon: 'search',
    forceLabel: true,
  },
];

module.exports = {
  secondary: { items: channels },
  primary: { items: resources },
  tertiary: { items: tertiaryItems },

  footer: {
    items: [
      { href: 'https://www.forconstructionpros.com/contact-us', label: 'Contact Us' },
      { href: 'https://www.constructionnetworkmediakit.com/', label: 'Advertise', target: '_blank' },
      { href: 'https://www.forconstructionpros.com/page/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: 'https://www.forconstructionpros.com/page/terms-conditions', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: [
        { href: '/rental/construction', label: 'Construction' },
        { href: '/rental/general-tool', label: 'General Tool' },
        { href: '/rental/lifting-equipment', label: 'Lifting Equipment' },
        { href: '/rental/power', label: 'Power' },
        { href: '/rental/rental-business', label: 'Rental Business' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { href: 'https://rentalmagazine.dragonforms.com/loading.do?omedasite=RPNnew&pk=RENTAL', label: 'Magazine', target: '_blank' },
        { href: 'https://acbusiness.dragonforms.com/loading.do?omedasite=RENTALprefs&pk=managepref', label: 'Newsletter', target: '_blank' },
        { href: 'https://www.constructionnetworkmediakit.com/', label: 'Advertise', target: '_blank' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: 'https://www.forconstructionpros.com/contact-us', label: 'Contact Us' },
        { href: 'https://www.constructionnetworkmediakit.com/', label: 'Advertise', target: '_blank' },
        { href: 'https://www.forconstructionpros.com/page/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: 'https://www.forconstructionpros.com/page/terms-conditions', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
  ],
};
