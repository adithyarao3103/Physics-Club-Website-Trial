var bg = '/assets/images/bg.jpg';

let image = document.createElement('img');
image.src = bg;

image.addEventListener('load', (event)=> {
  document.getElementById('topcontent').style.backgroundImage = `url(${bg})`;
});

document.addEventListener('scroll', (event) => {
	scroly = this.scrollY;
	if (scroly > 350) {
		document.getElementById('navbar').style.background = "white";
		document.getElementById('bar1').style.background = "black";
		document.getElementById('bar2').style.background = "black";
		document.getElementById('bar3').style.background = "black";

	}
	else{
		document.getElementById('navbar').style.background = "transparent";
		document.getElementById('bar1').style.background = "white";
		document.getElementById('bar2').style.background = "white";
		document.getElementById('bar3').style.background = "white";
	}

	if (scroly < 250) {
		var beg = "scale(";
		var val = 1 - 0.63*scroly/250;
		var end = ");"
		document.getElementById('tit').style.transform = beg + val + end;
		beg = "opacity(";
		val = 1-scroly/250;
		document.getElementById("of").opacity = beg+val+end;
	}
	else{
		document.getElementById('tit').style.position = "fixed";
	}

});


document.getElementById('bar1').style.background = "white";
document.getElementById('bar2').style.background = "white";
document.getElementById('bar3').style.background = "white";
