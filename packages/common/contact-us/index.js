const { asyncRoute } = require('@parameter1/base-cms-utils');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const fetch = require('node-fetch');
const { URLSearchParams } = require('url');
const emailTemplate = require('./email');
const {
  SENDGRID_API_KEY,
  RECAPTCHA_SECRET_KEY,
  SENDGRID_DEV_TO,
  isDevelopment,
} = require('../env');

const { error } = console;

// @todo This entire service should be deleted once contact us is moved to core.

sgMail.setApiKey(SENDGRID_API_KEY);

const exception = (message, code = 400) => {
  const err = new Error(message);
  err.statusCode = code;
  return err;
};

const send = async (res, domain, payload) => {
  const subject = 'A new contact submission was received.';
  const input = {
    $global: res.app.locals,
    domain,
    subject,
    ...payload,
  };
  const html = emailTemplate.renderToString(input);
  const address = res.app.locals.site.get('contactUs.to', 'contact@parameter1.com');

  return sgMail.send({
    from: 'Base CMS <noreply@base-cms.io>',
    to: isDevelopment ? SENDGRID_DEV_TO : address,
    subject,
    html,
  });
};

const validateRecaptcha = async ({ token: response }) => {
  const params = new URLSearchParams();
  params.append('response', response);
  params.append('secret', RECAPTCHA_SECRET_KEY);
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', { method: 'post', body: params });
  const json = await res.json();
  if (!json.success) {
    error('reCAPTCHA failed!', json, { secret: RECAPTCHA_SECRET_KEY, response });
    throw exception('Unable to validate your request');
  }
  return true;
};

const validatePayload = (payload = {}) => ['name', 'phone', 'email', 'comments'].every(k => payload[k]);

module.exports = (app) => {
  app.post('/__contact-us', bodyParser.json(), asyncRoute(async (req, res) => {
    const payload = req.body;

    if (!await validateRecaptcha(payload)) throw exception('Unable to validate recaptcha');
    if (!validatePayload(payload)) throw exception('A required parameter was not sent');

    try {
      await send(res, req.hostname, payload);
      res.status(201).send();
    } catch (e) {
      error(e);
      throw exception(e);
    }
  }));
};
