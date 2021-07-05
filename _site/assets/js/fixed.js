function id(elemid){
	return document.getElementById(elemid);
}


function removemenu(){
    id("fullscreen").style.display = "none";	
}

function closemenu(){
	console.log("close");
    id("fullscreen").style.opacity = 0;
	id('fullscreen').style.pointerEvents = 'none';
	id('bar1').style.transform = 'translateX(0px)';
	id('bar2').style.transform = 'translateX(0px)';
	id('bar3').style.transform = 'translateX(0px)';
    setTimeout(function(){removemenu();}, 500);
}

function addmenu(){
    id("fullscreen").style.opacity = 1;	
}

function showmenu(){
	console.log('menu');
	id('bar1').style.transform = 'translateX(100px)';
	id('bar2').style.transform = 'translateX(100px)';
	id('bar3').style.transform = 'translateX(100px)';
	id('fullscreen').style.display = "block";
	setTimeout(function(){addmenu();}, 250);
	id('fullscreen').style.pointerEvents = 'auto';
}


window.addEventListener('load',() =>{
    id('loading').style.display = "none";
    id('loading').style.pointerEvents = "none";
    document.body.style.overflowY= "auto";
});


if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    id('navbar').style.display = "none";
    id('hamcont-mobile').style.display = "block";
    id('footer').style.width = "120vw";
    id('footer').style.width = "5vh";
}
