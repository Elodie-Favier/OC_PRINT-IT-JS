let arrowLeft = document.querySelector(".arrow_left")
let arrowRight = document.querySelector(".arrow_right")

//* Récupération des balises html img, p, span dans #banner

let imageBanner = document.querySelector("#banner .banner-img")


let texteBanner = document.querySelector("#banner p")

let spanBanner = document.querySelector("#banner span")

//**tableau slideshow */
const slides = [
	{
		"image":"images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



//**on acceède à l'indice i de la liste slides pour configurer la source de l'image et la tagline */
	//**imageBanner.src = slides[i].image
	//**texteBanner = slides[i].tagLine 


//**Ecoute des évenements click sur les fleches */
let listArrow = document.querySelectorAll(".arrow img")
for(let i = 0; i < listArrow.length; i++) {
	let arrowClicked = listArrow[i]
	arrowClicked.addEventListener("click", (event)=> {
		myArrow = event.target
		console.log(`Ma flèche de ${myArrow.id}`)
	})
}
 
	if(arrowRight.addEventListener("click", () => {
		for(let index = 0; index < slides.length; index++) {
			imageBanner.src = slides[index].image
			texteBanner = slides[index].tagLine 
		}
	}))
	console.log("nouvelle image")
