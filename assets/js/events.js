 // Create XMLHttpRequest object.
    var oXHR = new XMLHttpRequest();

    // Initiate request.
    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "/assets/json/events.json", true);  // get json file.
    oXHR.send();

    function reportStatus() {
        if (oXHR.readyState == 4) {		// Check if request is complete.
            eventsdata = this.responseText;
            events = JSON.parse(eventsdata).events;
            writepage();
            lazy();
        }
    }

function writepage(){
var inner = '';
for (var i = 0; i < events.length; i++) {
inner += '<div class="item"><div class="bg" style="background-image: url(/assets/posters/' + events[i].poster + '.jpg)"></div></div>';
}
document.getElementById('container').innerHTML = inner;
}

document.getElementById('loading').setAttribute('id', 'loadingevents');

document.getElementsByClassName('bg')[3].addEventListener('load',()=>{
    document.getElementById('loadingevents').style.display = "none";
    document.getElementById('loadingevents').style.pointerEvents = "none";
    document.body.style.overflowY= "auto";
});

