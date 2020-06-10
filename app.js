let canvas;
let canvasContext;
let ballX = 50;
let ballY = 50;
let ballSpeedX = 10;
let ballSpeedY = 4;

let paddleOneY = 250;
const PADDLE_HEIGHT = 100;

function calculateMousePos(evt) {
  let rect = canvas.getBoundingClientRect();
	let root = document.documentElement;
	let mouseX = evt.clientX - rect.left - root.scrollLeft;
	let mouseY = evt.clientY - rect.top - root.scrollTop;
	return {
		x:mouseX,
		y:mouseY
	};
}

window.onload = function() {
	canvas = document.getElementById('canvas');
	canvasContext = canvas.getContext('2d');

	let framesPerSecond = 30;
	setInterval(function() {
			moveEverything();
			drawEverything();	
    }, 1000/framesPerSecond);
    
    canvas.addEventListener('mousemove',
		function(evt) {
			let mousePos = calculateMousePos(evt);
			paddle1Y = mousePos.y;
    });
    console.log(calculateMousePos)
}

function moveEverything() {
  ballX = ballX + ballSpeedX;
  ballY= ballY + ballSpeedY;

  if(ballX < 0) {
		ballSpeedX = -ballSpeedX;
	}
	if(ballX > canvas.width) {
		ballSpeedX = -ballSpeedX;
	}
	if(ballY < 0) {
		ballSpeedY = -ballSpeedY;
	}
	if(ballY > canvas.height) {
		ballSpeedY = -ballSpeedY;
	}

}



function drawEverything() {
	// next line blanks out the screen with black
	colorRect(0,0,canvas.width,canvas.height,'#000');

	// this is left player paddle
	colorRect(0,paddleOneY,10,100,'#fff');

	// next line draws the ball
	colorCircle(ballX, ballY, 10, '#fff');
}

function colorCircle(centerX, centerY, radius, drawColor) {
	canvasContext.fillStyle = drawColor;
	canvasContext.beginPath();
	canvasContext.arc(centerX, centerY, radius, 0,Math.PI*2,true);
	canvasContext.fill();
}

function colorRect(leftX,topY, width,height, drawColor) {
	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX,topY, width,height);
}

