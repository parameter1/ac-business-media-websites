
module.exports = (content) => {
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
