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
inner += '<div class="item"><img class="bg" src="/assets/posters/' + events[i].poster + '.png"></img><center><div class="dot"></div><p class="info">' + events[i].name.toUpperCase() + '</p><div id="clickhere'+ i + '">CLICK HERE</div></center></div>';
}
id('container').innerHTML = inner;
for(i = 0; i < events.length; i++){
    fun = 'javascript:popupopen(';
    end = ')';
    string = fun + i + end;
    id('clickhere'+i).setAttribute('onclick', string);
}
}

function popupclose(){
    id('popup-title').innerHTML = '';
    id('popup-info').innerHTML = '';
    id('popup-reg').innerHTML = '';
    id('popup-reg').innerHTML = '';
    id('popup-poster').setAttribute('src', '');
    id('container').setAttribute('class', 'horizontalScroll');
    id('popup').setAttribute('class', '');
    id('navbar').setAttribute('class', '');
}

function popupopen(i){
    id('popup-title').innerHTML = events[i].name.toUpperCase();
    id('popup-date').innerHTML = events[i].date;
    id('popup-info').innerHTML = events[i].descr;
    id('popup-reg').innerHTML = events[i].reglink == ' '? 'Registerations Closed' : "<a href = '" + events[i].reglink + "'>Register Now</a>";
    id('popup-yt').innerHTML = events[i].youtube == ' '? ' ' : "<a href = '" + events[i].youtube + "'>Youtube link for recording</a>";
    id('popup-poster').setAttribute('src', '/assets/posters/' + events[i].poster + '.png');
    setTimeout(function(){    id('navbar').setAttribute('class', 'blur');
        id('container').setAttribute('class', 'horizontalScroll blur');
        id('popup').setAttribute('class', 'open');}, 20);
}
