// import functions from each js file for pages
import about from './about';
import menu from './menu';
import contact from './contact';
// set up event listeners to call the appropriate js function to switch tabs
const buildPage = (() => {
  const content = document.getElementById('content');

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
    aboutBtn.setAttribute('class', 'button');
    aboutBtn.textContent = 'About';
    menuBtn.setAttribute('class', 'button');
    menuBtn.textContent = 'Menu';
    contactBtn.setAttribute('class', 'button');
    contactBtn.textContent = 'Contact';
  }

  function buildFooter() {
    // create footer structure
    const footer = content.appendChild(document.createElement('div'));
    const footerText = footer.appendChild(document.createElement('div'));
    footer.setAttribute('class', 'footer');
    footerText.setAttribute('class', 'footer-text');
    footerText.textContent = 'Designed by C. Paiement, 2023';
  }

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  buildHeader();
  buildFooter();

})();
