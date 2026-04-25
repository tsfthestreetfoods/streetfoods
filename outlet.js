const outletConfig = {
  'bhaji-pav': {
    outletName: 'Bhaji Pav',
    phone: '918409067309',
    mapUrl: 'https://share.google/gjvX9seNaSlevF1n9',
    swiggyUrl: '#',
    zomatoUrl: '#',
    categories: [
      { id: 'pav-bhaji', label: 'Pav Bhaji' },
      { id: 'burgers', label: 'Burgers' },
      { id: 'fries', label: 'Fries' },
      { id: 'sandwiches', label: 'Sandwiches' },
      { id: 'snacks', label: 'Snacks' },
      { id: 'dosa', label: 'Benne Dosa' },
      { id: 'drinks', label: 'Drinks' }
    ],
    menu: [
      { id: 'pav-bhaji-half', category: 'pav-bhaji', name: 'Pav Bhaji Half', price: 60, desc: 'Pav Bhaji', image: 'images/bhaji-items/pav-bhaji-half.jfif' },
      { id: 'pav-bhaji-full', category: 'pav-bhaji', name: 'Pav Bhaji Full', price: 110, desc: 'Pav Bhaji', image: 'images/bhaji-items/pav-bhaji-full.jfif', popular: true },
      { id: 'cheese-pav-bhaji-half', category: 'pav-bhaji', name: 'Cheese Pav Bhaji Half', price: 80, desc: 'Pav Bhaji', image: 'images/bhaji-items/cheese-pav-bhaji-half.jfif' },
      { id: 'cheese-pav-bhaji-full', category: 'pav-bhaji', name: 'Cheese Pav Bhaji Full', price: 140, desc: 'Pav Bhaji', image: 'images/bhaji-items/cheese-pav-bhaji-full.jfif', popular: true },
      { id: 'paneer-pav-bhaji-half', category: 'pav-bhaji', name: 'Paneer Pav Bhaji Half', price: 80, desc: 'Pav Bhaji', image: 'images/bhaji-items/paneer-pav-bhaji-half.jfif' },
      { id: 'paneer-pav-bhaji-full', category: 'pav-bhaji', name: 'Paneer Pav Bhaji Full', price: 140, desc: 'Pav Bhaji', image: 'images/bhaji-items/paneer-pav-bhaji-full.jfif' },
      { id: 'cheese-paneer-pav-bhaji-half', category: 'pav-bhaji', name: 'Cheese Paneer Pav Bhaji Half', price: 100, desc: 'Pav Bhaji', image: 'images/bhaji-items/cheese-paneer-pav-bhaji-half.jfif' },
      { id: 'cheese-paneer-pav-bhaji-full', category: 'pav-bhaji', name: 'Cheese Paneer Pav Bhaji Full', price: 180, desc: 'Pav Bhaji', image: 'images/bhaji-items/cheese-paneer-pav-bhaji-full.jfif' },
      { id: 'aloo-tikki-burger', category: 'burgers', name: 'Aloo Tikki Burger', price: 50, desc: 'Burger', image: 'images/bhaji-items/aloo-tikki-burger.jfif' },
      { id: 'aloo-tikki-cheese-burger', category: 'burgers', name: 'Aloo Tikki Cheese Burger', price: 70, desc: 'Burger', image: 'images/bhaji-items/aloo-tikki-cheese-burger.jfif', popular: true },
      { id: 'fries', category: 'fries', name: 'Fries', price: 40, desc: 'Crispy fries', image: 'images/bhaji-items/fries.jfif' },
      { id: 'peri-peri-fries', category: 'fries', name: 'Peri Peri Fries', price: 50, desc: 'Crispy fries', image: 'images/bhaji-items/peri-peri-fries.jfif' },
      { id: 'cheese-fries', category: 'fries', name: 'Cheese Fries', price: 60, desc: 'Crispy fries', image: 'images/bhaji-items/cheese-fries.jfif' },
      { id: 'cheese-peri-peri-fries', category: 'fries', name: 'Cheese Peri Peri Fries', price: 70, desc: 'Crispy fries', image: 'images/bhaji-items/cheese-peri-peri-fries.jfif', popular: true },
      { id: 'veg-grilled-sandwich', category: 'sandwiches', name: 'Veg Grilled Sandwich', price: 50, desc: 'Grilled sandwich', image: 'images/bhaji-items/veg-grilled-sandwich.jfif' },
      { id: 'veg-cheese-sandwich', category: 'sandwiches', name: 'Veg Cheese Sandwich', price: 70, desc: 'Grilled sandwich', image: 'images/bhaji-items/veg-cheese-sandwich.jfif' },
      { id: 'corn-cheese-sandwich', category: 'sandwiches', name: 'Corn Cheese Sandwich', price: 70, desc: 'Grilled sandwich', image: 'images/bhaji-items/corn-cheese-sandwich.jfif', popular: true },
      { id: 'hara-bhara-kabab', category: 'snacks', name: 'Hara Bhara Kabab', price: 60, desc: 'Snack', image: 'images/bhaji-items/hara-bhara-kabab.jfif' },
      { id: 'veg-momos', category: 'snacks', name: 'Veg Momos', price: 50, desc: 'Momos', image: 'images/bhaji-items/veg-momos.jfif' },
      { id: 'paneer-momos', category: 'snacks', name: 'Paneer Momos', price: 70, desc: 'Momos', image: 'images/bhaji-items/paneer-momos.jfif' },
      { id: 'plain-benne-dosa', category: 'dosa', name: 'Plain Benne Dosa', price: 40, desc: 'Benne Dosa', image: 'images/bhaji-items/plain-benne-dosa.jfif' },
      { id: 'masala-benne-dosa', category: 'dosa', name: 'Masala Benne Dosa', price: 50, desc: 'Benne Dosa', image: 'images/bhaji-items/masala-benne-dosa.jfif' },
      { id: 'cheese-benne-dosa', category: 'dosa', name: 'Cheese Benne Dosa', price: 60, desc: 'Benne Dosa', image: 'images/bhaji-items/cheese-benne-dosa.jfif' },
      { id: 'cheese-masala-benne-dosa', category: 'dosa', name: 'Cheese Masala Benne Dosa', price: 70, desc: 'Benne Dosa', image: 'images/bhaji-items/cheese-masala-benne-dosa.jfif', popular: true },
      { id: 'cold-coffee', category: 'drinks', name: 'Cold Coffee', price: 70, desc: 'Cold coffee', image: 'images/bhaji-items/cold-coffee.jfif' },
      { id: 'masala-lemonade', category: 'drinks', name: 'Masala Lemonade', price: 30, desc: 'Refreshing drink', image: 'images/bhaji-items/masala-lemonade.jfif' },
      { id: 'blue-lagoon', category: 'drinks', name: 'Blue Lagoon', price: 70, desc: 'Refreshing drink', image: 'images/bhaji-items/blue-lagoon.jfif', popular: true },
      { id: 'kala-khatta', category: 'drinks', name: 'Kala Khatta', price: 60, desc: 'Refreshing drink', image: 'images/bhaji-items/kala-khatta.jfif' },
      { id: 'watermelon-special', category: 'drinks', name: 'Watermelon Special', price: 60, desc: 'Refreshing drink', image: 'images/bhaji-items/watermelon-special.jfif' },
      { id: 'virgin-mojito', category: 'drinks', name: 'Virgin Mojito', price: 60, desc: 'Refreshing drink', image: 'images/bhaji-items/virgin-mojito.jfif', popular: true }
    ]
  },
  baithak: {
    outletName: 'Baithak',
    phone: '917780025877',
    mapUrl: 'https://share.google/8egLSYewcyZuOjMww',
    swiggyUrl: '#',
    zomatoUrl: 'http://zoma.to/r/22311302',
    categories: [
      { id: 'chai', label: 'Chai' },
      { id: 'coffee', label: 'Coffee' },
      { id: 'maggie', label: 'Maggie' },
      { id: 'omelette', label: 'Omelette' },
      { id: 'snacks', label: 'Sandwiches & Snacks' },
      { id: 'combos', label: 'Combos' }
    ],
    menu: [
      { id: 'chai-sirf', category: 'chai', name: 'Sirf Chai', price: 12, desc: 'Chai Chahiye', image: 'images/baithak.jpg' },
      { id: 'chai-adrak', category: 'chai', name: 'Adrak Chai', price: 15, desc: 'Chai Chahiye', image: 'images/baithak.jpg' },
      { id: 'chai-elaichi', category: 'chai', name: 'Elaichi Chai', price: 15, desc: 'Chai Chahiye', image: 'images/baithak.jpg' },
      { id: 'chai-special', category: 'chai', name: 'Baithak Special Chai', price: 20, desc: 'Chai Chahiye', image: 'images/baithak.jpg', popular: true },
      { id: 'coffee', category: 'coffee', name: 'Coffee', price: 15, desc: 'Coffee Boss', image: 'images/baithak.jpg' },
      { id: 'coffee-special', category: 'coffee', name: 'Special Coffee', price: 20, desc: 'Coffee Boss', image: 'images/baithak.jpg', popular: true },
      { id: 'cold-coffee-small', category: 'coffee', name: 'Cold Coffee Small', price: 35, desc: 'Coffee Boss', image: 'images/baithak.jpg' },
      { id: 'cold-coffee-large', category: 'coffee', name: 'Cold Coffee Large', price: 70, desc: 'Coffee Boss', image: 'images/baithak.jpg', popular: true },
      { id: 'maggie', category: 'maggie', name: 'Maggie', price: 30, desc: '5 Minutes Maggie', image: 'images/baithak.jpg' },
      { id: 'maggie-masala', category: 'maggie', name: 'Masala Maggie', price: 40, desc: '5 Minutes Maggie', image: 'images/baithak.jpg' },
      { id: 'maggie-veg', category: 'maggie', name: 'Veg Maggie', price: 40, desc: '5 Minutes Maggie', image: 'images/baithak.jpg' },
      { id: 'maggie-veg-masala', category: 'maggie', name: 'Veg Masala Maggie', price: 50, desc: '5 Minutes Maggie', image: 'images/baithak.jpg' },
      { id: 'maggie-cheese', category: 'maggie', name: 'Cheese Maggie', price: 55, desc: '5 Minutes Maggie', image: 'images/baithak.jpg', popular: true },
      { id: 'maggie-veg-cheese', category: 'maggie', name: 'Veg Cheese Maggie', price: 65, desc: '5 Minutes Maggie', image: 'images/baithak.jpg' },
      { id: 'maggie-schezwan', category: 'maggie', name: 'Schezwan Maggie', price: 40, desc: '5 Minutes Maggie', image: 'images/baithak.jpg' },
      { id: 'maggie-veg-schezwan', category: 'maggie', name: 'Veg Schezwan Maggie', price: 50, desc: '5 Minutes Maggie', image: 'images/baithak.jpg' },
      { id: 'maggie-veg-cheese-schezwan', category: 'maggie', name: 'Veg Cheese Schezwan Maggie', price: 65, desc: '5 Minutes Maggie', image: 'images/baithak.jpg' },
      { id: 'maggie-baithak-special', category: 'maggie', name: 'Baithak Special Maggie', price: 80, desc: '5 Minutes Maggie', image: 'images/baithak.jpg', popular: true },
      { id: 'omelette-single', category: 'omelette', name: 'Omelette (Single Egg)', price: 15, desc: 'Ande Ka Funda', image: 'images/baithak.jpg' },
      { id: 'omelette-veg', category: 'omelette', name: 'Veg Omelette', price: 25, desc: 'Ande Ka Funda', image: 'images/baithak.jpg' },
      { id: 'omelette-bread', category: 'omelette', name: 'Bread Omelette', price: 20, desc: 'Ande Ka Funda', image: 'images/baithak.jpg' },
      { id: 'omelette-veg-bread', category: 'omelette', name: 'Veg Bread Omelette', price: 30, desc: 'Ande Ka Funda', image: 'images/baithak.jpg' },
      { id: 'omelette-cheese', category: 'omelette', name: 'Cheese Omelette', price: 35, desc: 'Ande Ka Funda', image: 'images/baithak.jpg', popular: true },
      { id: 'omelette-veg-cheese', category: 'omelette', name: 'Veg Cheese Omelette', price: 40, desc: 'Ande Ka Funda', image: 'images/baithak.jpg' },
      { id: 'omelette-veg-cheese-bread', category: 'omelette', name: 'Veg Cheese Bread Omelette', price: 60, desc: 'Ande Ka Funda', image: 'images/baithak.jpg' },
      { id: 'veg-sandwich', category: 'snacks', name: 'Veg Sandwich', price: 50, desc: 'Cafe snacks', image: 'images/baithak.jpg', popular: true },
      { id: 'bun-butter', category: 'snacks', name: 'Bun Butter', price: 20, desc: 'Cafe snacks', image: 'images/baithak.jpg' },
      { id: 'butter-toast', category: 'snacks', name: 'Butter Toast', price: 10, desc: 'Cafe snacks', image: 'images/baithak.jpg' },
      { id: 'bread-butter-jam', category: 'snacks', name: 'Bread Butter Jam', price: 20, desc: 'Cafe snacks', image: 'images/baithak.jpg' },
      { id: 'corn-cheese-sandwich', category: 'snacks', name: 'Corn Cheese Sandwich', price: 60, desc: 'Cafe snacks', image: 'images/baithak.jpg' },
      { id: 'paneer-sandwich', category: 'snacks', name: 'Paneer Sandwich', price: 70, desc: 'Cafe snacks', image: 'images/baithak.jpg' },
      { id: 'chicken-sandwich', category: 'snacks', name: 'Chicken Sandwich', price: 70, desc: 'Cafe snacks', image: 'images/baithak.jpg' },
      { id: 'chicken-keema-pav', category: 'snacks', name: 'Chicken Keema Pav', price: 80, desc: 'Cafe snacks', image: 'images/baithak.jpg' },
      { id: 'cold-coffee-maggie-combo', category: 'combos', name: 'Cold Coffee and Maggie Combo', price: 79, desc: 'Combo offer', image: 'images/baithak.jpg', popular: true },
      { id: 'cold-coffee-sandwich-combo', category: 'combos', name: 'Cold Coffee and Sandwich Combo', price: 79, desc: 'Combo offer', image: 'images/baithak.jpg', popular: true }
    ]
  },
  'china-ka-maal': {
    outletName: 'China Ka Maal',
    phone: '917033182192',
    mapUrl: 'https://share.google/0GJ7uHHTRGUVC8TvQ',
    swiggyUrl: 'https://www.swiggy.com/city/muzaffarpur/china-ka-maal-muz-muzaffarpur-city-rest1356681',
    zomatoUrl: '#',
    categories: [
      { id: 'soup', label: 'Soup' },
      { id: 'fried-rice', label: 'Fried Rice' },
      { id: 'noodles', label: 'Noodles' },
      { id: 'manchurian', label: 'Manchurian' },
      { id: 'chilli', label: 'Chilli' },
      { id: 'biryani', label: 'Biryani' },
      { id: 'rolls', label: 'Rolls' },
      { id: 'combos', label: 'Combos' },
      { id: 'paratha', label: 'Paratha' }
    ],
    menu: [
      { id: 'veg-soup', category: 'soup', name: 'Veg Soup', price: 50, desc: 'Hot Indo-Chinese soup', image: 'images/china-items/Veg Soup 50.png' },
      { id: 'chicken-soup', category: 'soup', name: 'Chicken Soup', price: 70, desc: 'Hot Indo-Chinese soup', image: 'images/china-items/Chicken Soup 70.png' },
      { id: 'veg-fried-rice-half', category: 'fried-rice', name: 'Veg Fried Rice Half', price: 60, desc: 'Veg fried rice', image: 'images/china-items/Veg Fried Rice Half 60.png' },
      { id: 'veg-fried-rice-full', category: 'fried-rice', name: 'Veg Fried Rice Full', price: 100, desc: 'Veg fried rice', image: 'images/china-items/Veg Fried Rice Full 100.png', popular: true },
      { id: 'egg-fried-rice-half', category: 'fried-rice', name: 'Egg Fried Rice Half', price: 80, desc: 'Egg fried rice', image: 'images/china-items/Egg Fried Rice Half 80.png' },
      { id: 'egg-fried-rice-full', category: 'fried-rice', name: 'Egg Fried Rice Full', price: 150, desc: 'Egg fried rice', image: 'images/china-items/Egg Fried Rice Full 150.png' },
      { id: 'paneer-fried-rice-half', category: 'fried-rice', name: 'Paneer Fried Rice Half', price: 100, desc: 'Paneer fried rice', image: 'images/china-items/Paneer Fried Rice Half 100.png' },
      { id: 'paneer-fried-rice-full', category: 'fried-rice', name: 'Paneer Fried Rice Full', price: 180, desc: 'Paneer fried rice', image: 'images/china-items/Paneer Fried Rice Full 180.png' },
      { id: 'chicken-fried-rice-half', category: 'fried-rice', name: 'Chicken Fried Rice Half', price: 100, desc: 'Chicken fried rice', image: 'images/china-items/Chicken Fried Rice Half 100.png' },
      { id: 'chicken-fried-rice-full', category: 'fried-rice', name: 'Chicken Fried Rice Full', price: 180, desc: 'Chicken fried rice', image: 'images/china-items/Chicken Fried Rice Full 180.png', popular: true },
      { id: 'veg-noodles-half', category: 'noodles', name: 'Veg Noodles Half', price: 50, desc: 'Veg noodles', image: 'images/china-items/Veg Noodles Half 50.png' },
      { id: 'veg-noodles-full', category: 'noodles', name: 'Veg Noodles Full', price: 90, desc: 'Veg noodles', image: 'images/china-items/Veg Noodles Full 90.png', popular: true },
      { id: 'egg-noodles-half', category: 'noodles', name: 'Egg Noodles Half', price: 70, desc: 'Egg noodles', image: 'images/china-items/Egg Noodles Half 70.png' },
      { id: 'egg-noodles-full', category: 'noodles', name: 'Egg Noodles Full', price: 120, desc: 'Egg noodles', image: 'images/china-items/Egg Noodles Full 120.png' },
      { id: 'paneer-noodles-half', category: 'noodles', name: 'Paneer Noodles Half', price: 90, desc: 'Paneer noodles', image: 'images/china-items/Paneer Noodles Half 90.png' },
      { id: 'paneer-noodles-full', category: 'noodles', name: 'Paneer Noodles Full', price: 170, desc: 'Paneer noodles', image: 'images/china-items/Paneer Noodles Full 170.png' },
      { id: 'chicken-noodles-half', category: 'noodles', name: 'Chicken Noodles Half', price: 90, desc: 'Chicken noodles', image: 'images/china-items/Chicken Noodles Half 90.png' },
      { id: 'chicken-noodles-full', category: 'noodles', name: 'Chicken Noodles Full', price: 170, desc: 'Chicken noodles', image: 'images/china-items/Chicken Noodles Full 170.png' },
      { id: 'egg-chicken-noodles-half', category: 'noodles', name: 'Egg Chicken Noodles Half', price: 110, desc: 'Egg chicken noodles', image: 'images/china-items/Egg Chicken Noodles Half 110.png' },
      { id: 'egg-chicken-noodles-full', category: 'noodles', name: 'Egg Chicken Noodles Full', price: 200, desc: 'Egg chicken noodles', image: 'images/china-items/Egg Chicken Noodles Full 200.png', popular: true },
      { id: 'veg-manchurian-half', category: 'manchurian', name: 'Veg Manchurian Half', price: 80, desc: 'Veg Manchurian', image: 'images/china-items/Veg Manchurian Half 80.png' },
      { id: 'veg-manchurian-full', category: 'manchurian', name: 'Veg Manchurian Full', price: 150, desc: 'Veg Manchurian', image: 'images/china-items/Veg Manchurian Full150.png', popular: true },
      { id: 'paneer-chilli-half', category: 'chilli', name: 'Paneer Chilli Half', price: 120, desc: 'Paneer chilli', image: 'images/china-items/Paneer Chilli Half 120.png' },
      { id: 'paneer-chilli-full', category: 'chilli', name: 'Paneer Chilli Full', price: 220, desc: 'Paneer chilli', image: 'images/china-items/Paneer Chilli Full 220.png', popular: true },
      { id: 'chicken-chilli-bone-half', category: 'chilli', name: 'Chicken Chilli Bone Half', price: 110, desc: 'Chicken chilli', image: 'images/china-items/Chicken Chilli Bone Half 110.png' },
      { id: 'chicken-chilli-bone-full', category: 'chilli', name: 'Chicken Chilli Bone Full', price: 200, desc: 'Chicken chilli', image: 'images/china-items/Chicken Chilli Bone Full 200.png' },
      { id: 'chicken-chilli-boneless-half', category: 'chilli', name: 'Chicken Chilli Boneless Half', price: 120, desc: 'Boneless chicken chilli', image: 'images/china-items/Chicken Chilli Boneless Half 120.png' },
      { id: 'chicken-chilli-boneless-full', category: 'chilli', name: 'Chicken Chilli Boneless Full', price: 220, desc: 'Boneless chicken chilli', image: 'images/china-items/Chicken Chilli Boneless Full 220.png', popular: true },
      { id: 'chicken-lollypop-half', category: 'chilli', name: 'Chicken Lollypop Half', price: 120, desc: 'Chicken lollypop', image: 'images/china-items/Chicken Lollypop Half 120.png' },
      { id: 'chicken-lollypop-full', category: 'chilli', name: 'Chicken Lollypop Full', price: 220, desc: 'Chicken lollypop', image: 'images/china-items/Chicken Lollypop Full 220.png' },
      { id: 'egg-dum-biryani', category: 'biryani', name: 'Egg Dum Biryani', price: 89, desc: 'Dum biryani', image: 'images/china-items/Egg Dum Biryani 89.png' },
      { id: 'chicken-dum-biryani-rice-only', category: 'biryani', name: 'Chicken Dum Biryani Rice Only', price: 69, desc: 'Dum biryani rice', image: 'images/china-items/Chicken Dum Biryani Rice Only 69.png' },
      { id: 'chicken-dum-biryani-normal-pieces', category: 'biryani', name: 'Chicken Dum Biryani Normal Pieces', price: 99, desc: 'Dum biryani', image: 'images/china-items/Chicken Dum Biryani Normal Pieces 99.png', popular: true },
      { id: 'chicken-dum-biryani-leg-piece', category: 'biryani', name: 'Chicken Dum Biryani Leg Piece', price: 119, desc: 'Dum biryani', image: 'images/china-items/Chicken Dum Biryani Leg Piece 119.png' },
      { id: 'veg-roll', category: 'rolls', name: 'Veg Roll', price: 40, desc: 'Kathi roll', image: 'images/china-items/Veg Roll 40.png' },
      { id: 'single-egg-roll', category: 'rolls', name: 'Single Egg Roll', price: 40, desc: 'Kathi roll', image: 'images/china-items/Single Egg Roll 40.png' },
      { id: 'double-egg-roll', category: 'rolls', name: 'Double Egg Roll', price: 50, desc: 'Kathi roll', image: 'images/china-items/Double Egg Roll 50.png' },
      { id: 'paneer-roll', category: 'rolls', name: 'Paneer Roll', price: 60, desc: 'Kathi roll', image: 'images/china-items/Paneer Roll 60.png' },
      { id: 'double-paneer-roll', category: 'rolls', name: 'Double Paneer Roll', price: 100, desc: 'Kathi roll', image: 'images/china-items/Double Paneer Roll 100.png' },
      { id: 'chicken-roll-without-egg', category: 'rolls', name: 'Chicken Roll Without Egg', price: 60, desc: 'Kathi roll', image: 'images/china-items/Chicken Roll Without Egg 60.png' },
      { id: 'single-egg-single-paneer-roll', category: 'rolls', name: 'Single Egg Single Paneer Roll', price: 80, desc: 'Kathi roll', image: 'images/china-items/Single Egg Single Paneer Roll 80.png' },
      { id: 'double-egg-single-paneer-roll', category: 'rolls', name: 'Double Egg Single Paneer Roll', price: 90, desc: 'Kathi roll', image: 'images/china-items/Double Egg Single Paneer Roll 90.png' },
      { id: 'single-egg-single-chicken-roll', category: 'rolls', name: 'Single Egg Single Chicken Roll', price: 80, desc: 'Kathi roll', image: 'images/china-items/Single Egg Single Chicken Roll 80.png' },
      { id: 'double-egg-single-chicken-roll', category: 'rolls', name: 'Double Egg Single Chicken Roll', price: 90, desc: 'Kathi roll', image: 'images/china-items/Double Egg Single Chicken Roll 90.png' },
      { id: 'single-egg-double-chicken-roll', category: 'rolls', name: 'Single Egg Double Chicken Roll', price: 120, desc: 'Kathi roll', image: 'images/china-items/Single Egg Double Chicken Roll 120.png' },
      { id: 'double-egg-double-chicken-roll', category: 'rolls', name: 'Double Egg Double Chicken Roll', price: 130, desc: 'Kathi roll', image: 'images/china-items/Double Egg Double Chicken Roll 130.png', popular: true },
      { id: 'veg-fried-rice-manchurian-combo', category: 'combos', name: 'Veg Fried Rice + Manchurian Combo', price: 99, desc: 'Combo meal', image: 'images/china-items/Veg Fried Rice + Manchurian Combo 99.png', popular: true },
      { id: 'veg-fried-rice-paneer-chilli-combo', category: 'combos', name: 'Veg Fried Rice + Paneer Chilli Combo', price: 109, desc: 'Combo meal', image: 'images/china-items/Veg Fried Rice + Paneer Chilli Combo 109.png' },
      { id: 'veg-fried-rice-chicken-chilli-combo', category: 'combos', name: 'Veg Fried Rice + Chicken Chilli Combo', price: 109, desc: 'Combo meal', image: 'images/china-items/Veg Fried Rice + Chicken Chilli Combo 109.png' },
      { id: 'veg-noodles-manchurian', category: 'combos', name: 'Veg Noodles + Manchurian', price: 89, desc: 'Combo meal', image: 'images/china-items/Veg Noodles + Manchurian 89.png' },
      { id: 'veg-noodles-chicken-chilli', category: 'combos', name: 'Veg Noodles + Chicken Chilli', price: 99, desc: 'Combo meal', image: 'images/china-items/Veg Noodles + Chicken Chilli 99.png' },
      { id: 'veg-noodles-paneer-chilli', category: 'combos', name: 'Veg Noodles + Paneer Chilli', price: 99, desc: 'Combo meal', image: 'images/china-items/Veg Noodles + Paneer Chilli 99.png', popular: true },
      { id: 'chicken-dum-biryani-chicken-65', category: 'combos', name: 'Chicken Dum Biryani + Chicken 65', price: 149, desc: 'Combo meal', image: 'images/china-items/Chicken Dum Biryani + Chicken 65 149.png', popular: true },
      { id: 'laccha-paratha', category: 'paratha', name: 'Laccha Paratha', price: 25, desc: 'Layered paratha', image: 'images/china-items/Laccha Paratha 25.png' },
      { id: 'anda-paratha', category: 'paratha', name: 'Anda Paratha', price: 30, desc: 'Egg-stuffed paratha served hot', image: 'images/china-items/Anda Paratha 30.png' }
    ]
  }
};

