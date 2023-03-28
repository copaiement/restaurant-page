// create the contact page
function contact() {
  const mainContainer = document.querySelector('.main-container');
  const contactContainer = mainContainer.appendChild(document.createElement('div'));
  contactContainer.className = 'contact-container';

  const img = contactContainer.appendChild(document.createElement('img'));
  img.className = 'map';
  img.src = './images/map.png';
  img.alt = 'Las Vegas Map';

  const contactFields = contactContainer.appendChild(document.createElement('div'));
  contactFields.className = 'contact-fields';

  const contactText = [
    'The Blue Leaf is located at the corner of 9th and Lewis',
    'For reservations/info please contact us:',
    'Phone: 716-043-0987',
    'Email: info@theblueleaf.com',
    'IG: @theblueleaf',
  ];

  for (let i = 0; i < contactText.length; i += 1) {
    const p = contactContainer.appendChild(document.createElement('p'));
    p.className = 'contact-text';
    p.textContent = contactText[i];
  }
}

export default contact;
