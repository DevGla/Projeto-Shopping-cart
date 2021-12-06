const fetchProducts = async (item) => {
  try {
    const requisicao = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${item}`);
    const ml = await requisicao.json();
    return ml;
  } catch (error) {
    return error;
  }
};

fetchProducts();

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
