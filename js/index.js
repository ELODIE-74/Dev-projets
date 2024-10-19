const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active"); // Ajoute/enlève la classe active
  menu.classList.toggle("active"); // Affiche/masque le menu
});

/*Filtres des catégories*/
document.addEventListener("DOMContentLoaded", function () {
  const filters = document.querySelectorAll("#Filtres div");
  const imagesContainer = document.getElementById("images");

  // Définir les données JSON directement dans le code
  const data = [
    {
      id: 1,
      nom: "Booki",
      chemin: "../images/Booki_1.png",
      chemingithub: "https://github.com/ELODIE-74/booki-starter-code.git",
      description:
        "Création de la page d'accueil d'une agence de voyage avec HTML et CSS",
      categorie: "base et responsive",
      style: "color: white; font-weight: bold;", // Exemple de style
    },
    {
      id: 2,
      nom: "Ohmyfood",
      chemin: "../images/ohmyfood_1.png",
      chemingithub: "https://github.com/ELODIE-74/ohmyfood.git",
      description:
        "Améliorer l'interface d'un site mobile avec des animations CSS(Sass)",
      categorie: "base et responsive",
    },
    {
      id: 3,
      nom: "Print it!",
      chemin: "../images/printit.png",
      chemingithub: "https://github.com/ELODIE-74/Print-it-JS.git",
      description: "Premier pas sur le langage javascript",
      categorie: "javascript",
    },
    {
      id: 4,
      nom: "Sophie Bluel",
      chemin: "../images/sophie-bluel.png",
      chemingithub:
        "https://github.com/ELODIE-74/Portfolio-architecte-sophie-bluel.git",
      description: "Créer une page web dynamique avec Javascript",
      categorie: "javascript",
    },
    {
      id: 5,
      nom: "Qwenta",
      chemin: "../images/qwenta.png",
      chemingithub: "https://github.com/ELODIE-74/Projet7QwentaMenuMaker.git",
      description: "Planifier le développement du site de votre client",
      categorie: "developpement web",
    },
    {
      id: 6,
      nom: "KASA",
      chemin: "../images/kasa.png",
      chemingithub: "https://github.com/ELODIE-74/KASA.git",
      description:
        "Créer une application web de location immobilière avec React",
      categorie: "react",
    },
    {
      id: 7,
      nom: "Nina Carducci",
      chemin: "../images/ninacarducci.png",
      chemingithub: "https://github.com/ELODIE-74/ninacarducci.git",
      description: "Optimiser le référencement d'un site de photographe",
      categorie: "developpement web",
    },
    {
      id: 8,
      nom: "724Events",
      chemin: "../images/724_events_1.png",
      chemingithub:
        "https://github.com/ELODIE-74/Debuggez-une-application-React.JS.git",
      description: "Débugger le site d'une agence d'évènementiel",
      categorie: "react",
    },
    {
      id: 9,
      nom: "ArgentBank",
      chemin: "../images/edit-username.png",
      chemingithub: "https://github.com/ELODIE-74/ArgentBank-website.git",
      description:
        "Implémentez le front-end d'une application bancaire avec React",
      categorie: "react",
    },
    {
      id: 10,
      nom: "Portfolio",
      chemin: "../images/portfolioprojet.png",
      chemingithub: "https://github.com/ELODIE-74/dev-p12.git",
      description: "Créer et publier votre portfolio de développeur",
      categorie: "base et responsive",
    },
  ];

  // Afficher toutes les images au départ
  displayImages(data);

  filters.forEach((filter) =>
    filter.addEventListener("click", () => {
      const category = filter.getAttribute("data-category");
      const filteredImages =
        category === "tous"
          ? data
          : data.filter((image) => image.categorie === category);

      displayImages(filteredImages);
    })
  );

  function displayImages(images) {
    imagesContainer.innerHTML = ""; // Vider le conteneur
    images.forEach((image) => {
      const imageCard = document.createElement("div");
      imageCard.classList.add("image-card");

      const imgElement = document.createElement("img");
      imgElement.src = image.chemin;
      imgElement.alt = image.nom;

      const titleElement = document.createElement("h3");
      titleElement.textContent = image.nom;

      const linkElement = document.createElement("a");
      linkElement.href = image.chemingithub;
      linkElement.textContent = "Voir sur GitHub";
      linkElement.target = "_blank";

      imageCard.appendChild(imgElement);
      imageCard.appendChild(titleElement);
      imageCard.appendChild(linkElement);
      imagesContainer.appendChild(imageCard);
    });
  }
});
console.log("Données :", data);
