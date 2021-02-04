let x = 0.1;
let y = 0;
let z = 0;

let a = 7;
let b = 28;
let c = 8.0 / 3;

let points = [];

function setup() {
  createCanvas(900, 900, WEBGL);
  //colorMode(HSB);
  background(0);
}


function draw() {
  background(0);
  let dt = 0.01;
  let dx = (a * (y - x)) * dt;
  let dy = (x * (b - z) - y) * dt;
  let dz = (x * y - c * z) * dt;
  x = x + dx;
  y = y + dy;
  z = z + dz;

  points.push(createVector(x, y, z));

  translate(0, 0, -80);
  //translate(width/2, height/2);
  scale(7.5);
  stroke(255);
  noFill();

  beginShape()
  stroke(255, 100);
  for (let v of points) {
    arc(v.x, v.y, v.z, 3, 0, PI * v.z / v.x);
  }
  endShape();

  //println(x,y,z);
}