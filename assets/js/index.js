var num = Math.ceil(6*Math.random());
var bg = '/assets/images/' + num + '.jpg';

var initial_height = 0.36*screen.height;
var req_height = document.getElementById("title").getBoundingClientRect().top;
var current_height = document.getElementById("tit").getBoundingClientRect().top;

if (current_height>0) {

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

let image = document.createElement('img');
image.src = bg;

image.addEventListener('load', (event)=> {
  document.getElementById('topcontent').style.backgroundImage = `url(${bg})`;
});

document.addEventListener('scroll', (event) => {
	scroly = this.scrollY;

	if (scroly<50) {
		document.getElementById('navbar').style.background = "transparent";
	}

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
		document.getElementById('navbar').style.background = "rgba(255,255,255,0.25)";
		document.getElementById('navbar').style.backdropFilter = "blur( 4px )";
		document.getElementById('navbar').setAttribute('class', 'hover');
	}
	else{
		document.getElementById('navbar').style.background = "transparent";
		document.getElementById('navbar').style.backdropFilter = "";
		document.getElementById('bar1').style.background = "white";
		document.getElementById('bar2').style.background = "white";
		document.getElementById('bar3').style.background = "white";
		document.getElementById('title').style.color = "white";
		document.getElementById('tit').style.color = "transparent";
		document.getElementById('navbar').setAttribute('class', '');
	}
}


var content = document.getElementById("content").querySelectorAll(".offsetdown");
for (var i = 0; i<content.length; i++) {
	if(content[i].getBoundingClientRect().top <=0.75*screen.height){
		content[i].style.opacity = 1;
		content[i].style.transform = 'translateY(0)';
	}
}



});


document.getElementById('bar1').style.background = "white";
document.getElementById('bar2').style.background = "white";
document.getElementById('bar3').style.background = "white";
document.getElementById('title').style.color = "transparent";
document.getElementById('navbar').style.background = "transparent";


function navbarloop(){
	var current_height = document.getElementById('tit').getBoundingClientRect().top;
	if (current_height >req_height) {
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
		document.getElementById('navbar').setAttribute('class', '');
	}
	else{
		document.getElementById('title').style.color = "white";
		document.getElementById('tit').style.color = "transparent";
	}
	setTimeout(function(){navbarloop();},100);
}
navbarloop();