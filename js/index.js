const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active"); // Ajoute/enlève la classe active
  menu.classList.toggle("active"); // Affiche/masque le menu
});

/*Filtres des catégories*/
