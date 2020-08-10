window.addEventListener('load', function () {
  let products = {
    all: window.storeProducts,

    createCard: function (product) {
      let card = document.createElement('div');
      card.classList.add('card');
      let img = document.createElement('img');
      img.src = `images/${product.code}.jpg`;
      img.width = 380;
      card.appendChild(img);
      let content = document.createElement('p');
      content.innerHTML = `<h2>${product.name}</h2>`;
      content.innerHTML += `<b>$${product.price}</b> a unit of ${product.unit}/${product.area}`;
      content.innerHTML += `<br>${product.category} | ${product.description}`;
      card.appendChild(content);
      return card;
    },

    displayAll: function () {
      let main = document.querySelector('main');
      main.innerHTML = '';
      products.all.forEach(product => main.appendChild(products.createCard(product)));
      document.querySelector('.selected').classList.remove('selected');
      document.querySelector('#menu-all').classList.add('selected');
    },

    displayByCat: function (category) {
      let main = document.querySelector('main');
      main.innerHTML = '';
      products.all
        .filter(product => product.category === category)
        .forEach(product => main.appendChild(products.createCard(product)));
    },

    displayWallpapers: function () {
      // eslint-disable-next-line no-undef
      products.displayByCat(categories.wallpapers);
      document.querySelector('.selected').classList.remove('selected');
      document.querySelector('#menu-wallpapers').classList.add('selected');
    },

    displayFloors: function () {
      // eslint-disable-next-line no-undef
      products.displayByCat(categories.floors);
      document.querySelector('.selected').classList.remove('selected');
      document.querySelector('#menu-floors').classList.add('selected');
    },

    displayCounters: function () {
      // eslint-disable-next-line no-undef
      products.displayByCat(categories.counters);
      document.querySelector('.selected').classList.remove('selected');
      document.querySelector('#menu-counters').classList.add('selected');
    }
  };

  document.querySelector('#menu-all').addEventListener('click', products.displayAll);
  document.querySelector('#menu-wallpapers').addEventListener('click', products.displayWallpapers);
  document.querySelector('#menu-floors').addEventListener('click', products.displayFloors);
  document.querySelector('#menu-counters').addEventListener('click', products.displayCounters);

  products.displayAll();

  let locationString = String(window.location);

  if (locationString.indexOf('#') > 0) {
    let request = locationString.substring(locationString.indexOf('#') + 1);
    switch (request) {
      // eslint-disable-next-line no-undef
      case categories.wallpapers:
        products.displayWallpapers();
        break;
      // eslint-disable-next-line no-undef
      case categories.floors:
        products.displayFloors();
        break;
      // eslint-disable-next-line no-undef
      case categories.counters:
        products.displayCounters();
        break;
      default:
        products.displayAll();
    }
  }
});
