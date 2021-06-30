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
            lazy();
        }
    }

function writepage(){
var inner = '';
for (var i = 0; i < events.length; i++) {
inner += '<div class="item"><img class="bg" src="/assets/posters/' + events[i].poster + '.jpg"></img><center><div class="dot"></div><p class="info">' + events[i].name.toUpperCase() + '</p><div id="clickhere'+ i + '">CLICK HERE</div></center></div>';
}
document.getElementById('container').innerHTML = inner;
for(i = 0; i < events.length; i++){
    fun = 'javascript:popupopen(';
    end = ')';
    string = fun + i + end;
    document.getElementById('clickhere'+i).setAttribute('onclick', string);
}
}

function popupclose(){
    document.getElementById('popup-title').innerHTML = '';
    document.getElementById('popup-info').innerHTML = '';
    document.getElementById('popup-reg').innerHTML = '';
    document.getElementById('popup-reg').innerHTML = '';
    document.getElementById('popup-poster').setAttribute('src', '');
    document.getElementById('container').setAttribute('class', 'horizontalScroll');
    document.getElementById('popup').setAttribute('class', '');
    document.getElementById('navbar').setAttribute('class', '');
}

function popupopen(i){
    document.getElementById('popup-title').innerHTML = events[i].name.toUpperCase();
    document.getElementById('popup-info').innerHTML = events[i].descr;
    document.getElementById('popup-reg').innerHTML = events[i].reglink == ' '? 'Registerations Closed' : "<a href = '" + events[i].reglink + "'>Register Now</a>";
    document.getElementById('popup-yt').innerHTML = events[i].youtube == ' '? ' ' : "<a href = '" + events[i].youtube + "'>Youtube link for recording</a>";
    document.getElementById('popup-poster').setAttribute('src', '/assets/posters/' + events[i].poster + '.jpg');
    setTimeout(function(){    document.getElementById('navbar').setAttribute('class', 'blur');
        document.getElementById('container').setAttribute('class', 'horizontalScroll blur');
        document.getElementById('popup').setAttribute('class', 'open');}, 20);
}
