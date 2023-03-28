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
    header.setAttribute('class', 'header');
    logo.setAttribute('id', 'logo');
    logo.textContent = 'The Blue Leaf';
    subtext.setAttribute('id', 'subtext');
    subtext.textContent = 'American Contemporary Dining';
    btnsContainer.setAttribute('class', 'btns-container');
    aboutBtn.setAttribute('class', 'menu-button');
    aboutBtn.textContent = 'About';
    menuBtn.setAttribute('class', 'menu-button');
    menuBtn.textContent = 'Menu';
    contactBtn.setAttribute('class', 'menu-button');
    contactBtn.textContent = 'Contact';
  }

  function buildMain() {
    const main = content.appendChild(document.createElement('div'));
    main.setAttribute('class', 'main-container');
  }

  function clearMain() {
    const main = document.querySelector('.main');
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
    const button = event.target.innerHTML;
    // clear button styling

    // set button styling
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