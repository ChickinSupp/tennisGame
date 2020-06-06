let canvas;
let ctx;

window.onload = function () {

   canvas = document.getElementById('canvas');
   ctx = canvas.getContext('2d');
  
    drawEverything()
};

function drawEverything() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'white';
    ctx.fillRect(225,210,200,200)

    ctx.fillStyle = 'red';
    ctx.fillRect(canvas.width/2,200,50,25)
};

console.log(canvas);