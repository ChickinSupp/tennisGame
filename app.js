let canvas;
let ctx;
let ballX = 50;
let ballSpeedX = 15;

window.onload = function () {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

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

function drawEverything() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  ctx.fillRect(0, 210, 10, 100);

  ctx.fillStyle = "red";
  ctx.fillRect(ballX, 100, 10, 10);
}
