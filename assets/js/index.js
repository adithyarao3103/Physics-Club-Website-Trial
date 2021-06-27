var bg = '/assets/images/bg.jpg';

let image = document.createElement('img');
img.src = bg;

image.addEventListener('load', (event)=> {
  document.getElementById('topcontent').style.backgroundImage = `url(${bg})`;});