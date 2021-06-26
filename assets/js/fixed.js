function removemenu(){
    document.getElementById("fullscreen").style.display = "none";	
}

function closemenu(){
	console.log("close");
    document.getElementById("fullscreen").style.opacity = 0;
    setTimeout(function(){removemenu();}, 500);
}

function openmenu(){
	document.getElementById('bar1').style.transform = 'translateX(100px)';
	document.getElementById('bar2').style.transform = 'translateX(100px)';
	document.getElementById('bar2').style.transform = 'translateX(100px)';
	document.getElementById('fullscreen').style.display = "block";
	document.getElementById('fullscreen').style.opacity= 1;	
}
