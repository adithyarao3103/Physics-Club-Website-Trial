var bg = '/assets/images/bg.jpg';

var initial_height;
var req_height;

function initialise(){
window.scrollTo(0,0);
setTimeout(function(){
initial_height = document.getElementById("tit").getBoundingClientRect().top;
req_height = document.getElementById("title").getBoundingClientRect().top;
},1);
}
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

initialise();

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

let image = document.createElement('img');
image.src = bg;

image.addEventListener('load', (event)=> {
  document.getElementById('topcontent').style.backgroundImage = `url(${bg})`;
});

document.addEventListener('scroll', (event) => {
	scroly = this.scrollY;

	var current_height = document.getElementById("tit").getBoundingClientRect().top;

	

	if (current_height > req_height) {	
		document.getElementById('tit').style.color = "white";
		document.getElementById('title').style.color = "transparent";
		var beg = "scale(";
		var val = 0.32 + 0.68*(current_height - req_height)/(initial_height - req_height);
		var end = ")"
		inner = beg + val + end;
		document.getElementById('tit').style.transform = inner;
		document.getElementById("of").style.opacity = (current_height - req_height)/(initial_height - req_height) ;
		document.getElementById("we").style.opacity = (current_height - req_height)/(initial_height - req_height) ;
		val = (current_height - req_height)/(initial_height - req_height);
		inner = beg + val + end;
		document.getElementById("of").style.transform = inner;

	}
	else{
		if (current_height < req_height-120) {
		document.getElementById('navbar').style.background = "white";
		document.getElementById('bar1').style.background = "black";
		document.getElementById('bar2').style.background = "black";
		document.getElementById('bar3').style.background = "black";
		document.getElementById('title').style.color = "black";
		document.getElementById('navbar').setAttribute('class', 'hover');
	}
	else{
		document.getElementById('navbar').style.background = "transparent";
		document.getElementById('bar1').style.background = "white";
		document.getElementById('bar2').style.background = "white";
		document.getElementById('bar3').style.background = "white";
		document.getElementById('title').style.color = "white";
		document.getElementById('tit').style.color = "transparent";
		document.getElementById('navbar').setAttribute('class', '');
	}
}


if (isInViewport(document.getElementById("content"))) {
document.getElementById('line').style.opacity = 1;
document.getElementById('line').style.transform = 'translateY(0px)';
}




});


document.getElementById('bar1').style.background = "white";
document.getElementById('bar2').style.background = "white";
document.getElementById('bar3').style.background = "white";
document.getElementById('title').style.color = "transparent";
document.getElementById('navbar').style.background = "transparent";




