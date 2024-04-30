export default ({ products, specsToAppend }) => {
  if (!products || !specsToAppend) return products;

  const prductsWithSpecs = products.map((product) => {
    const { id } = product;
    // eslint-disable-next-line no-underscore-dangle
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
