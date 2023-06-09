// create the about page

function about() {
  const mainContainer = document.querySelector('.main-container');
  // add image
  const image = mainContainer.appendChild(document.createElement('img'));
  image.setAttribute('class', 'home-img');
  image.src = './images/home.jpg';
  image.alt = 'steak dinner';
  // add array of description
  const aboutText = [
    'The Blue Leaf is an up-and-coming restaurant in the Las Vegas, NV area.',
    'Lead by Chef Boy R. Dee, we specialize in American Contemporary cuisine.',
    'Our current menu is called Spring Fling and contains a range of dishes created from locally-sourced ingredients',
    'Call us today to make a reservation!',
    '716-043-0987',
  ];

  for (let i = 0; i < aboutText.length; i += 1) {
    const p = mainContainer.appendChild(document.createElement('p'));
    p.setAttribute('class', 'main-text');
    p.textContent = aboutText[i];
  }
}

export default about;
