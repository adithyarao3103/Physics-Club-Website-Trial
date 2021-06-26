document.getElementById("close").setAttribute('onclick', 'close()');

function close(){
	console.log("close");
    document.getElementById("fullscreen").style.visibility = "hidden";
}

function runclick(){
	window.alert("clicked!!!!");
}