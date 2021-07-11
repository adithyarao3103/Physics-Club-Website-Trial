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

var isnotblur;


function writepage(){
var inner = '';
for (var i = 0; i < events.length; i++) {
inner+='<div class="event" id = "' + events[i].poster + 'evntidid" data-snap-point><div class="pointer" id = "' + events[i].poster + 'poinidid"></div><div class="date"" id = "' + events[i].poster + 'dateidid">' + events[i].date + '</div><div class="item"  id="' + events[i].poster + 'itemidid"><center><img class="poster" src="/assets/posters/' + events[i].poster + '.png"" id = "' + events[i].poster + 'imagidid"></img></center><div class="info"" id = "' + events[i].poster + 'infoidid"><center " id = "' + events[i].poster + 'cntridid"><div class="name"" id = "' + events[i].poster + 'nameidid">' + events[i].name.toUpperCase() + '</div><div class="descr" id = "' + events[i].poster + 'descidid">' + events[i].descr;
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
init();
ScrollReveal({ reset: true, delay: 10 }).reveal('.item')
}


function init(){

for(i=0; i < events.length; i++){

    if(id(events[i].poster + 'itemidid').getBoundingClientRect().top <0.65*screen.height && id(events[i].poster + 'itemidid').getBoundingClientRect().top >0.1*screen.height){
            id(events[i].poster + 'itemidid').style.transform = 'scale(1)';
            //id(events[i].poster + 'itemidid').style.filter = 'blur(0px)';
            notblurred.push('elemid' + events[i].poster);
            isnotblur = events[i].poster + 'itemidid';
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

/*

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

*/

id('loading').setAttribute('id','changedloading')


document.addEventListener('scroll', ()=> {
     elem = document.elementFromPoint($(window).width()/2, $(window).height()/2)
     elemid = elem.getAttribute('id');
     if( elemid == null ){}
     else{
     itemid = elemid.substring(0,elemid.length - 8) + 'itemidid';

     //if(elemid == 'container' || elemid == 'main-container' || elemid == 'background' || elemid == 'footer' || elemid == 'social' || elemid == 'footmenu') {}
       if(elemid.substring(elemid.length - 4) != 'idid') {}
        else{

     if(itemid != isnotblur){
            
        id(isnotblur).style.transform = 'scale(0.8)';
        //id(isnotblur).style.filter = 'blur(5px)';
        isnotblur = itemid;
     id(itemid).style.transform = 'scale(1)';
     //id(itemid).style.filter = 'blur(0)';
 }
 else{ }

}
}
}
)

