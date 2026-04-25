const outletConfig = {
  'bhaji-pav': {
    outletName: 'Bhaji Pav',
    phone: '918409067309',
    mapUrl: 'https://share.google/gjvX9seNaSlevF1n9',
    swiggyUrl: '#',
    zomatoUrl: '#',
    menu: [
      { id: 'pb', name: 'Classic Pav Bhaji', price: 149, desc: 'Butter-loaded Mumbai style bhaji' },
      { id: 'cb', name: 'Cheese Burger', price: 129, desc: 'Crispy patty, cheese & sauces' },
      { id: 'fm', name: 'Fried Momos', price: 119, desc: 'Served with spicy chutney' },
      { id: 'cc', name: 'Cold Coffee', price: 89, desc: 'Creamy cafe-style cold coffee' }
    ]
  },
  baithak: {
    outletName: 'Baithak',
    phone: '918409067309',
    mapUrl: 'https://share.google/8egLSYewcyZuOjMww',
    swiggyUrl: '#',
    zomatoUrl: '#',
    menu: [
      { id: 'ct', name: 'Cutting Chai', price: 25, desc: 'Strong, aromatic, and comforting' },
      { id: 'bm', name: 'Bun Maska', price: 55, desc: 'Soft bun with creamy butter' },
      { id: 'mg', name: 'Masala Maggie', price: 79, desc: 'Street-style masala noodles' },
      { id: 'om', name: 'Masala Omelette', price: 99, desc: 'Fluffy eggs with spices' }
    ]
  },
  'china-ka-maal': {
    outletName: 'China Ka Maal',
    phone: '917033182192',
    mapUrl: 'https://share.google/0GJ7uHHTRGUVC8TvQ',
    swiggyUrl: '#',
    zomatoUrl: '#',
    menu: [
      { id: 'hc', name: 'Hakka Noodles', price: 139, desc: 'Wok-tossed veggies & sauces' },
      { id: 'mc', name: 'Chilli Chicken', price: 199, desc: 'Spicy & juicy Indo-Chinese favorite' },
      { id: 'kr', name: 'Kathi Roll', price: 129, desc: 'Loaded roll with signature sauces' },
      { id: 'fr', name: 'Fried Rice', price: 129, desc: 'Classic flavorful rice bowl' }
    ]
  }
};

const params = new URLSearchParams(window.location.search);
const outletFromQuery = params.get('outlet');
const outletFromPage = document.body.dataset.outlet;
const outletKey = outletFromQuery || outletFromPage;
const config = outletConfig[outletKey];

if (!config) {
  document.body.innerHTML = '<p style="font-family:sans-serif;padding:20px">Outlet not found.</p>';
} else {
  const els = {
    title: document.getElementById('outlet-title'),
    subtitle: document.getElementById('outlet-subtitle'),
    phone: document.getElementById('outlet-phone'),
    map: document.getElementById('outlet-map'),
    whatsapp: document.getElementById('outlet-whatsapp'),
    swiggy: document.getElementById('outlet-swiggy'),
    zomato: document.getElementById('outlet-zomato'),
    menuList: document.getElementById('menu-list'),
    cartList: document.getElementById('cart-items'),
    cartTotal: document.getElementById('cart-total'),
    checkout: document.getElementById('checkout-btn')
  };

  els.title.textContent = config.outletName;
  els.subtitle.textContent = `Menu, location, and quick order details for ${config.outletName}.`;
  els.phone.textContent = `+${config.phone}`;
  els.map.href = config.mapUrl;
  els.whatsapp.href = `https://wa.me/${config.phone}`;
  els.swiggy.href = config.swiggyUrl;
  els.zomato.href = config.zomatoUrl;

  const cart = new Map();

  function renderMenu() {
    els.menuList.innerHTML = '';
    config.menu.forEach(item => {
      const qty = cart.get(item.id)?.qty || 0;
      const row = document.createElement('article');
      row.className = 'menu-item';
      row.innerHTML = `
        <div class="menu-meta">
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
        </div>
        <div class="item-actions">
          <button class="pill" data-action="dec" data-id="${item.id}">-</button>
          <span class="qty">${qty}</span>
          <button class="pill primary" data-action="inc" data-id="${item.id}">+</button>
          <span class="price">₹${item.price}</span>
        </div>
      `;
      els.menuList.appendChild(row);
    });
  }

  function renderCart() {
    els.cartList.innerHTML = '';
    if (!cart.size) {
      els.cartList.innerHTML = '<p class="empty">No items yet. Add from menu.</p>';
      els.cartTotal.textContent = '₹0';
      return;
    }

    let total = 0;
    cart.forEach((entry) => {
      total += entry.price * entry.qty;
      const row = document.createElement('div');
      row.className = 'cart-row';
      row.innerHTML = `<span>${entry.name} × ${entry.qty}</span><span>₹${entry.price * entry.qty}</span>`;
      els.cartList.appendChild(row);
    });
    els.cartTotal.textContent = `₹${total}`;
  }

  function updateQty(id, delta) {
    const item = config.menu.find(m => m.id === id);
    const existing = cart.get(id);
    const nextQty = (existing?.qty || 0) + delta;

    if (nextQty <= 0) {
      cart.delete(id);
    } else {
      cart.set(id, { ...item, qty: nextQty });
    }

    renderMenu();
    renderCart();
  }

  els.menuList.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-action]');
    if (!btn) return;
    const action = btn.dataset.action;
    const id = btn.dataset.id;
    updateQty(id, action === 'inc' ? 1 : -1);
  });

  els.checkout.addEventListener('click', () => {
    if (!cart.size) {
      alert('Please add at least one item to cart.');
      return;
    }

    const allow = window.confirm('Do you allow us to open WhatsApp with your order draft?');
    if (!allow) return;

    let lines = [`Hello ${config.outletName}, I want to place an order:`];
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.qty;
      lines.push(`• ${item.name} x ${item.qty} = ₹${item.price * item.qty}`);
    });
    lines.push(`Total: ₹${total}`);

    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${config.phone}?text=${text}`, '_blank');
  });

  renderMenu();
  renderCart();
}
