const redirectCompany = require('./redirectCompany');

module.exports = domain => ({ from }) => {
  if (redirectCompany.find(pair => pair.from === from)) {
    return { to: redirectCompany.find(pair => pair.from === from).to };
  }
  const pattern = /^\/content\/cu\/display\/company\/([a-z0-9-/]+)/;
  const matches = pattern.exec(from);
  if (!matches || !matches[1]) return null;
  return { to: `https://${domain}/portal/${matches[1]}` };
};
