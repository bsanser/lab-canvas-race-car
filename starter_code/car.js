function Car(sprite){
 this.sprite = new Image();
 this.sprite.src = sprite;
 this.x = 195;
 this.y = 480;
 this.speed = 8;
}

Car.prototype.isReady = function() {
  return this.sprite.isReady;
};

Car.prototype.moveRight = function() {
 if (this.x <= canvas.width - this.sprite.width/2){
  this.x += this.speed;
}
};

Car.prototype.moveLeft = function() {
  if (this.x >= 0){
    this.x -= this.speed;
  }

};

//
//
// // MarioBros.prototype.stop = function() {
// //   this.sprite.frameIndex = 0;
// // }
//
Car.prototype.draw = function() {
  ctx.drawImage(
    this.sprite,
    this.x,
    this.y,
    this.sprite.width * 0.5,
    this.sprite.height * 0.5
  );

};
