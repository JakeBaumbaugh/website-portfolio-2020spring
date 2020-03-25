function setup() {
  var canvas = createCanvas(720, 480);
  canvas.parent("program");
	
	noStroke();
	fill();
}

function draw() {
	loadPixels();
	for(int i = 0; i < pixels.length; i++) {
		pixels[i] = map(i%width, 0, width, 0, 255);
	}
	updatePixels();
	
	var x = map(sin(frameCount/100), -1, 1, 0, 640);
	rect(x, 200, 80, 80);
}