var bg = '/assets/images/bg.jpg';

let image = document.createElement('img');
image.src = bg;

image.addEventListener('load', (event)=> {
  document.getElementById('topcontent').style.backgroundImage = `url(${bg})`;
});

document.addEventListener('scroll', (event) => {
	scroly = this.scrollY;
	if (scroly > 300) {
		document.getElementById('navbar').style.background = "white";
		document.getElementById('bar1').style.background = "black";
		document.getElementById('bar2').style.background = "black";
		document.getElementById('title').style.color = "black";
		document.getElementById('bar3').style.background = "black";

	}
	else{
		document.getElementById('navbar').style.background = "transparent";
		document.getElementById('bar1').style.background = "white";
		document.getElementById('bar2').style.background = "white";
		document.getElementById('bar3').style.background = "white";
		document.getElementById('title').style.color = "transparent";
	}

	if (scroly < 260) {
		var beg = "scale(";
		var val = 1 - 0.65*scroly/260;
		var end = ")"
		inner = beg + val + end;
		console.log(inner);
		document.getElementById('tit').style.transform = inner;
		document.getElementById("of").style.opacity = 1 - scroly/260;
		document.getElementById("of").style.transform = inner;

	}

});


document.getElementById('bar1').style.background = "white";
document.getElementById('bar2').style.background = "white";
document.getElementById('bar3').style.background = "white";
document.getElementById('title').style.color = "transparent";

