// import functions from each js file for pages
import about from './about';
import menu from './menu';
import contact from './contact';
import home from './home';
// import stylesheet
import './style.css';
// set up event listeners to call the appropriate js function to switch tabs
const buildPage = (() => {
  const content = document.getElementById('content');

  // set up event listeners

  function buildHeader() {
    // create header structure
    const header = content.appendChild(document.createElement('div'));
    const logo = header.appendChild(document.createElement('div'));
    const subtext = header.appendChild(document.createElement('div'));
    const btnsContainer = header.appendChild(document.createElement('div'));
    const aboutBtn = btnsContainer.appendChild(document.createElement('div'));
    const menuBtn = btnsContainer.appendChild(document.createElement('div'));
    const contactBtn = btnsContainer.appendChild(document.createElement('div'));
    header.className = 'header';
    logo.id = 'logo';
    logo.textContent = 'The Blue Leaf';
    subtext.id = 'subtext';
    subtext.textContent = 'American Contemporary Dining';
    btnsContainer.className = 'btns-container';
    aboutBtn.className = 'menu-button';
    aboutBtn.classList.add('selected');
    aboutBtn.textContent = 'About';
    aboutBtn.id = 'About';
    menuBtn.className = 'menu-button';
    menuBtn.textContent = 'Menu';
    menuBtn.id = 'Menu';
    contactBtn.className = 'menu-button';
    contactBtn.textContent = 'Contact';
    contactBtn.id = 'Contact';
  }

  function buildMain() {
    const main = content.appendChild(document.createElement('div'));
    main.setAttribute('class', 'main-container');
  }

  function clearMain() {
    const main = document.querySelector('.main-container');
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }
  }

  function buildFooter() {
    // create footer structure
    const footer = content.appendChild(document.createElement('div'));
    const footerText = footer.appendChild(document.createElement('div'));
    footer.setAttribute('class', 'footer');
    footerText.setAttribute('class', 'footer-text');
    footerText.textContent = 'Designed by C. Paiement, 2023';
  }

  function navButtons() {
    const buttons = document.querySelectorAll('.menu-button');
    buttons.forEach(button => button.addEventListener('click', setPage));
  }

  function setPage(event) {
    // clear main div
    clearMain();
    const inputButton = event.target.innerHTML;
    // clear button styling
    const buttons = document.querySelectorAll('.menu-button');
    buttons.forEach(button => button.classList.remove('selected'));
    // set button styling
    document.querySelector(`#${inputButton}`).classList.add('selected');
    if (inputButton === 'About') {
      about();
    } else if (inputButton === 'Menu') {
      menu();
    } else {
      contact();
    }
  }

  function initialize() {
    buildHeader();
    buildMain();
    buildFooter();
    about();
    navButtons();
  }

  initialize();
})();
