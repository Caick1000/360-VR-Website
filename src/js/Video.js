class Video {

constructor(scaleFactor, width) {
  this.scaleFactor = scaleFactor;
  this.width = width;
}

get moveRight() {
  return this.calculateMoveRight();
}

get moveLeft() {
  return this.calculateMoveLeft();
}

calculateMoveRight() {
  return (this.width * (this.scaleFactor - 1) / 2);
}

calculateMoveLeft() {
  return -(this.width * (this.scaleFactor - 1) / 2);
}

}