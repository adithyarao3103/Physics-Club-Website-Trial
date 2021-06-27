function removemenu(){
    document.getElementById("fullscreen").style.display = "none";	
}

function closemenu(){
	console.log("close");
    document.getElementById("fullscreen").style.opacity = 0;
	document.getElementById('fullscreen').style.pointerEvents = 'none';
	document.getElementById('bar1').style.transform = 'translateX(0px)';
	document.getElementById('bar2').style.transform = 'translateX(0px)';
	document.getElementById('bar3').style.transform = 'translateX(0px)';
    setTimeout(function(){removemenu();}, 500);
}

function addmenu(){
    document.getElementById("fullscreen").style.opacity = 1;	
}

function showmenu(){
	console.log('menu');
	document.getElementById('bar1').style.transform = 'translateX(100px)';
	document.getElementById('bar2').style.transform = 'translateX(100px)';
	document.getElementById('bar3').style.transform = 'translateX(100px)';
	document.getElementById('fullscreen').style.display = "block";
	setTimeout(function(){addmenu();}, 500);
	document.getElementById('fullscreen').style.pointerEvents = 'auto';
}
