const dishes = [
  {
    name: "Dahl Indiano Auténtico",
    description:
      "Ese plato sencillo y delicisio tiene su origenes en India del norte y Nepal. Hecho de lentejas y cebollas y lleno de proteína, nuestro dahl es perfecto para ellos que desean a construír musclos - o justo disfrutar sus lindos sabores.",
    "image URL": "../src/dahl.jpg"
  },
  {
    name: "Ensalada Temporada y Local",
    description: "Aquí a Amigos, creemos fuerzamente en nuestra obligación de hacer bueno durante nustro tiempo sobre el planeta. Por eso, estámos todos muy orgullos a offrir esta ensalada temporada y local que hace bueno para la salud de nuestros clientes, nuestra comunidad local, y el planeta.",
    "image URL": "../src/salad.jpg"
  },
  {
    name: "La Pizza de la Amistad",
    description: "Nuestro tercer plato - y probablamente nuestro favorito - es \"la Pizza de Amistad\". Desiñada para que la coman cuatro amigos, esta pizza mide cincuenta centimetros de ancho y puede ordenarse con cualquieres ingredientes usted y sus amigos quieran. Como si todo eso no fuera suficiente, Amigos ofrecemos una descuenta de 15% en todas las cervezas para las mesas que ordenan la Pizza de Amistad. Disfruta!",
    "image URL": "../src/pizza.jpg"
  }
];

function populateMenu(menuSection, dishesArray) {
  for (let i = 0; i < dishesArray.length; i += 1) {
    let card = document.createElement("div");
    card.classList.add("card");

    let cardImage = document.createElement("img");
    cardImage.classList.add("card-image");
    cardImage.src = dishesArray[i]["image URL"];

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = dishesArray[i].name;

    let cardBody = document.createElement("p");
    cardBody.classList.add("card-body");
    cardBody.innerText = dishesArray[i].description;

    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    card.appendChild(cardBody);

    menuSection.appendChild(card);
  }
}

export default function generateMenu() {
  var menuSection = document.createElement("section");
  menuSection.classList.add(
    "landing-page-section",
    "menu-tab",
    "container-fluid"
  );
  menuSection.id = "landing-page-section";

  populateMenu(menuSection, dishes);
  return menuSection;
}
