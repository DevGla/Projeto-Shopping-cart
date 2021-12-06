const fetchItem = async (ItemID) => {
  try {
    const requisicao = await fetch(`https://api.mercadolibre.com/items/${ItemID}`);
    const item = await requisicao.json();
    return item;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
