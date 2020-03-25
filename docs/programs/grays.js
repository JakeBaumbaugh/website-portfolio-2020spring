function setup() {
  var canvas = createCanvas(720, 480);
  canvas.parent("program");
	
	noStroke();
	fill(128);
	
	var pg = createGraphics(720,480);
	pg.background(0);
	pg.loadPixels();
	for(var i = 0; i < width*height; i++) {
		pg.pixels[i] = color(map(i%width, 0, width, 0, 255));
	}
	pg.updatePixels();
	console.log("Hopefully near 255: " + pg.pixels[width-1]);
}

function draw() {
	image(pg,0,0);	
	var x = map(sin(frameCount/100), -1, 1, 0, 640);
	rect(x, 200, 80, 80);
}