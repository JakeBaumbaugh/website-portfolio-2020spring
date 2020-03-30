var pg;

function setup() {
  var canvas = createCanvas(720, 480);
  canvas.parent("program");
	
	noStroke();
	fill(128);
	
	pg = createGraphics(720,480);
	pg.background(0);
	pg.loadPixels();
	var len = pg.width * pg.height;
	for(var i = 0; i < len; i++) {
		pg.pixels[i] = color(map(i%pg.width, 0, pg.width, 0, 255));
	}
	pg.updatePixels();
	console.log("Hopefully near 255: " + pg.pixels[pg.width-1]);
}

function draw() {
	image(pg,0,0);	
	var x = map(sin(frameCount/100), -1, 1, 0, 640);
	rect(x, 200, 80, 80);
}