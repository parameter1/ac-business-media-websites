module.exports = ({ content, olyEncId }) => {
  // If there is an associated olyEncId skip as they are considered identitfied.
  if (olyEncId) return false;

  // Do not gate if gating surveyId is set
  if (content.gating && content.gating.surveyId) return false;

  // Gate the following content types only.
  const typesToGate = [
    'article',
    'blog',
    'whitepaper',
  ];
  if (typesToGate.includes(content.type)) return true;

  return false;
};
