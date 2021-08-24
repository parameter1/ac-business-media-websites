const { cleanEnv, validators, email } = require('@parameter1/base-cms-env');

const { nonemptystr } = validators;

// @todo This should be removed once contact us is moved to core and the mailer service is created.
module.exports = cleanEnv(process.env, {
  RECAPTCHA_SECRET_KEY: nonemptystr({ desc: 'The Recaptcha secret key.' }),
  SPEC_GUIDE_DOCS_API_KEY: nonemptystr({ desc: 'The google doc api secret key.' }),
  SENDGRID_API_KEY: nonemptystr({ desc: 'An API key for sending email via SendGrid.' }),
  SENDGRID_DEV_TO: email({ desc: 'In non-production environments, where emails should be sent.', default: 'contact@parameter1.com' }),
});