const rupee = '\u20b9';
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

outletConfig.baithak.menu = outletConfig.baithak.menu.map(item => ({
  ...item,
  image: baithakStockImages[item.id] || item.image
}));

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
    cartCount: document.getElementById('cart-count'),
    cartTotal: document.getElementById('cart-total'),
    viewCart: document.getElementById('view-cart-btn')
  };

  els.title.textContent = config.outletName;
  els.subtitle.textContent = `Menu, location, and quick order details for ${config.outletName}.`;
  els.phone.textContent = `+${config.phone}`;
  els.map.href = config.mapUrl;
  els.whatsapp.href = `https://wa.me/${config.phone}`;
  els.swiggy.href = config.swiggyUrl;
  els.zomato.href = config.zomatoUrl;

  const storageKey = `streetfoods-cart-${outletKey}`;
  const savedCart = JSON.parse(localStorage.getItem(storageKey) || 'null');
  const cart = new Map(
    savedCart?.items?.map(item => {
      const currentItem = config.menu.find(menuItem => menuItem.id === item.id) || item;
      return [item.id, { ...currentItem, qty: item.qty }];
    }) || []
  );

  function getCartTotals() {
    let total = 0;
    let count = 0;
    cart.forEach(item => {
      total += item.price * item.qty;
      count += item.qty;
    });
    return { total, count };
  }

  function saveCart() {
    localStorage.setItem(storageKey, JSON.stringify({
      outletKey,
      outletName: config.outletName,
      phone: config.phone,
      mapUrl: config.mapUrl,
      items: Array.from(cart.values())
    }));
  }

  function createMenuItem(item) {
    const qty = cart.get(item.id)?.qty || 0;
    const row = document.createElement('article');
    row.className = `menu-item${item.popular ? ' popular-item' : ''}`;
    row.innerHTML = `
      <div class="menu-image-wrap">
        <img src="${item.image || 'images/hero.png'}" alt="${item.name}">
        ${item.popular ? '<span class="popular-badge">Popular</span>' : ''}
      </div>
      <div class="menu-meta">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="menu-bottom">
          <span class="price">${rupee}${item.price}</span>
          <div class="item-actions">
            <button class="pill item-step" data-action="dec" data-id="${item.id}" aria-label="Remove ${item.name}" ${qty ? '' : 'disabled'}>-</button>
            <span class="qty">${qty}</span>
            <button class="pill primary add-btn" data-action="inc" data-id="${item.id}" aria-label="Add ${item.name}">+</button>
          </div>
        </div>
      </div>
    `;
    return row;
  }

  function renderMenu() {
    els.menuList.innerHTML = '';

    if (config.categories?.length) {
      config.categories.forEach(category => {
        const items = config.menu.filter(item => item.category === category.id);
        if (!items.length) return;

        const section = document.createElement('section');
        section.className = 'menu-category';
        section.innerHTML = `
          <div class="category-head">
            <h3>${category.label}</h3>
            <span>${items.length} items</span>
          </div>
          <div class="category-grid"></div>
        `;

        const grid = section.querySelector('.category-grid');
        items.forEach(item => grid.appendChild(createMenuItem(item)));
        els.menuList.appendChild(section);
      });
      return;
    }

    config.menu.forEach(item => {
      els.menuList.appendChild(createMenuItem(item));
    });
  }

  function renderCartSummary() {
    const { total, count } = getCartTotals();
    els.cartCount.textContent = `${count} ${count === 1 ? 'item' : 'items'}`;
    els.cartTotal.textContent = `${rupee}${total}`;
    els.viewCart.disabled = count === 0;
  }

  function updateQty(id, delta) {
    const item = config.menu.find(m => m.id === id);
    if (!item) return;

    const existing = cart.get(id);
    const nextQty = (existing?.qty || 0) + delta;

    if (nextQty <= 0) {
      cart.delete(id);
    } else {
      cart.set(id, { ...item, qty: nextQty });
    }

    saveCart();
    renderMenu();
    renderCartSummary();
  }

  els.menuList.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-action]');
    if (!btn) return;
    updateQty(btn.dataset.id, btn.dataset.action === 'dec' ? -1 : 1);
  });

  els.viewCart.addEventListener('click', () => {
    if (!cart.size) {
      alert('Please add at least one item to cart.');
      return;
    }

    saveCart();
    window.location.href = `cart.html?outlet=${encodeURIComponent(outletKey)}`;
  });

  saveCart();
  renderMenu();
  renderCartSummary();
}
