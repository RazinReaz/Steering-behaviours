let CANVAS_HEIGHT = 700;
let CANVAS_WIDTH = 1000;
let NUMBER_OF_BOIDS = 100;
let wanderer;
let pursuer;
let follower;

function writeRules() {
  push();
  {
    textSize(16);
    fill('yellow');
    text('Follower', 20, 40);
    fill('white')
    text(': Arrive at the mouse pointer and evade', 85, 40);
    fill('red');
    text('pursuer', 370, 40);

    fill('red');
    text('Pursuer', 20, 60);
    fill('white')
    text(': Pursue the ', 85, 60);
    fill('cyan');
    text('wanderer', 180, 60);

    fill('cyan');
    text('Wanderer', 20, 80);
    fill('white')
    text(':Wander and evade the ', 90, 80);
    fill('yellow');
    text('follower', 270, 80);
  }
  pop();
}

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  wanderer = new Boid(random(width), random(height), 3, 'cyan', 100, 10);
  pursuer = new Boid(random(width), random(height), 3, 'red', 100, 10);
  follower = new Boid(random(width), random(height), 5, 'yellow', 10, 1);
}

function draw() {
  background(51);

  let mouse = createVector(mouseX, mouseY);
  writeRules()
  follower.arrive(mouse);
  follower.evade(pursuer);
  wanderer.wander();
  wanderer.evade(follower);
  pursuer.pursue(wanderer);

  follower.ignoreEdges();
  follower.update();
  follower.show();

  wanderer.ignoreEdges();
  wanderer.update();
  wanderer.show();

  pursuer.ignoreEdges();
  pursuer.update();
  pursuer.show();
}