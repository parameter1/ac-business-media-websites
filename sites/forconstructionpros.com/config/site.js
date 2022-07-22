const specGuides = require('./spec-guides');
const dragonForms = require('./dragon-forms');
const events = require('./events');
const gam = require('./gam');
const identityX = require('./identity-x');
const nativeX = require('./native-x');
const navigation = require('./navigation');
const omeda = require('./omeda');

module.exports = {
  // module configs
  specGuides,
  dragonForms,
  events,
  gam,
  identityX,
  nativeX,
  navigation,
  omeda,

  // theme configs
  company: 'AC Business Media, LLC',
  showCompanySectionFilters: true,
  p1events: {
    tenant: 'acbm',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'forconstructionpros.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/site_logo.png?h=45&auto=format,compress',
      srcset: [
        'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/site_logo.png?h=90&auto=format,compress 2x',
      ],
    },
    footer: {
      src: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/site_logo.png?h=45&auto=format,compress',
      srcset: [
        'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/site_logo.png?h=90&auto=format,compress 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/ForConstructionPros', target: '_blank' },
    { provider: 'twitter', href: 'https://www.twitter.com/4ConstructnPros', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/4constructionpros/', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/forconstructionpros', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/user/ForConstructionPros', target: '_blank' },
    { provider: 'flipboard', href: 'https://flipboard.com/@FCPnews', target: '_blank' },
  ],
  socialMediaLinksByChannel: {
    asphalt: {
      title: 'Follow Asphalt',
      providers: [
        { provider: 'facebook', href: 'https://www.facebook.com/Asphalt.Contractor', target: '_blank' },
        { provider: 'twitter', href: 'https://twitter.com/AsphaltContrctr', target: '_blank' },
        { provider: 'instagram', href: 'https://www.instagram.com/asphaltcontractor', target: '_blank' },
        { provider: 'linkedin', href: 'https://www.linkedin.com/company/asphalt-contractor-magazine', target: '_blank' },
      ],
    },
    concrete: {
      title: 'Follow Concrete',
      providers: [
        { provider: 'facebook', href: 'https://www.facebook.com/concretecontractor', target: '_blank' },
        { provider: 'twitter', href: 'https://twitter.com/concreteinsider', target: '_blank' },
        { provider: 'instagram', href: 'https://instagram.com/concretecontractor', target: '_blank' },
        { provider: 'linkedin', href: 'https://www.linkedin.com/company/concrete-contractor-magazine', target: '_blank' },
      ],
    },
    equipment: {
      title: 'Follow Equipment',
      providers: [
        { provider: 'facebook', href: 'https://www.facebook.com/EquipmentToday', target: '_blank' },
        { provider: 'twitter', href: 'https://twitter.com/EquipmentToday', target: '_blank' },
        { provider: 'instagram', href: 'https://www.instagram.com/equipmenttoday', target: '_blank' },
        { provider: 'linkedin', href: 'https://www.linkedin.com/company/equipment-today-magazine-official', target: '_blank' },
      ],
    },
    'pavement-maintenance': {
      title: 'Follow Pavement',
      providers: [
        { provider: 'facebook', href: 'https://www.facebook.com/PavementMagazine', target: '_blank' },
        { provider: 'twitter', href: 'https://twitter.com/PavementMag', target: '_blank' },
        { provider: 'instagram', href: 'https://www.instagram.com/pavementmagazine', target: '_blank' },
        { provider: 'linkedin', href: 'https://www.linkedin.com/company/pavement-maintenance-reconstruction-magazine', target: '_blank' },
      ],
    },
    rental: {
      title: 'Follow Rental',
      providers: [
        { provider: 'facebook', href: 'https://www.facebook.com/RentalMagazine', target: '_blank' },
        { provider: 'twitter', href: 'https://twitter.com/RentalPNI', target: '_blank' },
        { provider: 'instagram', href: 'https://www.instagram.com/rentalpni', target: '_blank' },
        { provider: 'linkedin', href: 'https://www.linkedin.com/company/rental-magazine', target: '_blank' },
      ],
    },
  },
  radix: {
    enabled: true,
    url: 'https://radix.base.parameter1.com',
    appId: '4448cfcb-e2da-40ff-8be6-671110964914',
    submissionFieldIds: [
      { name: 'comments', id: '580f6d056cdeea4730ddbb2c' },
    ],
  },
  gtm: {
    containerId: 'GTM-PNBSZL4',
  },
  mediaFuse: {
    id: 6060,
  },
  gcse: {
    id: '003355913687346718228:la4zrhjf2r9',
  },
  wufoo: {
    userName: 'acbm',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    notificationDefaults: {
      branding: {
        bgColor: '#000',
        logo: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/site_logo.png?h=45&auto=format,compress',
      },
      to: 'support@forconstructionpros.com',
      from: 'For Construction Pros <noreply@forconstructionpros.com>',
    },
    branding: {
      bgColor: '#000',
      logo: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/site_logo.png?h=45&auto=format,compress',
    },
    to: 'support@forconstructionpros.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'requestmoreinfo@acbusinessmedia.com',
    sendFrom: 'ForConstructionPros.com <noreply@parameter1.com>',
    logo: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/site_logo.png?h=45&auto=format,compress&bg=000000&pad=5',
    bgColor: '#000',
  },
  leaders: {
    enabled: true,
    title: 'Leaders in Construction',
    alias: 'leaders/2021',
    calloutValue: 'Leading Companies',
    header: {
      imgSrc: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/fcp-leaders.jpeg?h=85&auto=format,compress',
    },
  },
  sectionSearchIds: [
    54289, // Asphalt
    54300, // Business
    54436, // Concrete
    54319, // Construction Technology
    54330, // Equipment
    54468, // Pavement Maintenance
  ],
  publishedContentMultisite: false,
  useSectionLogos: true,
};
