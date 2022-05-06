const redirectIds = require('./redirect-ids.json');

const feeds = ({ from }) => {
  const feedPattern = /^\/feeds\/([a-z0-9-/]+)/;
  const matches = feedPattern.exec(from);
  if (!matches || !matches[1]) return null;
  const alias = matches[1].replace(/^\/+/g, '').replace(/\/+$/g, '');
  if (!alias) return null;
  const to = `/__rss/website-scheduled-content.xml?input=%7B%22sectionAlias%22%3A%22${encodeURIComponent(alias)}%22%7D `;
  return { to };
};

const ids = ({ from }) => {
  const match = Object.keys(redirectIds).find(id => new RegExp(id).test(from));
  return match && { to: redirectIds[match] };
};

module.exports = ({ from }) => [
  feeds,
  ids,
].reduce((v, handler) => v || handler({ from }), null);
