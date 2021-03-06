export default () => {
  const contactSection = document.createElement('section');

  contactSection.classList.add('landing-page-section', 'contact-tab', 'container-fluid');
  contactSection.id = 'landing-page-section';

  const contactCard = document.createElement('div');
  contactCard.classList.add('card', 'card-body');

  const title = document.createElement('h5');
  title.classList.add('card-title', 'text-center');
  title.innerText = 'Como Contactarnos';

  const text = document.createElement('p');
  text.classList.add('card-text');
  text.innerText = 'Si tiene preguntas o le gustaría hacer una reservación, somos disponibles por teléfono, Internet y en persona durante nuestras horas de trabajo.';

  const lineBreak1 = document.createElement('br');
  const lineBreak2 = document.createElement('br');

  const telephone = document.createElement('p');
  telephone.innerText = 'Tel: +43 18402 290 117';

  const email = document.createElement('p');
  email.innerText = 'E-mail: amigos@restaurante.com';

  const address = document.createElement('p');
  address.innerText = 'Dirección: 472 Calle de la República, Cuenca, Ecuador';

  const map = document.createElement('img');
  map.src = '../src/images/map.jpeg';

  text.appendChild(lineBreak1);
  text.appendChild(lineBreak2);
  text.appendChild(telephone);
  text.appendChild(email);
  text.appendChild(address);
  text.appendChild(map);

  contactCard.appendChild(title);
  contactCard.appendChild(text);
  contactSection.appendChild(contactCard);

  return contactSection;
}