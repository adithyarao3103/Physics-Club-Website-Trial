$('#contact').on('submit', function(e) {
  $('#formdiv *').fadeOut(10);
  $('#sent').fadeIn(250);
  $('#necessary').fadeOut(10);
  });

$('#sent').fadeOut(10);


var shouldKeepAnimating = true;
var addClassTimeouts = [];
var containers = document.querySelectorAll('.container');
containers = Array.prototype.slice.call(containers, 0);

setTimeout(setActiveClasses, 500);

function setActiveClasses() {
  var time = 0;

  if (!shouldKeepAnimating) {
    return;
  }

  addClassTimeouts = [];

  containers.
  forEach(function (container) {

    time += 1000;
    var timeoutId = setTimeout(function () {

      container.classList.add('active');
    }, time);
    addClassTimeouts.push(timeoutId);
  });

  setTimeout(function () {
    clearActiveClasses();
    setTimeout(setActiveClasses, 2000);
  }, time + 2000);
}

function clearActiveClasses() {
  containers.forEach(function (container) {
    container.classList.remove('active');
  });
}