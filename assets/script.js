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
];

// Define the variables with a general scope"
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const imageSlide = document.querySelector(".banner-img");
const tagline = document.querySelector(".banner-tagline");
const dots = document.querySelector(".dots");
const allDots = document.querySelectorAll(".dot");

// call the function when click on the arrows
leftArrow.addEventListener('click',slidePrevious);
rightArrow.addEventListener('click',slideNext); 

// Create as many dots as slides in  the banner
for(let i = 0; i< slides.length; i++){ 
	const dotDiv = document.createElement("div");
	dotDiv.className = "dot";  
	dots.appendChild(dotDiv); 
}
 
// add dot selected class to the elements with dot class
allDots[0].classList.add("dot_selected"); 


let index = 0; 

// groups elements from the banners by their index
function updateCurrentSlide(){
	imageSlide.src = "./assets/images/slideshow/" + slides[index].image;
	tagline.innerHTML = slides[index].tagLine;
	allDots[index].classList.add("dot_selected");
}
// delete the dot selected on the dot
function removeClassCss(){
	allDots[index].classList.remove("dot_selected");
}
//check if we are on the last slide 
const lastSlide = slides.length-1;

// changing slide when click on left arrow 
//step1 delete the dot selected to prepare the new one
//step2 check if we are on the last/first slide
//step3 reduce the index by 1  that will make change index of image /tagline/dot
//step4 apply the new index to the element of the slider
function slidePrevious(){
	removeClassCss();
	if(index === 0){
		index = lastSlide; //if we are on the first slide make the next left click goes to the last slide 
	}else{
		index --;
	};
	updateCurrentSlide();
}

// changing slide when click on right arrow 
//step1 delete the dot selected to prepare the new one
//step2 check if we are on the last/first slide
//step3 adding 1 to the index  that will make change index of image /tagline/dot
//step4 apply the new index to the element of the slider
function slideNext (){
	removeClassCss();
	if (index === lastSlide){
		index = 0;//if we are on the last slide make the next right click goes to the first slide 
	}else{
		index ++;
	};	
	updateCurrentSlide();
}
