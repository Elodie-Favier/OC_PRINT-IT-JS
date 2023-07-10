//**tableau des slides */

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

//*Recuperation des elements html bullets point***//

let bulletsPoints = document.querySelectorAll("#banner .dots .dot")
console.log(bulletsPoints)
bulletsPoints[0].setAttribute("id", "first-dot")
bulletsPoints[0].classList.add("dot_selected")
bulletsPoints[1].setAttribute("id", "second-dot")
bulletsPoints[2].setAttribute("id", "third-dot")
bulletsPoints[3].setAttribute("id", "fourth-dot")

let indexBulletsPoints = bulletsPoints.length
console.log(indexBulletsPoints)
indexBulletsPoints = 0

let indexSlidesShow = slides.length 
console.log(indexSlidesShow)
// indexSlidesShow = 0
console.log(indexSlidesShow)
indexSlidesShow = 0

//*Recuperation des elements html img, p/span et arrow 

let imageBanner = document.querySelector("#banner .banner-img")
let texteBanner = document.querySelector("#banner p")
let listArrow = document.querySelectorAll(".arrow img")


//**Ecoute des évenements click sur les fleches et distinction de la fleche droite et de la flèche gauche */
//*

	for(let indexListArrow = 0; indexListArrow < listArrow.length; indexListArrow++) {
	let arrowClicked = listArrow[indexListArrow]
	arrowClicked.addEventListener("click", (event)=> {
			myArrow = event.target
			// console.log(`Ma flèche de ${myArrow.id}`)
		//* condition pour changer img et tagline au click droit
		slides[indexSlidesShow] === bulletsPoints[indexBulletsPoints]
		if(slides[indexSlidesShow] === bulletsPoints[indexBulletsPoints]) {
			bulletsPoints[indexBulletsPoints].classList.add("dot_selected")
		}else{
			bulletsPoints[indexBulletsPoints].classList.remove("dot_selected")
		}
			if (myArrow === listArrow[1]){
				indexSlidesShow++
				imageBanner.src = slides[indexSlidesShow].image,
				texteBanner.innerHTML = slides[indexSlidesShow].tagLine,
				console.log("Changement d'image !")
				// indexBulletsPoints
				// bulletsPoints[indexBulletsPoints].classList.remove("dot_selected")
				indexBulletsPoints++
				//*bulletsPoints[indexBulletsPoints].classList.add("dot_selected")
				
				if(slides[indexSlidesShow]=== slides[3] && myArrow === listArrow [1]){
				indexSlidesShow -= 4
				indexBulletsPoints -= 4
				
				// bulletsPoints[0].classList.add("dot_selected")
				// bulletsPoints[3].classList.remove("dot_selected")
				// fourthDot.classList.remove("dot_selected")
			}
				// if(bulletsPoints[3].classList.add("dot_selected")){
				// 	// indexBulletsPoints
				// bulletsPoints[indexBulletsPoints].classList.remove("dot_selected")
				// indexBulletsPoints++
				// bulletsPoints[indexBulletsPoints].classList.add("dot_selected")
				// 	// bulletsPoints[indexBulletsPoints].classList.add("dot_selected")
				// }
				
			}
		})

		}
	
// if(indexSlidesShow === slides[3] && myArrow === listArrow[1]){
			// 	indexSlidesShow -= 3
			// 	console.log("retour au debut")
			// 	slides[indexSlidesShow]

			// // 	// // 	indexBulletsPoints = 0
			// // 	// // 	console.log(indexBulletsPoints)
			// 	}

			//* condition pour changer img et tagline au click gauche
			// if(myArrow === listArrow[0]){
			// 	indexSlidesShow =  
			// 	indexSlidesShow--
			// 	imageBanner.src = slides[indexSlidesShow].image,
			// 	texteBanner.innerHTML = slides[indexSlidesShow].tagLine,
			// 	console.log("vous êtes revenu à l'image d'avant!")
			// 	indexBulletsPoints
			// 	bulletsPoints[indexBulletsPoints].classList.add("dot_selected")
			// 	indexBulletsPoints--
			// 	bulletsPoints[indexBulletsPoints].classList.remove("dot_selected")

			// 	// if(slides[indexSlidesShow] === slides[0], myArrow === listArrow[0]) {
			// 	// 	indexSlidesShow += 4
					
					
			// 	// }

			// }




// let arrowRight = document.querySelector(".arrow_right")
//  arrowRight.addEventListener("click", function() {
// 	//*arrowRight = arrowRightClicked
// 	indexSlidesShow++
// 	imageBanner.src = slides[indexSlidesShow].image,
// 	texteBanner.innerHTML = slides[indexSlidesShow].tagLine,
// 	console.log("Changement d'image !")
// 	indexBulletsPoints
// 	bulletsPoints[indexBulletsPoints].classList.remove("dot_selected")
// 	indexBulletsPoints++
// 	bulletsPoints[indexBulletsPoints].classList.add("dot_selected")
	

// 	let myFirstBulletSelected = document.getElementById("first-dot")
// 		console.log(myFirstBulletSelected)
//  }

//  )

//  if(slides[indexSlidesShow]=== slides[3]){
// 	indexSlidesShow -= 4
// 	bulletsPoints[0].classList.add("dot_selected")
	
// } */

 

//  let arrowLeft = document.querySelector(".arrow_left")
// 	arrowLeft.addEventListener("click", function() {
		
		
// 	})

	

// //*	if(indexBulletsPoints = [3]){
// //*		imageBanner.src = slides[0].image,
// //*		texteBanner.innerHTML = slides[0].tagLine,
// //*		console.log("Vous êtes revenu au debut du carousel")
// //*	}



