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


var blurred = [];
var notblurred = [];


function writepage(){
var inner = '';
for (var i = 0; i < events.length; i++) {
inner+='<div class="event"><div class="pointer"></div><div class="date" id="elemid' + events[i].poster + '">' + events[i].date + '</div><div class="item"  id="' + events[i].poster + 'item"><img class="poster" src="/assets/posters/' + events[i].poster + '.png"></img><div class="info"><center><div class="name" id="nameid' + events[i].poster + '">' + events[i].name.toUpperCase() + '</div><div class="descr">' + events[i].descr;
if (events[i].reglink != " ") {
    inner+='<br><br><a class = "link" href = "' + events[i].reglink + '">Register here!!</a><br><br>';
}
else{
    inner+='<br><div class="link">Registations Closed</div><br>';
}
if(events[i].youtube!=" "){
    inner+='<a class = "link" href = "' + events[i].youtube + '">Youtube recording</a>';
}
inner += '</center></div></div></div></div>';

}

id('container').innerHTML = inner;
init();
}

function init(){

for(i=0; i < events.length; i++){

    if(id('elemid' + events[i].poster).getBoundingClientRect().top <0.65*screen.height && id('elemid' + events[i].poster).getBoundingClientRect().top >0.1*screen.height){
            id(events[i].poster + 'item').style.transform = 'scale(1)';
            id(events[i].poster + 'item').style.filter = 'blur(0px)';
            notblurred.push('elemid' + events[i].poster);
        }
        else{
            blurred.push('elemid' + events[i].poster);
        }
        }

id('changedloading').style.display = "none";
    id('changedloading').style.pointerEvents = "none";
    document.body.style.overflowY= "auto";
}


/*
document.addEventListener('scroll', (event)=>{

    /*for(i = 0; i < events.length; i++){

        if(id(events[i].poster).getBoundingClientRect().top <0.65*screen.height && id(events[i].poster).getBoundingClientRect().top >0.1*screen.height){
            id(events[i].poster + 'item').style.transform = 'scale(1)';
            id(events[i].poster + 'item').style.filter = 'blur(0px)';
        }
        else{
            id(events[i].poster + 'item').style.transform = 'scale(0.8)';
            id(events[i].poster + 'item').style.filter = 'blur(5px)';
        }
    }*/

function blur(){

console.log('blur')

const observer = new IntersectionObserver(entries => {
  entries.forEach(({ target, isIntersecting }) => {
    if(isIntersecting) {
        if(notblurred.includes(target.getAttribute("id"))){ }
            else{
    id(target.getAttribute("id").substring(6) + 'item').style.transform = 'scale(1)';
    id(target.getAttribute("id").substring(6) + 'item').style.filter= 'blur(0px)';
   
    notblurred.push(target.getAttribute("id"));
   
    blurred = blurred.filter(function(item) {
    return item !== target.getAttribute("id");
    })
  }
}

  else{
    if(blurred.includes(target.getAttribute("id"))) { }
        else{
    id(target.getAttribute("id").substring(6) + 'item').style.transform = 'scale(0.8)';
    id(target.getAttribute("id").substring(6) + 'item').style.filter= 'blur(5px)';

    blurred.push(target.getAttribute("id"));
   
    notblurred = notblurred.filter(function(item) {
    return item !== target.getAttribute("id");
    })

}
}
});
});

// Observe all elements with IDs

if(screen.width > 451){
const elemsWithIds = document.querySelectorAll('[id^="elemid"]');
elemsWithIds.forEach(elem => observer.observe(elem));
}
else{
 const elemsWithIds = document.querySelectorAll('[id^="nameid"]');
elemsWithIds.forEach(elem => observer.observe(elem));   
}

}

//});

var t;

document.addEventListener('scroll', (event) => {

    clearTimeout(t);
    t = setTimeout(function(){blur();},500);

})

id('loading').setAttribute('id','changedloading')

