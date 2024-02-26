const configureNativeX = require('@ac-business-media/package-global/config/native-x');

const config = configureNativeX();

config.enabled = true;

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5b55e1352360050001b77341' },
    // @todo setup additional native X position
    { name: 'premium-content', id: '5b55e1352360050001b77341' },
  ])
  .setAliasPlacements('asphalt', [
    { name: 'default', id: '5b55e26b2360050001b7734a' },
    // @todo setup additional native X position
    { name: 'premium-content', id: '5b55e26b2360050001b7734a' },
  ])
  .setAliasPlacements('business', [
    { name: 'default', id: '5b55e2f6dfcd9c00010676ba' },
    // @todo setup additional native X position
    { name: 'premium-content', id: '5b55e2f6dfcd9c00010676ba' },
  ])
  .setAliasPlacements('concrete', [
    { name: 'default', id: '5b55e239dfcd9c00010676b4' },
    // @todo setup additional native X position
    { name: 'premium-content', id: '5b55e239dfcd9c00010676b4' },
  ])
  .setAliasPlacements('equipment', [
    { name: 'default', id: '5b55e16cdfcd9c00010676ae' },
    // @todo setup additional native X position
    { name: 'premium-content', id: '5b55e16cdfcd9c00010676ae' },
  ])
  .setAliasPlacements('equipment-management', [
    { name: 'default', id: '5b55e2d42360050001b7734f' },
    // @todo setup additional native X position
    { name: 'premium-content', id: '5b55e2d42360050001b7734f' },
  ])
  .setAliasPlacements('pavement-maintenance', [
    { name: 'default', id: '5b55e253dfcd9c00010676b5' },
    // @todo setup additional native X position
    { name: 'premium-content', id: '5b55e253dfcd9c00010676b5' },
  ])
  .setAliasPlacements('profit-matters', [
    { name: 'default', id: '5b55e2b5dfcd9c00010676b8' },
    // @todo setup additional native X position
    { name: 'premium-content', id: '5b55e2b5dfcd9c00010676b8' },
  ])
  .setAliasPlacements('rental', [
    { name: 'default', id: '5b55e29d2360050001b7734c' },
    // @todo setup additional native X position
    { name: 'premium-content', id: '5b55e29d2360050001b7734c' },
  ])
  .setAliasPlacements('construction-technology', [
    { name: 'default', id: '5b55e3162360050001b77351' },
    // @todo setup additional native X position
    { name: 'premium-content', id: '5b55e3162360050001b77351' },
  ])
  .setAliasPlacements('trucks', [
    { name: 'default', id: '5b55e1a52360050001b77343' },
    // @todo setup additional native X position
    { name: 'premium-content', id: '5b55e1a52360050001b77343' },
  ])
  .setAliasPlacements('ironpros', [
    { name: 'default', id: '63863e54fc370c00019b2027' },
    // @todo setup additional native X position
    { name: 'premium-content', id: '63863e54fc370c00019b2027' },
  ]);

module.exports = config;
