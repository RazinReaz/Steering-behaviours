let CANVAS_HEIGHT = 700;
let CANVAS_WIDTH = 900;
let NUMBER_OF_BOIDS = 100;
let racer;
let path;

let racer_mass = 50;
let racer_max_speed = 5;
let racer_density = 5
let racer_color = 'cyan';

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  racer = new Boid(random(width), random(height), racer_max_speed, 'cyan', racer_mass, racer_density);
  let points = [
    { x: 80, y: 150 },
    { x: 200, y: 100 },
    { x: 450, y: 380 },
    { x: 380, y: 550 },
    { x: 300, y: 500 }];

  path = new Path(points);
}

function instructions() {
  push();
  {
    rectMode(CENTER);
    fill(255);
    textSize(16);
    text('left clock on the circles to move the path markers', width/2, 20)
    text('right click on the circles to change the size of the path markers', width/2, 40)
  }
  pop();
}
function draw() {
  
  background(51);
  instructions();
  path.show();

  if (mouseIsPressed && mouseButton === LEFT) path.updateShape(mouseX, mouseY, movedX, movedY);
  if (mouseIsPressed && mouseButton === RIGHT) path.updateMarker(mouseX, mouseY, movedX, movedY);
  
  racer.followPath(path);
  racer.update();
  racer.show();
}