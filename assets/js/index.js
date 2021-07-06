//Mobile Devices...

if ( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	
//Change stuff optimising for mobile screen

id('we').style.fontSize = '15px';
id('we').style.position = "relative";
id('we').style.top = "-10px";
id('tit').style.fontSize = 'calc(37px + 2vw)';
id('of').innerHTML = '<br>of<br>';
id('of').setAttribute('class','of-mobile');
id('content').style.width = 'calc(102vw + 10px)';
id('topcontent').style.width = 'calc(102vw + 10px)';
id('fullscreen').style.width = screen.width + 'px';
id('fullscreen').style.height = screen.height + 'px';
id('line').style.fontSize = 'calc(10px + 1.5vw)';
id('pclogo').style.height = 'calc(100px + 5vw)';
id('pclogo').style.width = 'calc(100px + 5vw)';
id('name-hod').style.fontSize = 'calc(15px + 1.5vw)';
id('name-fac').style.fontSize = 'calc(15px + 1.5vw)';
id('posit-hod').style.fontSize = 'calc(10px + 1.25vw)';
id('posit-fac').style.fontSize = 'calc(10px + 1.25vw)';
id('state-hod').style.fontSize = 'calc(10px + 1vw)';
id('state-fac').style.fontSize = 'calc(10px + 1vw)';
id('l-image').style.left = '-10%';
id('l-title').style.fontSize = 'calc(20px + 4vw)';
id('l-date').style.fontSize = 'calc(13px + 1.25vw)';
id('l-descr').style.fontSize = 'calc(10px + 1.25vw)';
id('l-reg').style.fontSize = 'calc(10px + 1.25vw)';
id('footer').style.display = "none";
id('footer-mob').style.display = 'inline-block';
id('noti').style.width = 'calc(100vw)';
id('noti').style.borderRadius = '0';
id('noti').style.bottom = '0';
id('noti').style.left = '0';
id('innoti').style.fontSize = 'calc(7px + 0.6vw)'

//Scrollevent
	document.addEventListener('scroll', (event) => {
	scroly = this.scrollY;

//Bring content in	
	var content = id("content").querySelectorAll(".offsetdown");
for (var i = 0; i<content.length; i++) {
	if(content[i].getBoundingClientRect().top <=0.85*screen.height){
		content[i].style.opacity = 1;
		content[i].style.transform = 'translateY(0)';
	}
}

//Remove noti if already reached new

if (id('new').getBoundingClientRect().top <=0.65*screen.height) {
	id('noti').setAttribute('class','noticlose');
}});
}
	
//Desktop devices...

else{

//Initialising for scrolling scale options

var initial_height = 0.36*screen.height;
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

//ScrollEvent

document.addEventListener('scroll', (event) => {
	scroly = this.scrollY;


	if (scroly<50) {
		id('navbar').style.background = "transparent";
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

//Bringe in content

var content = id("content").querySelectorAll(".offsetdown");
for (var i = 0; i<content.length; i++) {
	if(content[i].getBoundingClientRect().top <=0.65*screen.height){
		content[i].style.opacity = 1;
		content[i].style.transform = 'translateY(0)';
	}
}

//Close noti if already seen new

if (id('new').getBoundingClientRect().top <=0.65*screen.height) {
	id('noti').setAttribute('class','noticlose');
}


});

//initialise navbar properties

id('bar1').style.background = "white";
id('bar2').style.background = "white";
id('bar3').style.background = "white";
id('title').style.color = "transparent";
id('navbar').style.background = "transparent";

//update navbar status based on position

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


}

//Common to both desktop and mobile devices


//choose background

var num = Math.ceil(6*Math.random());
var bg = '/assets/images/' + num + '.jpg';
let image = document.createElement('img');
image.src = bg;
image.addEventListener('load', (event)=> {
  id('topcontent').style.backgroundImage = `url(${bg})`;
});

//Read from latest.json and write in html entity

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
