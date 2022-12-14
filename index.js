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


ctx.canvas.width  = window.innerWidth/3;
ctx.canvas.height = window.innerHeight/3;
let centerX = canvas.width/5 + 50;
let centerY = canvas.height/5 + 60;

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

canvas.addEventListener('mouseover', (ev) => {
  canvas.style.height="65%";
  canvas.style.width="65%";
  canvas.style.position='absolute';
});

canvas.addEventListener('mouseout', (ev) => {

  canvas.style.height="50%";
  canvas.style.width="50%";
  canvas.style.position='absolute';
});

canvas.addEventListener('mouseover', (ev) => {
  let key = 'personalized';
  let val = encodeURIComponent('GHK234567');
  let thirtyDays = 60 * 60 * 24 * 30;

  // country = FI webserver_id =bf01ce6107d48160f71159d11acd69d3
  // first-party third-party advertisers/analytics page visit history
  // zombie cookies 'Adobe flash cookies' ban specific users
  document.cookie = `${key}=${val}; path=/; max-age=${thirtyDays};`;
  // domain = sub.example.com
  // some-site=Strict | Lax
  log('cookie key val pair created', key, val);
});



document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('remove').addEventListener('click', (ev) => {
    let key = 'trackingId1';

    if (document.cookie)
    {
      log(document.cookie.split(';'));
      document.cookie = `${key}=; path=/; expires=2022-10-01T05:31:02.000Z;`;
      log('cookies to be deleted', key);
    } else
    {
      log('No cookies.');
    }
  });

});

canvas.addEventListener('click', this.popup);


function popup(ev) {
  log('a popup window');
  let win = window.open(
    'win.html',
    null,
    'popup,width=200,height=200,left=200,top=200, noopener'
  );
};

/*
// add gif pic once the engine starts
canvas.addEventListener('click', (ev) => {
  // const img = new Image(150, 150);
  // img.src = 'electromagnetic.gif';
  // img.src = 'motor.gif';
  let myGif;
  const gifUrl = 'https://www.gizmodo.com.au/wp-content/uploads/sites/2/2017/10/12/lfbzmwnvudjfeaq5cvx9.gif?quality=80&resize=832,468';

  // Can not load gif cross domain unless it has CORS header
  // const gifURL = "https://upload.wikimedia.org/wikipedia/commons/a/a2/Wax_fire.gif";
  // timeout just waits till script has been parsed and executed
  // then starts loading a gif
  setTimeout(()=>{
      myGif = GIF();                  // creates a new gif
      myGif.onerror = function(e){
         console.log("Gif loading error " + e.type);
      }
      myGif.load(gifUrl);

  },0);


  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.drawImage(img, centerX - 100, centerY -  100, img.width, img.height);
  ctx.drawImage(gifUrl, centerX - 100, centerY -  100, gifUrl.width, gifUrl.height);

});

*/







// end
