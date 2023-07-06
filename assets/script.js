//**recup des images et tagline depuis fichier json */
const slides = [
	{	
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let bulletsPoints = document.querySelectorAll("#banner .dots .dot")
console.log(bulletsPoints)
bulletsPoints[0].setAttribute("id", "first-dot")
bulletsPoints[0].classList.add("dot_selected")
bulletsPoints[1].setAttribute("id", "second-dot")
bulletsPoints[2].setAttribute("id", "third-dot")
bulletsPoints[3].setAttribute("id", "fourth-dot")

let indexBulletsPoints = bulletsPoints.length
console.log(indexBulletsPoints)

//**Ecoute des évenements click sur les fleches */
//*
//	let listArrow = document.querySelectorAll(".arrow img")
//	for(let i = 0; i < listArrow.length; i++) {
//	let arrowClicked = listArrow[i]
//	arrowClicked.addEventListener("click", (event)=> {
//			myArrow = event.target
//			console.log(`Ma flèche de ${myArrow.id}`)
//		})
//	}

let indexSlidesShow = 0
indexBulletsPoints = 0
let imageBanner = document.querySelector("#banner .banner-img")
let texteBanner = document.querySelector("#banner p")


let arrowRight = document.querySelector(".arrow_right")
 arrowRight.addEventListener("click", function() {
	//*arrowRight = arrowRightClicked
	indexSlidesShow++
	imageBanner.src = slides[indexSlidesShow].image,
	texteBanner.innerHTML = slides[indexSlidesShow].tagLine,
	console.log("Changement d'image !")
	indexBulletsPoints
	bulletsPoints[indexBulletsPoints].classList.remove("dot_selected")
	indexBulletsPoints++
	bulletsPoints[indexBulletsPoints].classList.add("dot_selected")
	
	if(slides[indexSlidesShow]=== slides[3])
	indexSlidesShow -= 4
	bulletsPoints[indexBulletsPoints].classList.add("dot_selected")
		
	
}

 )
 let arrowLeft = document.querySelector(".arrow_left")
	arrowLeft.addEventListener("click", function() {
		indexSlidesShow--
		imageBanner.src = slides[indexSlidesShow].image,
		texteBanner.innerHTML = slides[indexSlidesShow].tagLine,
		console.log("vous êtes revenu à l'image d'avant!")
		indexBulletsPoints
		bulletsPoints[indexBulletsPoints].classList.remove("dot_selected")
		indexBulletsPoints--
		bulletsPoints[indexBulletsPoints].classList.add("dot_selected")

		
	})

	

//*	if(indexBulletsPoints = [3]){
//*		imageBanner.src = slides[0].image,
//*		texteBanner.innerHTML = slides[0].tagLine,
//*		console.log("Vous êtes revenu au debut du carousel")
//*	}



