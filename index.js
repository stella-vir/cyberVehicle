const log = console.log;

let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
let canvas = document.getElementById('canvas');

document.addEventListener('DOMContentLoaded', () => {
  let root = document.documentElement;
  let h1 = document.querySelector('header h1');
  // len of the title
  let len = h1.textContent.length;
  root.style.setProperty('--len', len);
});

window.addEventListener('load', (ev) => {
  document.body.classList.add('loaded');
});


ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let centerX = canvas.width/5 - 100;
let centerY = canvas.height/5;

function enginePlug() {
  ctx.beginPath();
  ctx.arc(centerX, centerY, 100, 0, 2 * Math.PI);
  ctx.lineWidth = 2;

  ctx.fillStyle = '#090979';
  ctx.fill();


  ctx.beginPath();
  ctx.arc(centerX, centerY, 90, 0, 2 * Math.PI);
  ctx.lineWidth = 2;
  ctx.fillStyle = '#FFFFFF';
  ctx.fill();


  ctx.beginPath();
  ctx.arc(centerX, centerY, 50, 0, 2 * Math.PI);
  ctx.fillStyle = '#999';
  ctx.fill();

  ctx.font = "30px Verdana";
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText("Start", centerX - 35, centerY+10);

}

enginePlug();

canvas.addEventListener('mouseover', (event) => {
  canvas.style.height="125%";
  canvas.style.width="125%";
  canvas.style.position='absolute';
});

canvas.addEventListener('mouseout', (event) => {

  canvas.style.height="100%";
  canvas.style.width="100%";
  canvas.style.position='absolute';
});

canvas.addEventListener('click', this.popup);


function popup(ev) {
  console.log('a popup window');
  let win = window.open(
    'win.html',
    null,
    'popup,width=200,height=200,left=200,top=200, noopener'
  );

};





// end
