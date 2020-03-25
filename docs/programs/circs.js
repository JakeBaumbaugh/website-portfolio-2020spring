function setup() {
  var canvas = createCanvas(720, 480);
  canvas.parent("program");
}

function draw() {
	translate(width/2, height/2);
	background(32);
	
	noFill();
	stroke(255);
	strokeWeight(1);
	ellipse(0,0,400,400);
	for(var i = 0; i < PI; i+= PI/8) {
		line(-200*cos(i), -200*sin(i), 200*cos(i), 200*sin(i));
	}
}