const configureGAM = require('@ac-business-media/package-global/config/gam');

const basePath = 'forconstructionpros';

const config = configureGAM({ basePath });

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
  { alias: 'directory', prefix: 'directory-home-page' },
  { alias: 'directory/aeration-drying-storage', prefix: 'aeration-drying-storage' },
  { alias: 'directory/conveying-material-handling', prefix: 'conveying-material-handling' },
  { alias: 'directory/dust-control-explosion-prevention', prefix: 'dust-control-explosion-prevention' },
  { alias: 'directory/engineering-design-construction-services', prefix: 'engineering-design-construction-svs' },
  { alias: 'directory/feed-ingredients-additives', prefix: 'feed-ingredients-additives' },
  { alias: 'directory/feed-milling-grinding', prefix: 'feed-milling-grinding' },
  { alias: 'directory/feed-mixing-batching', prefix: 'feed-mixing-batching' },
  { alias: 'directory/grain-cleaning-testing-analysis', prefix: 'grain-cleaning-testing-analysis' },
  { alias: 'directory/maintenance', prefix: 'maintenance' },
  { alias: 'directory/millwrights', prefix: 'millwrights' },
  { alias: 'directory/operations-management-consulting-financial-services', prefix: 'operations-mgt-consulting-financia-svs' },
  { alias: 'directory/safety-rescue', prefix: 'safety' },
  { alias: 'directory/transportation', prefix: 'transportation' },
  { alias: 'directory/weighing-bagging', prefix: 'weighing-bagging-equipment' },
];

aliases.forEach(({ alias, prefix = alias }) => config.setAliasAdUnits(alias, [
  { name: 'top-leaderboard', templateName: 'LEADERBOARD', path: `/${prefix}/lb1` },
  { name: 'leaderboard', templateName: 'LEADERBOARD', path: `/${prefix}/lb1` },
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
