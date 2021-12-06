const fetchProducts = async () => {
  try {
    const requisicao = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=$computador');
    const ml = await requisicao.json();
    return ml.results;
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
