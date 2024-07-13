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
/* variables */

const dotsContainer = document.querySelector(".dots");
let indexUser = 2; /* inder utilisateur */ 
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const img = document.querySelector(".banner-img");
const texteImage = document.querySelector("#banner p");


/* méthode pour créer les dots */

const displayDots = ()=>{
	dotsContainer.innerHTML = ""; /* on s'assure qu'au départ on a pas de dots déjà présent */
	for(let i = 0;i < slides.length;i++){
		let dot = document.createElement("div");
		dot.classList.add("dot");
		dotsContainer.appendChild(dot);
		if(indexUser === i){
			dot.classList.add("dot_selected");
		}
	}
	
}

displayDots()

const tabDots = document.querySelectorAll(".dots .dot");

const whenClickRight = ()=> {
	console.log("les points sont", tabDots)
	if(tabDots.length > 0){
		arrowRight.style.cursor = "pointer";
		tabDots[indexUser].classList.remove("dot_selected");
		indexUser++;
		if(indexUser >= slides.length){
			indexUser= 0;
		}
		tabDots[indexUser].classList.add("dot_selected");
		img.src = "./assets/images/slideshow/" + slides[indexUser].image;
		texteImage.innerHTML = slides[indexUser].tagLine;
	} else{
   console.error("il n'y a pas de slides");
	}
}

arrowRight.addEventListener("click",whenClickRight);

const whenClickLeft = () => {
	if(tabDots.length > 0){
		arrowLeft.style.cursor = "pointer";
		tabDots[indexUser].classList.remove("dot_selected");
		indexUser--;
		if(indexUser < 0){
			indexUser= slides.length -1;
		}
		tabDots[indexUser].classList.add("dot_selected");
		img.src = "./assets/images/slideshow/" + slides[indexUser].image;
		texteImage.innerHTML = slides[indexUser].tagLine;
	} else{
		console.error("il n'y a pas de slides");
	}
}

arrowLeft.addEventListener("click",whenClickLeft);



