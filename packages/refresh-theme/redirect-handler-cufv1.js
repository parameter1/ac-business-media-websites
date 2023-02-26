module.exports = (domain) => ({ from }) => {
  const pattern = /^\/content\/cu\/display\/company\/([a-z0-9-/]+)/;
  const matches = pattern.exec(from);
  if (!matches || !matches[1]) return null;
  return { to: `https://${domain}/portal/${matches[1]}` };
};
