let canvas;
let ctx;
let ballX = 50;
let ballSpeedX = 10;

window.onload = function () {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  let fps = 30;
  setInterval(() => {
    moveEverything();
    drawEverything();
  }, 1000 / fps);
};


// MOVES BALL BACK AND FOURTH
function moveEverything() {
  ballX = ballX + ballSpeedX;
  if(ballX < 0) {
    ballSpeedX = -ballSpeedX;
  }
  if(ballX > canvas.width) {
    ballSpeedX = -ballSpeedX
  }
}

// THIS FUNCTION IS CALLED IN OUR
// drawEverything() TO DRAW OUR CANVAS AND GAME COMPONENTS
function colorRect(leftX,topY,width,height,drawColor) {
    ctx.fillStyle = drawColor;
    ctx.fillRect(leftX,topY,width,height);
  
}

function drawEverything() {
    // GAME CANVAS
    colorRect(0,0,canvas.width, canvas.height,'#000')

    // LEFT PADDLE
    colorRect(0, 210, 10, 100,'#fff');

    // BALL
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(ballX,100,10,10)
    ctx.beginPath();
    ctx.arc(ballX, 100 ,10 ,0 ,Math.PI*2 ,true);
    stroke();
}