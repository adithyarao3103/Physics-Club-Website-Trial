 // Create XMLHttpRequest object.
    var oXHR = new XMLHttpRequest();
    var events;

    // Initiate request.
    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "/assets/json/team.json", true);  // get json file.
    oXHR.send();

    function reportStatus() {
        if (oXHR.readyState == 4) {		// Check if request is complete.
            membersdata = this.responseText;
            membersdata = JSON.parse(membersdata);
            writepage();
        }
    }

function writepage(){

    members = membersdata.members
    var inner = '';

    for(i = members.length - 1; i>=0; i--){

        inner += '<div class="splide__slide"><div class="member"><center><img class="image" src="/assets/Team/' + members[i].image + '"><div class="name"><i>' + members[i].name + '</i></div><div class="batch">' + members[i].batch + '</div><div class="soc"><div class="insta"><a class="customico fa fa-instagram" href="' + members[i].insta + '"></a></div><div class="facebook"><a class="customico fa fa-facebook" href = "' + members[i].fb + '"></a></div></div></center></div></div>'

    }

    id('current').innerHTML = inner;

    new Splide( '.splide', {
        speed: 100,
        pagination: false,
   type   : 'loop',
    perPage: 3,
    focus  : 'center',
    arrow:true,
    gap: '30px',
    breakpoints: {
        640: {
            perPage: 2,
        },
        450: {
            perPage: 1,
        },
    }} ).mount();

}