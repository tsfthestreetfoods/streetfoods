const rupee = '\u20b9';
const outletPages = {
  baithak: 'outlet-baithak.html',
  'bhaji-pav': 'outlet-bhaji-pav.html',
  'china-ka-maal': 'outlet-china-ka-maal.html'
};
const baithakStockImages = {
  'chai-sirf': 'images/baithak-items/sirf-chai.jpg',
  'chai-adrak': 'images/baithak-items/adrak-chai.jpg',
  'chai-elaichi': 'images/baithak-items/elaichi-chai.jpg',
  'chai-special': 'images/baithak-items/baithak-special-chai.jpg',
  coffee: 'images/baithak-items/coffee.jfif',
  'coffee-special': 'images/baithak-items/special-coffee.jfif',
  'cold-coffee-small': 'images/baithak-items/cold-coffee-small.jfif',
  'cold-coffee-large': 'images/baithak-items/cold-coffee-large.jfif',
  maggie: 'images/baithak-items/plain-maggie.avif',
  'maggie-masala': 'images/baithak-items/masala-maggie.jfif',
  'maggie-veg': 'images/baithak-items/veg-maggie.jpg',
  'maggie-veg-masala': 'images/baithak-items/veg-masala-maggie.jfif',
  'maggie-cheese': 'images/baithak-items/cheese-maggie.jfif',
  'maggie-veg-cheese': 'images/baithak-items/veg-cheese-maggie.jfif',
  'maggie-schezwan': 'images/baithak-items/schezwan-maggie.png',
  'maggie-veg-schezwan': 'images/baithak-items/veg-schezwan-maggie.avif',
  'maggie-veg-cheese-schezwan': 'images/baithak-items/schezwan-cheese-maggie.jfif',
  'maggie-baithak-special': 'images/baithak-items/baithak-special-maggie.jpg',
  'omelette-single': 'images/baithak-items/omelette.jfif',
  'omelette-veg': 'images/baithak-items/veg-omelette.jpg',
  'omelette-bread': 'images/baithak-items/bread-omelette.jfif',
  'omelette-veg-bread': 'images/baithak-items/veg-bread-omelette.jfif',
  'omelette-cheese': 'images/baithak-items/cheese-omelette.jfif',
  'omelette-veg-cheese': 'images/baithak-items/veg-cheese-omelette.jfif',
  'omelette-veg-cheese-bread': 'images/baithak-items/veg-cheese-bread-omelette.jfif',
  'veg-sandwich': 'images/baithak-items/veg-sandwich.jfif',
  'corn-cheese': 'images/baithak-items/corn-cheese-sandwich.jfif',
  'bun-butter': 'images/baithak-items/bun-butter.jfif',
  'butter-toast': 'images/baithak-items/butter-toast.jfif',
  'bread-butter-jam': 'images/baithak-items/bread-butter-jam.jfif',
  'corn-cheese-sandwich': 'images/baithak-items/corn-cheese-sandwich.jfif',
  'paneer-sandwich': 'images/baithak-items/paneer-sandwich.jfif',
  'chicken-sandwich': 'images/baithak-items/chicken-sandwich.jfif',
  'chicken-keema-pav': 'images/baithak-items/chicken-keema-pav.jfif',
  'cold-coffee-maggie-combo': 'images/baithak-items/cold-coffee-maggie-combo.jfif',
  'cold-coffee-sandwich-combo': 'images/baithak-items/cold-coffee-sandwich-combo.jfif'
};

const params = new URLSearchParams(window.location.search);
const outletKey = params.get('outlet') || 'baithak';
const storageKey = `streetfoods-cart-${outletKey}`;
let cartData = JSON.parse(localStorage.getItem(storageKey) || 'null') || {
  outletKey,
  outletName: 'The Street Foods',
  phone: '',
  items: []
};

if (outletKey === 'baithak') {
  cartData.items = cartData.items.map(item => ({
    ...item,
    image: baithakStockImages[item.id] || item.image
  }));
}

const els = {
  outletName: document.getElementById('cart-outlet-name'),
  continueShopping: document.getElementById('continue-shopping'),
  list: document.getElementById('cart-detail-list'),
  count: document.getElementById('bill-count'),
  total: document.getElementById('bill-total'),
  checkout: document.getElementById('checkout-btn')
};

els.outletName.textContent = `Review items from ${cartData.outletName}.`;
els.continueShopping.href = outletPages[outletKey] || 'index.html';

function saveCart() {
  localStorage.setItem(storageKey, JSON.stringify(cartData));
}

function getTotals() {
  return cartData.items.reduce((acc, item) => {
    acc.count += item.qty;
    acc.total += item.price * item.qty;
    return acc;
  }, { count: 0, total: 0 });
}

function updateQty(id, delta) {
  cartData.items = cartData.items
    .map(item => item.id === id ? { ...item, qty: item.qty + delta } : item)
    .filter(item => item.qty > 0);
  saveCart();
  renderCart();
}

function renderCart() {
  const { count, total } = getTotals();
  els.list.innerHTML = '';
  els.count.textContent = `${count} ${count === 1 ? 'item' : 'items'}`;
  els.total.textContent = `${rupee}${total}`;
  els.checkout.disabled = count === 0;

  if (!count) {
    els.list.innerHTML = '<p class="empty">Your cart is empty.</p>';
    return;
  }

  cartData.items.forEach(item => {
    const row = document.createElement('article');
    row.className = 'cart-detail-row';
    row.innerHTML = `
      <img src="${item.image || 'images/hero.png'}" alt="${item.name}">
      <div class="cart-detail-info">
        <h3>${item.name}</h3>
        <p>${item.desc || cartData.outletName}</p>
        <strong>${rupee}${item.price * item.qty}</strong>
      </div>
      <div class="cart-controls" aria-label="Update ${item.name} quantity">
        <button type="button" data-action="dec" data-id="${item.id}" aria-label="Remove one ${item.name}">-</button>
        <span>${item.qty}</span>
        <button type="button" data-action="inc" data-id="${item.id}" aria-label="Add one ${item.name}">+</button>
      </div>
    `;
    els.list.appendChild(row);
  });
}

els.list.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-action]');
  if (!btn) return;
  updateQty(btn.dataset.id, btn.dataset.action === 'dec' ? -1 : 1);
});

els.checkout.addEventListener('click', () => {
  const { count, total } = getTotals();
  if (!count) {
    alert('Please add at least one item to cart.');
    return;
  }

  if (!cartData.phone) {
    alert('Please continue shopping and select an outlet again.');
    return;
  }

  const allow = window.confirm('Do you allow us to open WhatsApp with your order draft?');
  if (!allow) return;

  const lines = [`Hello ${cartData.outletName}, I want to place an order:`];
  cartData.items.forEach(item => {
    lines.push(`- ${item.name} x ${item.qty} = ${rupee}${item.price * item.qty}`);
  });
  lines.push(`Total: ${rupee}${total}`);

  const text = encodeURIComponent(lines.join('\n'));
  window.open(`https://wa.me/${cartData.phone}?text=${text}`, '_blank');
});

renderCart();
