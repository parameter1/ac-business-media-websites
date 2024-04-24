module.exports = ({ products, specsToAppend }) => {
  if (!products || !specsToAppend) return products;

  const prductsWithSpecs = products.map((product) => {
    const { id } = product;
    const specObj = specsToAppend.find((spec) => spec._id === id) || {};
    const specs = specObj.specs || {};
    const formatted = {
      ...product,
      specs,
    };
    return formatted;
  });

  return prductsWithSpecs;
};
