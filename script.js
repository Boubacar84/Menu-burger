// Récupération des éléments
const sidenav = document.getElementById("mySidenav");
const openBtn = document.querySelector(".openBtn");
const closeBtn = document.getElementById("closeBtn");

// Ouvrir le menu
openBtn.addEventListener("click", () => {
    sidenav.style.width = "250px"; // Largeur de la barre latérale
});

// Fermer le menu
closeBtn.addEventListener("click", () => {
    sidenav.style.width = "0";
});
