

var num = Math.ceil(6*Math.random());
var bg = '/assets/images/' + num + '.jpg';

var initial_height = 0.36*screen.height;
var req_height = id("title").getBoundingClientRect().top;
var current_height = id("tit").getBoundingClientRect().top;



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

let image = document.createElement('img');
image.src = bg;

image.addEventListener('load', (event)=> {
  id('topcontent').style.backgroundImage = `url(${bg})`;
});

document.addEventListener('scroll', (event) => {
	scroly = this.scrollY;

	if (scroly<50) {
		id('navbar').style.background = "transparent";
	}

	var current_height = id("tit").getBoundingClientRect().top;

	

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

	}
	else{
		if (current_height < req_height-120) {
		id('navbar').style.background = "rgba(255,255,255,0.25)";
		id('navbar').style.backdropFilter = "blur( 4px )";
		id('navbar').setAttribute('class', 'hover');
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


var content = id("content").querySelectorAll(".offsetdown");
for (var i = 0; i<content.length; i++) {
	if(content[i].getBoundingClientRect().top <=0.65*screen.height){
		content[i].style.opacity = 1;
		content[i].style.transform = 'translateY(0)';
	}
}



});


id('bar1').style.background = "white";
id('bar2').style.background = "white";
id('bar3').style.background = "white";
id('title').style.color = "transparent";
id('navbar').style.background = "transparent";


function navbarloop(){
	var current_height = id('tit').getBoundingClientRect().top;
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
	}
	else{
		id('title').style.color = "white";
		id('tit').style.color = "transparent";
	}
	setTimeout(function(){navbarloop();},100);
}
navbarloop();


var oXHR = new XMLHttpRequest();
var latest;

// Initiate request.
oXHR.onreadystatechange = reportStatus;
oXHR.open("GET", "/assets/json/latest.json", true);  // get json file.
oXHR.send();

function reportStatus() {
    if (oXHR.readyState == 4) {		// Check if request is complete.
        latestdata = this.responseText;
        latest = JSON.parse(latestdata);
        writepage();
    }
}
function writepage(){

		id('l-image').setAttribute('src', '/assets/posters/' + latest.poster + '.png');
		id('l-title').innerHTML = latest.title; 
		id('l-date').innerHTML = latest.date;
		id('l-descr').innerHTML = latest.descr;
		id('l-reg').innerHTML = latest.linktitle;
		id('l-reg').setAttribute('href',latest.link);

}

function closenoti(){
	id('noti').setAttribute('class','noticlose');
}

function opennoti(){
	id('noti').setAttribute('class','notiopen');

}

window.addEventListener('load',()=>{
	if(latest.title != " "){
	setTimeout(function(){opennoti();},500);
}
});