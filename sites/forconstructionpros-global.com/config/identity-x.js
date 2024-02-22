const configureIdentityX = require('@ac-business-media/package-global/config/identity-x');
const formDefault = require('@ac-business-media/package-global/config/identity-x/default');

formDefault.anonymousCta = 'Register on FeedAndGrain.com to download this document, gain access to premium content, and more.';

// append custom demos row of questions to the end of general questions
formDefault.fieldRows.push(
  [
    // Demo: FG: Job Function
    {
      label: 'Job Function',
      id: '6430a9a27694b7652a933308',
      type: 'custom-select',
      required: true,
      width: 0.5,
    },
    // Demo: FG: Primary Business
    {
      label: 'Primary Business',
      id: '643404c587747e1f4434a8c8',
      type: 'custom-select',
      required: true,
      width: 0.5,
    },
  ],
);

module.exports = configureIdentityX({
  appId: '5e28a2d858e67b162e55ae3b',
  requiredClientFields: [
    'givenName',
    'familyName',
    'organization',
    'organizationTitle', // @todo make this a custom field somehow
    'street',
    'city',
    'regionCode', // Only require client-side for non-us/ca
    'countryCode',
    'postalCode', // Only require client-side for non-us/ca
    '643404c587747e1f4434a8c8', // Primary Business
    '6430a9a27694b7652a933308', // Job title
  ],
  appContextId: '644960484a7ef9f2d2814607',
  activeCustomFieldIds: [
    '643404c587747e1f4434a8c8', // Primary Business
    '6430a9a27694b7652a933308', // Job title
    '64f0afeeb0c3f14f2f50db30', // Third Party,
    '644010d8361977fa1fb5dcf6', // Industry Watch ENL
    '644010e3eb03ef8d3b8d1e97', // Product Watch ENL
  ],
  forms: {
    default: formDefault,
  },
  gtmUserFields: {
    primary_business: '643404c587747e1f4434a8c8',
    job_title: '6430a9a27694b7652a933308',
  },
});
