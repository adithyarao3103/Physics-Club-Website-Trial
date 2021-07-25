particlesJS('stateholder',{
  "particles": {
    "number": {
      "value": 70,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.7536036686067957,
      "random": false,
      "anim": {
        "enable": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "bubble": {
        "distance": 400,
        "size": 4,
        "duration": 3,
        "opacity": 8,
        "speed": 3
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": false
});






//Mobile Devices...

if ( screen.width <= 451) {
	

	id('of').innerHTML = '<br>of<br>';

//Scrollevent
function chnoti(){	
//Remove noti if already reached new

if (id('new').getBoundingClientRect().top <=0.65*screen.height) {
	id('noti').setAttribute('class','noticlose');
}

		spaceship = id('spaceship')
var xvalue = "center";

spaceship_init = spaceship.getBoundingClientRect().top;

var scrolltotop = document.scrollingElement.scrollTop;
	
	var factor = -0.2;
	var yvalue = (scrolltotop - 600)* factor;
	//spaceship.style.backgroundPosition = xvalue + " " + yvalue + "px";


for(i = 0; i < whites.length; i++ ){
	if(whites[i].getBoundingClientRect().top < window.innerHeight*0.8)
	{
		whites[i].style.opacity = 1;
		whites[i].style.transform = 'translateY(0)';
	}  
}

for (var i = offset.length - 1; i >= 0; i--) {
	if(offset[i].getBoundingClientRect().top < window.innerHeight*0.8)
	{
	//offset[i].style.opacity = 1;
	if(offset[i].getAttribute('id')!='pclogo'){
	offset[i].style.transform  = 'translateY(0)';
}
else{
	offset[i].style.transform  = 'translateY(0) translateX(-50%)';

}

offset[i].style.opacity = 1;
	}
}

requestAnimationFrame(chnoti);
};

requestAnimationFrame(chnoti);
}

//Desktop devices...

else{

//Initialising for scrolling scale options

//var initial_height = 0.36*screen.height;
var initial_height = 0.45*window.innerHeight;
var req_height = id("title").getBoundingClientRect().top;
var current_height = id("tit").getBoundingClientRect().top;

//Initialise transforrmations on page load

if (current_height>0) {

	var beg = "scale(";
	var val = 0.32 + 0.68*(current_height - req_height)/(initial_height - req_height);
	var end = ")"
	inner = beg + val + end;
	id('tit').style.transform = inner;
	id("of").style.opacity = (current_height - req_height)/(initial_height - req_height) ;
	id("we").style.opacity = (current_height - req_height)/(initial_height - req_height) ;
	val = (current_height - req_height)/(initial_height - req_height);
	inner = beg + val + end;
	id("of").style.transform = inner;
}
else{

}

//ScrollEvent


var spaceship_init = id('spaceship').getBoundingClientRect().top;

requestAnimationFrame(animationloop)


id('title').style.color = "transparent";
id('navbar').style.background = "transparent";
id('navbar').setAttribute('class',' ');


}

//Common to both desktop and mobile devices


//choose background

var num = Math.ceil(12*Math.random());
var bg = '/assets/images/' + num + '.jpg';
let image = document.createElement('img');
image.src = bg;
image.addEventListener('load', (event)=> {
	id('topcontent').style.backgroundImage = `url(${bg})`;
});


function closenoti(){
	id('noti').setAttribute('class','noticlose');
}

function opennoti(){
	id('noti').setAttribute('class','notiopen');

}

window.addEventListener('load',()=>{
	try{
		id('l-holder')
		if (id('new').getBoundingClientRect().top <=0.65*screen.height) {}
		else{setTimeout(function(){opennoti();},500);}
	}
	catch(e){}
});


id('title').style.color = "transparent";
id('navbar').style.background = "transparent";
id('navbar').setAttribute('class','noblurbg');

var scrolltotop = document.scrollingElement.scrollTop;
if(screen.width >= 750){
	var target2 = id("spaceship");
var xvalue = "center";
	var factor = -0.6;
	var yvalue = (scrolltotop + spaceship_init)* factor;
	//target2.style.backgroundPosition = xvalue + " " + yvalue + "px";

}

target = id("topcontent")


//animationloop

function animationloop(){

	spaceship = id('spaceship')
var xvalue = "center";


var scrolltotop = document.scrollingElement.scrollTop;
	if(screen.width >= 750){
	var factor = -0.6;
	var yvalue = (scrolltotop + spaceship_init)* factor;
	//spaceship.style.backgroundPosition = xvalue + " " + yvalue + "px";

	}

var current_height = id("tit").getBoundingClientRect().top;

	//Transform physics club text

	if (current_height > req_height) {	
		id('tit').style.color = "white";
		id('title').style.color = "transparent";
		var beg = "scale(";
		var val = 0.32 + 0.68*(current_height - req_height)/(initial_height - req_height);
		var end = ")"
		inner = beg + val + end;
		id('tit').style.transform = inner;
		id("of").style.opacity = (current_height - req_height)/(initial_height - req_height) ;
		id("we").style.opacity = (current_height - req_height)/(initial_height - req_height) ;
		val = (current_height - req_height)/(initial_height - req_height);
		inner = beg + val + end;
		id("of").style.transform = inner;
		id('navbar').setAttribute('class', '');
		id('navbar').style.background = "transparent";
	}
	else{
		if (current_height < req_height-120) {
			id('navbar').style.background = "rgba(255,255,255,0.25)";
			id('navbar').setAttribute('class', 'blurback');
			id('title').style.color = "white";
		}
		else{
			id('navbar').style.background = "transparent";
			id('navbar').style.backdropFilter = "";
			id('bar1').style.background = "white";
			id('bar2').style.background = "white";
			id('bar3').style.background = "white";
			id('title').style.color = "white";
			id('tit').style.color = "transparent";
			id('navbar').setAttribute('class', '');
		}
	}

if (id('new').getBoundingClientRect().top <=0.65*screen.height) {
	id('noti').setAttribute('class','noticlose');
}

for(i = 0; i < whites.length; i++ ){
	if(whites[i].getBoundingClientRect().top < window.innerHeight*0.8)
	{
		whites[i].style.opacity = 1;
		whites[i].style.transform = 'translateY(0)';
	}  
}

for (var i = offset.length - 1; i >= 0; i--) {
	if(offset[i].getBoundingClientRect().top < window.innerHeight*0.8)
	{
	//offset[i].style.opacity = 1;
	if(offset[i].getAttribute('id')!='pclogo'){
	offset[i].style.transform  = 'translateY(0)';
}
else{
	offset[i].style.transform  = 'translateY(0) translateX(-50%)';

}

offset[i].style.opacity = 1;
	}
}


/*
	if (current_height >req_height) {
		id('tit').style.color = "white";
		id('title').style.color = "transparent";
		var beg = "scale(";
		var val = 0.32 + 0.68*(current_height - req_height)/(initial_height - req_height);
		var end = ")"
		inner = beg + val + end;
		id('tit').style.transform = inner;
		id("of").style.opacity = (current_height - req_height)/(initial_height - req_height) ;
		id("we").style.opacity = (current_height - req_height)/(initial_height - req_height) ;
		val = (current_height - req_height)/(initial_height - req_height);
		inner = beg + val + end;
		id("of").style.transform = inner;
		id('navbar').setAttribute('class', '');
		id('navbar').style.background = "transparent";
	}
	else{
		id('title').style.color = "white";
		id('tit').style.color = "transparent";
	}
*/
requestAnimationFrame(animationloop);
}

whites = document.getElementsByClassName('scrollR');

offset = document.getElementsByClassName('offsetdown');

for (var i = offset.length - 1; i >= 0; i--) {
	offset[i].style.transition = 'all 2s';
	offset[i].style.opacity = 0;
	if(offset[i].getAttribute('id')!='pclogo'){
	offset[i].style.transform  = 'translateY(50px)';
}
else{
	offset[i].style.transform  = 'translateY(50px) translateX(-50%)';

}
}

for (var i = whites.length - 1; i >= 0; i--) {
	whites[i].style.transition = 'all 1s';
	whites[i].style.opacity = 0;
	whites[i].style.transform  = 'translateY(75px)';
}

