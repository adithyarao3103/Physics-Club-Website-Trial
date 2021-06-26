function removemenu(){
    document.getElementById("fullscreen").style.display = "none";	
}

function closemenu(){
	console.log("close");
    document.getElementById("fullscreen").style.opacity = 0;
	document.getElementById('fullscreen').style.pointerEvents = 'none';
	document.getElementById('bar1').style.transform = 'translateX(0)';
	document.getElementById('bar2').style.transform = 'translateX(0)';
	document.getElementById('bar3').style.transform = 'translateX(0)';
    setTimeout(function(){removemenu();}, 500);
}

function showmenu(){
	console.log('menu');
	document.getElementById('bar1').style.transform = 'translateX(100px)';
	document.getElementById('bar2').style.transform = 'translateX(100px)';
	document.getElementById('bar3').style.transform = 'translateX(100px)';
	document.getElementById('fullscreen').style.display = "block";
	document.getElementById('fullscreen').style.opacity= 1;	
	document.getElementById('fullscreen').style.pointerEvents = 'auto';
}
