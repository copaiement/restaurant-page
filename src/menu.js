// create the menu page
function menu() {
  // menu container
  const mainContainer = document.querySelector('.main-container');
  const menuContainer = mainContainer.appendChild(document.createElement('div'));
  menuContainer.className = 'menu-container';
  const menuHeader = menuContainer.appendChild(document.createElement('div'));
  menuHeader.className = 'menu-header';
  menuHeader.textContent = 'Menu';

  // create menu tile function
  function buildMenuItem(item) {
    const tile = menuContainer.appendChild(document.createElement('div'));
    tile.className = 'menu-tile';
    const menuImg = tile.appendChild(document.createElement('img'));
    menuImg.className = 'menu-tile-img';
    menuImg.src = `./images/${item[2]}`;
    menuImg.alt = `${item[0]}`;
    const menuTitle = tile.appendChild(document.createElement('div'));
    menuTitle.className = 'menu-tile-title';
    menuTitle.textContent = `${item[0]}`;
    const menuDesc = tile.appendChild(document.createElement('p'));
    menuDesc.className = 'menu-tile-desc';
    menuDesc.textContent = `${item[1]}`;
  }

  // create actual menu tiles
  const menu = [
    [
      'Beef with Bread',
      'A pulverized beef cake served between two slices of homemade bread and smothered with tomato reduction. Served with braised potato slices',
      'burger.jpeg',
    ],
    [
      'Eat the Plate',
      'Melted cheese with spicy sausage and vegetables served on top of a tomato reduction, on an edible flatbread plate.',
      'pizza.jpeg',
    ],
    [
      'Crumbed Chicken',
      'Prime cuts of chicken crumbed in our artisan bread. Served with a vegetable saute',
      'tenders.jpeg',
    ],
    [
      'Blue Leaf Pasta',
      'Our signature dish: a blend of melted cheeses served over a base of pasta',
      'mac.jpeg',
    ],
    [
      'Oven Roasted Vegetable Plate',
      'Roasted vegetables, pan-finished, with a fermented soy dressing, served over rice',
      'stirfry.jpeg',
    ],
    [
      'Creamed Groundnut and Fruit Reduction',
      'A delighful small plate, this is a groundnut cream mixed with fruit reduction, served on artisian bread',
      'pbj.jpeg',
    ],
  ];

  for (let i = 0; i < menu.length; i += 1) {
    buildMenuItem(menu[i]);
  }
}

export default menu;
