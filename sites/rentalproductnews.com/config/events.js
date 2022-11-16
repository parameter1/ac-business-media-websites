const { NODE_ENV } = process.env;

module.exports = {
  enabled: true,
  cookieDomain: NODE_ENV === 'production' ? 'forconstructionpros.com' : '',
};
