class Fish {

  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    
   
}

move() {
  if(this.x > 0) {
    this.x -= scrollSpeed * this.size/20; //parallax
}}




draw() {
  fill("turquoise");
    rect(this.x, this.y, this.size,this.size);
}

}