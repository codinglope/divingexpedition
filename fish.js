class Fish {

  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    
   
}

move() {
  this.x -= 2 * this.size/20; //parallax
  if(this.x <= 0) {
    this.x = 1000;
}}




draw() {
  fill("turquoise");
    rect(this.x, this.y, this.size,this.size);
}

}