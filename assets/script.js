//**tableau des slides */

const slides = [
  {
    image: "assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// **Variables
let indexSlides = 0;

// Récupération des balises html

let dots = document.querySelectorAll(".dots .dot");
// console.log(dots);

let bannerImg = document.querySelector(".banner-img");
// console.log("bannerImg");

let bannerText = document.querySelector("#banner p");
// console.log("bannerText");

// ** Fonction pour changer la slide

function changeSlideWithIndex() {
  let currentSlide = slides[indexSlides];
  // console.log(currentSlide);
  bannerImg.src = currentSlide.image;
  bannerText.innerHTML = currentSlide.tagLine;
}
// ** Fonction pour faire en sorte que les dots soient déselectionnées

function unselectAllDots() {
  dots.forEach((dot) => {
    dot.classList.remove("dot_selected");
  });
}

// ** Fonction pour sélectionner la dot en même temps que la currentSlide

function changeDotSelectedWithIndex() {
  unselectAllDots();
  dots[indexSlides % slides.length].classList.add("dot_selected");
}

// ** Fonction qui détaille ce qui se passe quand l'utilisateur clique à droite ou à gauche (nextSlide / previousSlide) et qui gère les deux cas particuliers

function nextSlide() {
  if (indexSlides < slides.length - 1) {
    indexSlides++;
  } else {
    indexSlides = 0;
  }
  changeSlideWithIndex();
  changeDotSelectedWithIndex();
}

function previousSlide() {
  if (indexSlides > 0) {
    indexSlides--;
  } else {
    indexSlides = slides.length - 1;
  }
  changeSlideWithIndex();
  changeDotSelectedWithIndex();
}

// ** Reccuperation des id de chaque flèche et ajout d'un écouteur d'évenement qui applique la fonction correspondante pour faire marcher le carrousel.

let next = document.getElementById("droite").addEventListener("click", () => {
  nextSlide();
});

let previous = document
  .getElementById("gauche")
  .addEventListener("click", () => {
    previousSlide();
  });
