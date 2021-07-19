//Mobile Devices...

if ( screen.width <= 451) {
	

id('of').innerHTML = '<br>of<br>';

//Scrollevent
	document.addEventListener('scroll', (event) => {
	scroly = this.scrollY;

	var beg = 'scale(';
	var val = 1 + scroly/100;
	var end = ')';
	var val1 = 1 - scroly/150;

	inner1 = beg + val + end;
	inner2 = beg + val1 + end;

	if(val <= 4){

	id('topcontent').style.transform = inner1;
	id('titleholder').style.transform = inner2;
}

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
		id('navbar').setAttribute('class', 'blurback');
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

id('title').style.color = "transparent";
id('navbar').style.background = "transparent";
id('navbar').setAttribute('class',' ');

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

var num = Math.ceil(13*Math.random());
var bg = '/assets/images/' + num + '.jpg';
let image = document.createElement('img');
image.src = bg;
image.addEventListener('load', (event)=> {
  id('topcontent').style.backgroundImage = `url(${bg})`;
});

//Read from latest.json and write in html entity

var oXHR = new XMLHttpRequest();
var index;

// Initiate request.
oXHR.onreadystatechange = reportStatus;
oXHR.open("GET", "/assets/json/index.json", true);  // get json file.
oXHR.send();

function reportStatus() {
    if (oXHR.readyState == 4) {		// Check if request is complete.
        indexdata = this.responseText;
        index = JSON.parse(indexdata).index;
        writepage();
    }
}
function writepage(){

	if(index[0].title !== " " && index[0].title !== ''){
		id('l-image').setAttribute('src', '/assets/posters/' + index[0].poster + '.png');
		id('l-title').innerHTML = index[0].title; 
		id('l-date').innerHTML = index[0].date;
		id('l-descr').innerHTML = index[0].descr + '<br><br><a id="l-reg" href="' + index[0].link + '">' + index[0].linktitle + '</a>';
	}
	else{
		id('newhead').style.display = 'none';
	}

		id('name-hod').innerHTML = index[1].name;
		id('state-hod').innerHTML = index[1].message;

		id('name-fac').innerHTML = index[2].name;
		id('state-fac').innerHTML = index[2].message;
}

function closenoti(){
	id('noti').setAttribute('class','noticlose');
}

function opennoti(){
	id('noti').setAttribute('class','notiopen');

}

window.addEventListener('load',()=>{
	if(index[0].title != " "){
	setTimeout(function(){opennoti();},500);
}
});


id('title').style.color = "transparent";
id('navbar').style.background = "transparent";
id('navbar').setAttribute('class','noblurbg');

ScrollReveal({ reset: true, delay: 100, opacity: 0}).reveal('.offsetdown')
