const DragonFormsConfig = require('@ac-business-media/refresh-theme/dragon-forms/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://acbusiness.dragonforms.com' });

config
  .addForm('newsletterSignup', { omedasite: 'FCP_prefs_ProgReg' });

module.exports = config;
