function Game(canvasId) {
  this.car = new Car('images/car.png');
  this.road = new Road();
}

Game.prototype.draw = function() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  this.road.draw();
  this.car.draw();
};
