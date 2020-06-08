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

function moveEverything() {
  ballX = ballX + ballSpeedX;
  if(ballX < 0) {
    ballSpeedX = -ballSpeedX;
  }
  if(ballX > canvas.width) {
    ballSpeedX = -ballSpeedX
  }
}

function colorRect(leftX,topY,width,height,drawColor) {
    ctx.fillStyle = drawColor;
    ctx.fillRect(leftX,topY,width,height);
  
}

function drawEverything() {
    colorRect(0,0,canvas.width, canvas.height,'black')
    colorRect(0, 210, 10, 100,'white');
    colorRect(ballX, 100, 10, 10,'red');
}