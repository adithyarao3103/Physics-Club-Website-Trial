function removemenu(){
    document.getElementById("fullscreen").style.visibility = "hidden";	
}

function closemenu(){
	console.log("close");
    document.getElementById("fullscreen").style.opacity = 0;
    setTimeout(function(){removemenu();}, 500);
}
