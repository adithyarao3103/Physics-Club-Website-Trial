eventsdata = JSON.parse(events);

var inner = '';

for (var i = 0; i < eventsdata.length; i++) {
inner += '<div class="item"><div class="bg" style="background-image: url(/assets/posters/' + eventsdata[i].poster + '.jpg)"></div></div>';
}


document.getElementById('container').innerHTML = inner;

