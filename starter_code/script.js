window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {

      draw();
    // this.canvas = document.getElementById(canvasId);
    // this.canvas.width="500";
    // this.canvas.height="730";
    // this.ctx = this.canvas.getContext('2d');

  }

  function draw() {
  var canvas = document.getElementById('canvasId');
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = "#2c9127";
  ctx.fillRect(0, 0, 37, 730);
  ctx.fillRect(427, 0, 37, 730);

  ctx.fillStyle = "#808080";
  ctx.fillRect(37, 0, 12, 730);
  ctx.fillRect(415, 0, 12, 730);

  ctx.fillStyle = "white";
  ctx.fillRect(49, 0, 12, 730);
  ctx.fillRect(403, 0, 12, 730);

  ctx.fillStyle = "#808080";
  ctx.fillRect(61, 0, 342, 730);

  ctx.fillStyle = "white";
  ctx.fillRect(225, 37, 8, 29);
  ctx.fillRect(225, 90, 8, 29);
  ctx.fillRect(225, 143, 8, 29);
  ctx.fillRect(225, 196, 8, 29);
  ctx.fillRect(225, 249, 8, 29);
  ctx.fillRect(225, 302, 8, 29);
  ctx.fillRect(225, 355, 8, 29);
  ctx.fillRect(225, 408, 8, 29);
  ctx.fillRect(225, 461, 8, 29);
  ctx.fillRect(225, 514, 8, 29);
  ctx.fillRect(225, 567, 8, 29);
  ctx.fillRect(225, 620, 8, 29);
  ctx.fillRect(225, 673, 8, 29);
  ctx.fillRect(225, 726, 8, 29);




  }





};
