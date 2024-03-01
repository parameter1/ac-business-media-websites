module.exports = (path) => (
  path
    .split('/')
    .filter(Boolean) // Drop empty strings caused by the splitting
    .reduce(
      (aliases, alias) => {
        const previous = aliases[aliases.length - 1] || '';
        const aliasToSet = (previous) ? `${previous}/${alias}` : `${alias}`;
        aliases.push(aliasToSet);
        return aliases;
      },
      [],
    ).reverse()
);
