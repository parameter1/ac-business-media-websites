const contactRedirects = require('./contact-redirects');
const companyRedirects = require('./company-redirects');

const getContactRedirect = ({ from }) => {
  const found = contactRedirects.find((pair) => (new RegExp(`${pair.from}`)).test(from));
  if (found) return found;
  return null;
};

const getCompanyRedirect = ({ from, redirectList = companyRedirects }) => {
  const found = redirectList.find((pair) => (new RegExp(`${pair.from}`)).test(from));
  if (found) return found;
  return null;
};

module.exports = ({ from }) => {
  if (getContactRedirect({ from })) return getContactRedirect({ from });
  if (getCompanyRedirect({ from })) return getCompanyRedirect({ from });
  return null;
};
