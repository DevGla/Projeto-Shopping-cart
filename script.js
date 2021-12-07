const k = document.querySelector('.cart__items');
// cria a imagem, adiciona uma classe.
function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

// cria um elemento, adiciona uma classe, e um texto
function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function cartItemClickListener(event) {
  event.target.remove();
  saveCartItems(k.innerHTML);
}

function clearCart() {
  const btn = document.querySelector('.empty-cart');
  btn.addEventListener('click', () => {
  saveCartItems(k.innerHTML = '');
  });
}
clearCart();
// recebe um objeto, cria um elemento li, adicioan uma classe e um texto com algumas coisas do objeto 
function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

// recebe um objeto, cria uma section e adiciona como filhos dessa section o restultado da função de cima
function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  section.appendChild(button);
  button.addEventListener('click', async () => {
    const j = await fetchItem(sku);    
    k.appendChild(createCartItemElement(j));
    saveCartItems(k.innerHTML);
  });

  return section;
}

// 
/* function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
} */

async function trabalhandoOb() {
  const chamaRq = await fetchProducts('computador');
  chamaRq.results.forEach((element) => {
    const d = document.querySelector('.items');
    d.appendChild(createProductItemElement(element));
  });
}

window.onload = async () => {
  trabalhandoOb();
  k.innerHTML = getSavedCartItems();
  const li = document.querySelectorAll('.cart__item');
  li.forEach((elemento) => elemento.addEventListener('click', cartItemClickListener));
};
