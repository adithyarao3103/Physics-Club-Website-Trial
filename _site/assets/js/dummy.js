 // Create XMLHttpRequest object.
    var oXHR = new XMLHttpRequest();
    var events;

    // Initiate request.
    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "/assets/json/events.json", true);  // get json file.
    oXHR.send();

    function reportStatus() {
        if (oXHR.readyState == 4) {     // Check if request is complete.
            eventsdata = this.responseText;
            events = JSON.parse(eventsdata).events;
            writepage();
        }
    }

function writepage(){
var inner = '';
for (var i = 0; i < events.length; i++) {
inner+='<div class="event" id = "' + events[i].poster + 'evntidid"><div class="pointer" id = "' + events[i].poster + 'poinidid"></div><div class="date"" id = "' + events[i].poster + 'dateidid">' + events[i].date + '</div><div class="item"  id="' + events[i].poster + 'itemidid"><img class="poster" src="/assets/posters/' + events[i].poster + '.png"" id = "' + events[i].poster + 'imagidid"></img><div class="info"" id = "' + events[i].poster + 'infoidid"><center " id = "' + events[i].poster + 'cntridid"><div class="name"" id = "' + events[i].poster + 'nameidid">' + events[i].name.toUpperCase() + '</div><div class="descr" id = "' + events[i].poster + 'descidid">' + events[i].descr;
if (events[i].reglink != " ") {
    inner+='<br><br><a class = "link" href = "' + events[i].reglink + '"" id = "' + events[i].poster + 'reglidid">Register here!!</a><br><br>';
}
else{
    inner+='<br><div class="link"" id = "' + events[i].poster + 'regcidid">Registations Closed</div><br>';
}
if(events[i].youtube!=" "){
    inner+='<a class = "link" href = "' + events[i].youtube + '"" id = "' + events[i].poster + 'youtidid">Youtube recording</a>';
}
inner += '</center></div></div></div></div>';

}

id('container').innerHTML = inner;
}


---
layout: fixed
title: Dummy | Physics Club NIT Surat
navtitle: Dummy
extra_css:
    - /assets/css/dummy.css
extra_js:
    - /assets/js/dummy.js
---
<div id="background">
<div id="main-container">
<div id="container" style="scroll-behavior: smooth;">
</div>
</div>
</div>
