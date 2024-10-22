
// carrousel images
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// Variables du projet
const left = document.querySelector(".arrow_left")
const right = document.querySelector(".arrow_right")
const bannerImg = document.querySelector(".banner-img")
const bannerTxt = document.querySelector("#banner p")
const dots = document.querySelector(".dots")
let indexSlideAffichee = 0

//Fonctionnement du carrousel
function main(){
	displayDots()
	clickRight()
	clickLeft()
}
main()

// Dots
function displayDots(){
	// création des dots dans le fichier html
	for(let i =0; i<slides.length; i++){ 
		const dot = document.createElement("div")
		dot.classList.add("dot")
		dots.appendChild(dot)
		// Chargement du "dot_selected" sur la première slide
		if (i == indexSlideAffichee){
			dot.classList.add("dot_selected")	
		}
	}
}

// Arrow Right
function clickRight(){
	right.addEventListener("click", () =>{
		const slideDots = document.querySelectorAll(".dots .dot") //Création const dot selected
		slideDots[indexSlideAffichee].classList.remove("dot_selected") //Enlever le dot selected de l'ancien slide
		indexSlideAffichee++ // Changement de slide "next"
		console.log(indexSlideAffichee)
		// création de la boucle infinie
		if (indexSlideAffichee > slides.length - 1) {
			indexSlideAffichee=0
		} 
		slideDots[indexSlideAffichee].classList.add("dot_selected") // Ajout dot selected à la slide en cours
		bannerImg.src = "./assets/images/slideshow/"+ slides[indexSlideAffichee].image // Chargement nouvelle image
		bannerTxt.innerHTML=slides[indexSlideAffichee].tagLine // Chargement nouveau texte descriptif
	})
}

// Arrow Left
function clickLeft() {
	left.addEventListener("click", () =>{
		const slideDots = document.querySelectorAll(".dots .dot") //Création const dot selected
		slideDots[indexSlideAffichee].classList.remove("dot_selected") //Enlever le dot selected de l'ancien slide
		indexSlideAffichee-- // changement slide "prev"
		console.log(indexSlideAffichee)
		// création de la boucle infinie
		if (indexSlideAffichee < 0) {
			indexSlideAffichee = slides.length - 1
		} 
		slideDots[indexSlideAffichee].classList.add("dot_selected") // Ajout dot selected à la slide en cours
		bannerImg.src = "./assets/images/slideshow/"+ slides[indexSlideAffichee].image // Chargement nouvelle image
		bannerTxt.innerHTML=slides[indexSlideAffichee].tagLine // Chargement nouveau texte descriptif

	})
}


