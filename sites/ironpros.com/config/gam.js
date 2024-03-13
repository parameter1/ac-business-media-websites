const configureGAM = require('@ac-business-media/package-global/config/gam');

const basePath = 'forconstructionpros';

const config = configureGAM({ basePath });

config.enable = false;

config.setAliasAdUnits('default', [
  { name: 'top-leaderboard', templateName: 'LEADERBOARD', path: '/default/lb1' },
  { name: 'middle-leaderboard', templateName: 'LEADERBOARD', path: '/default/lb1' },
  { name: 'lb-sticky-bottom', templateName: 'LB-STICKY-BOTTOM', path: '/default/lb1' },
  { name: 'rotation', templateName: 'ROTATION', path: '/default/rail1' },
  { name: 'rotation-rail', templateName: 'ROTATION-RAIL', path: '/default/rail1' },
  { name: 'top-rotation', templateName: 'TOP-ROTATION', path: '/default/rail1' },
  { name: 'top-rotation-mobile', templateName: 'TOP-ROTATION-MOBILE', path: '/default/rail1' },
  { name: 'top-rotation-desktop', templateName: 'TOP-ROTATION-DESKTOP', path: '/default/rail1' },
  { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: '/default/rail1' },
  { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: '/default/rail1' },
  { name: 'reskin', path: '/default/reskin' },
]);

const aliases = [
  // { alias: 'equipment', prefix: 'equipment' },
];

aliases.forEach(({ alias, prefix = alias }) => config.setAliasAdUnits(alias, [
  { name: 'top-leaderboard', templateName: 'LEADERBOARD', path: `${basePath}/${prefix}/lb1` },
  { name: 'leaderboard', templateName: 'LEADERBOARD', path: `${basePath}/${prefix}/lb1` },
  { name: 'footer-leaderboard', templateName: 'FOOTER-LEADERBOARD', path: `${basePath}/${prefix}/lb1` },
  { name: 'rotation', templateName: 'ROTATION', path: `${basePath}/${prefix}/rail1` },
  { name: 'rotation-rail', templateName: 'ROTATION-RAIL', path: `${basePath}/${prefix}/rail1` },
  { name: 'top-rotation', templateName: 'TOP-ROTATION', path: `${basePath}/${prefix}/rail1` },
  { name: 'top-rotation-mobile', templateName: 'TOP-ROTATION-MOBILE', path: `${basePath}/${prefix}/rail1` },
  { name: 'top-rotation-desktop', templateName: 'TOP-ROTATION-DESKTOP', path: `${basePath}/${prefix}/rail1` },
  { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: `${basePath}/${prefix}/rail1` },
  { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: `${basePath}/${prefix}/rail1` },
  { name: 'reskin', path: `${basePath}/${prefix}/reskin` },
]));

module.exports = config;
