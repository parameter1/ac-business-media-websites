const equipment = require('./page-details/equipment');
const skidSteersLoaders = require('./page-details/skid-steer-loaders');
const technology = require('./page-details/technology');
const workwear = require('./page-details/workwear');

module.exports = {
  recommended: {
    title: 'Recommended Content',
    tocHeader: 'Select a Persona:',
  },
  // @todo confirm wistia still is valid and needs to be here.
  equipment,
  technology,
  workwear,
  'product-categories/earthmoving/skid-steer-loaders': skidSteersLoaders,
};
