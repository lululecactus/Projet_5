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
//define variables
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const dotsDiv = document.querySelector('.dots');

// add a message in the console for the  click on the arrow
leftArrow.addEventListener('click', () => {
	console.log('you clicked on the left arrow!');
})

rightArrow.addEventListener('click', () => {
	console.log('you clicked on the right arrow!');
})

//adding  dot on the slide
for (let i = 0; i < slides.length; i++) {
  const dotDiv = document.createElement('div');
  dotDiv.className = "dot"; 
  dotsDiv.appendChild(dotDiv);
}


// select all the elements with dot class
const allDots = document.querySelectorAll(".dot"); 
// create the selected dot
allDots[0].classList.add("dot_selected"); 

