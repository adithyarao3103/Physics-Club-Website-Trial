xml = document.all('events.xml').XMLDocument;

var inner= '';

events = xml.getElementsByTagName('events');

for(var i=0;i<events.length;i++){

	childnodes = events.childNodes;
	entities = [];
	for (var j = 0; j < childnodes.length; j++) {
		entities.append(childnodes[j].nodeValue);
	}

	inner += '<div class="item"><div class="bg" style="background-image: url(/assets/posters/' + entities[3] + '.jpg)"></div></div>';

}

document.getElementById('container').innerHTML = inner;

