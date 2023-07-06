//**recup des images et tagline depuis fichier json */
const slides = [
	{	
		"id": 1,
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"id": 2,
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"id": 3,
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"id": 4,
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//**Ecoute des évenements click sur les fleches */
//**let listArrow = document.querySelectorAll(".arrow img")
//**for(let i = 0; i < listArrow.length; i++) {
//**	let arrowClicked = listArrow[i]
//**	arrowClicked.addEventListener("click", (event)=> {
	//**	myArrow = event.target
//**		console.log(`Ma flèche de ${myArrow.id}`)
//**	})
//**}
let i = 0

let imageBanner = document.querySelector("#banner .banner-img")
let texteBanner = document.querySelector("#banner p")
let arrowRight = document.querySelector(".arrow_right")
 arrowRight.addEventListener("click", function() {
	i++
	imageBanner.src = slides[i].image,
	texteBanner.innerHTML = slides[i].tagLine,
	console.log("Changement d'image !")
}

 )
 let arrowLeft = document.querySelector(".arrow_left")
	arrowLeft.addEventListener("click", function() {
		i--
		imageBanner.src = slides[i].image,
		texteBanner.innerHTML = slides[i].tagLine,
		console.log("vous êtes revenu à l'image d'avant!")
	})
//*if(arrowRight = onclick){
	//*let id = 0
	//*const visuels = slides[id]

	
	//*let texteBanner = document.querySelector("#banner p")
	//*texteBanner.innerText = slides[id].tagLine
	//*index++ 
	//*Récupération des éléments du tableau
	

	//*Récupération des éléments du DOM	

