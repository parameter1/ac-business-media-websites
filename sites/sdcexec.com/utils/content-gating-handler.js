const olyticsCookie = require('@parameter1/base-cms-marko-web-omeda/olytics/customer-cookie');

module.exports = ({ content, req }) => {
  const incomingEncId = olyticsCookie.clean(req.query.oly_enc_id);

  if (incomingEncId) return false;

  // Do not gate if gating surveyId is set
  if (content.gating && content.gating.surveyId) return false;

  // Gate the following content types only.
  const typesToGate = [
    'article',
    'blog',
    'document',
    'whitepaper',
  ];
  if (typesToGate.includes(content.type)) return true;

  return false;
};
