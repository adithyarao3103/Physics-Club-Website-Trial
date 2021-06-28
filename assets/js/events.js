 // Create XMLHttpRequest object.
    var oXHR = new XMLHttpRequest();

    // Initiate request.
    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "/assets/json/events.json", true);  // get json file.
    oXHR.send();

    function reportStatus() {
        if (oXHR.readyState == 4) {		// Check if request is complete.
            eventsdata = this.responseText;
        }
    }

    

eventsdata = JSON.parse(events);

var inner = '';

for (var i = 0; i < eventsdata.length; i++) {
inner += '<div class="item"><div class="bg" style="background-image: url(/assets/posters/' + eventsdata[i].poster + '.jpg)"></div></div>';

}


document.getElementById('container').innerHTML = inner;

