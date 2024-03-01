const personasTest = require('../templates/static-page/personas-test');
const exportsPage = require('../templates/static-page/exports');
const printDirectoryExportsPage = require('../templates/static-page/print-directories');

const checkAccessLevels = async ({ req, res, template }) => {
  const { identityX } = req;
  const { site } = res.app.locals;
  const { canAccess } = await identityX.checkContentAccess({
    isEnabled: Boolean(req.identityX),
    requiredAccessLevelIds: site.get('exports.allowedAccessLevels'),
  });
  if (canAccess) {
    res.marko(template);
  } else {
    res.redirect(302, '/user/login');
  }
};

module.exports = (app) => {
  app.get('/__personas-test', (_, res) => { res.marko(personasTest); });
  app.get('/__exports', async (req, res) => {
    checkAccessLevels({
      req,
      res,
      template: exportsPage,
    });
  });
  app.get('/__exports/print-directories', (req, res) => {
    checkAccessLevels({
      req,
      res,
      template: printDirectoryExportsPage,
    });
  });
};
