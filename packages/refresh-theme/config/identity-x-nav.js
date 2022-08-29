const { isArray } = Array;

module.exports = ({ site }) => {
  const idxConfig = site.get('identityX');

  const enabled = site.get('idxNavItems.enable');
  if (!enabled) return;
  const defaultTargets = [
    'navigation.menu.2.items',
    'navigation.contexts.0.tertiary.items',
  ];
  const targets = site.getAsArray('idxNavItems.navigationTargets').length ? site.getAsArray('idxNavItems.navigationTargets') : defaultTargets;
  const navConfig = [
    {
      href: idxConfig.getEndpointFor('login'),
      label: 'Sign In',
      icon: 'person',
      when: 'logged-out',
      modifiers: ['user'],
    },
    {
      href: idxConfig.getEndpointFor('profile'),
      label: 'Manage Account',
      icon: 'person',
      when: 'logged-in',
      modifiers: ['user'],
    },
    {
      href: idxConfig.getEndpointFor('logout'),
      label: 'Sign Out',
      when: 'logged-in',
      modifiers: ['user'],
    },
  ];
  targets.forEach((target) => {
    const nav = site.get(target);
    if (isArray(nav)) nav.unshift(...navConfig);
  });
};
