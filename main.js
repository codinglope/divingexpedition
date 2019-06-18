const game = new Game();
const player1 = new Player(0, 0, 50);
let bg;
let bg2;
let x1 = 0;
let x2;
const scrollSpeed = 2 ;
const fish = new Fish(1000,250, 30);
const fish2 = new Fish(1000, 100, 10);
const fish3 = new Fish(1000,300,20);
// let song;

// function preload() {
  // song = loadSound("assets/salt.mp3");
// }

function setup() {
  let canvas = createCanvas(1000,500);
  // song.loop();
  canvas.parent("canvas");
  avatar = loadImage('assets/diver2.jpg');
  bg = loadImage("assets/bg.jpg");
  bg2= loadImage("assets/bg2.jpg");
  x2 = innerWidth;
}

function draw() {


  var size = 50;

  game.background();
  player1.draw();
  fish.draw();
  fish.move();
  fish2.draw();
  fish2.move();
  fish3.draw();
  fish3.move();
  


} 

function keyPressed() {
  if (keyCode === UP_ARROW) {
    player1.moveUp();
  } if (keyCode === DOWN_ARROW) {
    player1.moveDown();
  }
 
  
  clear();
  player1.draw();
  
}
