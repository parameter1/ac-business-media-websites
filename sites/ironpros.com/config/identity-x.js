const configureIdentityX = require('@ac-business-media/package-global/config/identity-x');
const formDefault = require('@ac-business-media/package-global/config/identity-x/default');

formDefault.anonymousCta = 'Register on IRONPROS.com to download this document, gain access to premium content, and more.';

// append custom demos row of questions to the end of general questions
formDefault.fieldRows.push(
  [
    // Demo: IP Business
    {
      label: 'Business',
      id: '665f2a6a08a6794e28b8f0b7',
      type: 'custom-select',
      required: true,
      width: 0.5,
    },
    // Demo: IP Job Title
    {
      label: 'Primary Business',
      id: '665f2c75afc3b38193c926c0',
      type: 'custom-select',
      required: true,
      width: 0.5,
    },
  ],
);

module.exports = configureIdentityX({
  requiredClientFields: [
    'givenName',
    'familyName',
    'organization',
    'regionCode', // Only require client-side for non-us/ca
    'countryCode',
    'postalCode', // Only require client-side for non-us/ca
    '665f2a6a08a6794e28b8f0b7', // Business
    '665f2c75afc3b38193c926c0', // Job Title
  ],
  appId: '661564bda370d83993649ffc',
  activeCustomFieldIds: [
    '665f2a6a08a6794e28b8f0b7', // Business
    '665f2c75afc3b38193c926c0', // Job Title
  ],
  forms: {
    default: formDefault,
  },
  gtmUserFields: {
    primary_business: '665f2a6a08a6794e28b8f0b7',
    job_title: '665f2c75afc3b38193c926c0',
  },
});
