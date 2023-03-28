// create the home page

function home(text) {
  const mainContainer = document.querySelector('.main-container');

  const homeText = [
    'The Blue Leaf is an up-and-coming restaurant in the Las Vegas, NV area.',
    'Lead by Chef Boy R. Dee, we specialize in American Contemporary cuisine.',
    'Our current menu is called Spring Fling and contains a range of dishes created from locally-sourced ingredients',
    'Call us today to make a reservation!',
  ];

  for (let i = 0; i < homeText.length; i += 1) {
    const p = mainContainer.appendChild(document.createElement('p'));
    p.setAttribute('class', 'menu-text');
    p.textContent = homeText[i];
  }
}

export default home;
