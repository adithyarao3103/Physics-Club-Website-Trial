var bg = '/assets/images/bg.jpg';

let image = document.createElement('img');
image.src = bg;

image.addEventListener('load', (event)=> {
  document.getElementById('topcontent').style.backgroundImage = `url(${bg})`;
console.log("loaded")});

document.addEventListener('scroll', (event) => {
	scroly = this.scrollY;
	if (scroly > 750) {
		document.getElementById('navbar').background = "white";
	}
	else{
		document.getElementById('navbar').background = "transparent";
	}
});