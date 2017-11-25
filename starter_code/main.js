var RIGHT_KEY = 39;
var LEFT_KEY = 37;

var canvas;
var ctx;
var interval;

window.onload = function() {
  canvas = document.getElementById("canvasId");
  ctx = canvas.getContext('2d');

  var game = new Game("canvasId");

  document.getElementById("start-button").onclick = function() {
    interval = setInterval(function() {
      game.draw();
    }, 20);
  };

  document.addEventListener("keydown", function(event) {
    if (event.keyCode == RIGHT_KEY) {
      game.car.moveRight();
    }
  });

  document.addEventListener("keydown", function(event) {
    if (event.keyCode == LEFT_KEY) {
      game.car.moveLeft();
    }
  });
};
