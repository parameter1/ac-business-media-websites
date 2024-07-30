module.exports = (req) => {
  const { __web_identity: cookie } = req.cookies;
  if (!cookie) return null;
  try {
    const identity = JSON.parse(cookie);
    if (identity && identity.id) return identity.id;
    return null;
  } catch (e) {
    return null;
  }
};
