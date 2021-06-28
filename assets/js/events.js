if (window.XMLHttpRequest) { // Create an instance of XMLHttpRequest object. 
              // code for IE7+, Firefox, Chrome, Opera, Safari
              xmlhttp  =  new XMLHttpRequest();
            } else { // code for IE6, IE5 
               xmlhttp  =  new ActiveXObject("Microsoft.XMLHTTP");
            }
   
         // sets and sends the request for calling "node.xml"
            xmlhttp.open("GET","/assets/xml/events.xml",false);
            xmlhttp.send();

         // sets and returns the content as XML DOM
            xmlDoc = xmlhttp.responseXML;

var inner= '';

events = xmlDoc.getElementsByTagName('events');

for(var i=0;i<events.length;i++){

	childnodes = events.childNodes;
	entities = [];
	for (var j = 0; j < childnodes.length; j++) {
		entities.append(childnodes[j].nodeValue);
		console.log(entities);
	}

	inner += '<div class="item"><div class="bg" style="background-image: url(/assets/posters/' + entities[3] + '.jpg)"></div></div>';

}

document.getElementById('container').innerHTML = inner;

