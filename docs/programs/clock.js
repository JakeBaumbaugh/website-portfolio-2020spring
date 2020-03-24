function setup() {
  var canvas = createCanvas(720, 480);
  canvas.parent("program");
}

function draw() {
	translate(width/2, height/2);
	rotate(-PI/2);
	
	background(32);
	
	stroke(255,255,192);
	ellipse(0,0,360,360);
}