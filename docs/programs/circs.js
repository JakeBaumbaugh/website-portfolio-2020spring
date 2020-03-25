function setup() {
  var canvas = createCanvas(720, 480);
  canvas.parent("program");
	
	stroke(255);
}

function draw() {
	translate(width/2, height/2);
	background(32);
	
	noFill();
	strokeWeight(1);
	ellipse(0,0,400,400);
	
	for(var i = 0; i < 1; i+= 1/8) {
		noFill();
		strokeWeight(1);
		var posCoord = createVector(200*cos(i*PI), 200*sin(i*PI));
		var negCoord = createVector(-200*cos(i*PI), -200*sin(i*PI));
		line(negCoord.x, negCoord.y, posCoord.x, posCoord.y);
		
		var t = PI*(i+frameCount/10);
		var ler = sin(t);
		var zero = createVector(0,0);
		var dotCoord;
		if(ler >= 0) {
			dotCoord = zero.lerp(posCoord, ler)
		} else {
			dotCoord = zero.lerp(negCoord, -ler)
		}
		
		fill(255);
		noStroke();
		ellipse(dotCoord.x, dotCoord.y, 10, 10);
	}
}