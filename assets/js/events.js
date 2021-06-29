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
inner += '<div class="item"><img class="bg" src="/assets/posters/' + events[i].poster + '.jpg"></img></div>';
}
document.getElementById('container').innerHTML = inner;
}

