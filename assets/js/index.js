var bg = '/assets/images/bg.jpg';

let image = document.createElement('img');
image.src = bg;

image.addEventListener('load', (event)=> {
  document.getElementById('topcontent').style.backgroundImage = `url(${bg})`;
});

document.addEventListener('scroll', (event) => {
	scroly = this.scrollY;
	if (scroly > 75) {
		document.getElementById('navbar').style.background = "white";
	}
	else{
		document.getElementById('navbar').style.background = "transparent";
	}
});