 // Create XMLHttpRequest object.
    var oXHR = new XMLHttpRequest();
    var events;

    // Initiate request.
    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "/assets/json/events.json", true);  // get json file.
    oXHR.send();

    function reportStatus() {
        if (oXHR.readyState == 4) {		// Check if request is complete.
            eventsdata = this.responseText;
            events = JSON.parse(eventsdata).events;
            writepage();
        }
    }

function writepage(){
var inner = '';
for (var i = 0; i < events.length; i++) {
inner+='<div class="event"><div class="pointer"></div><div class="date">' + events[i].date + '</div><div class="item" id="' + events[i].poster + '"><img class="poster" src="/assets/posters/' + events[i].poster + '.png"></img><div class="info"><center><div class="name">' + events[i].name.toUpperCase() + '</div><div class="descr">' + events[i].descr;
if (events[i].reglink != " ") {
    inner+='<br><a class = "link" href = "' + events[i].reglink + '">Register here!!</a><br>';
}
else{
    inner+='<br>Registations Closed<br>';
}
if(events[i].youtube!=" "){
    inner+='<a class = "link" href = "' + events[i].youtube + '">Youtube recording</a>';
}
inner += '</center></div></div></div></div>';
}

id('container').innerHTML = inner;
}
