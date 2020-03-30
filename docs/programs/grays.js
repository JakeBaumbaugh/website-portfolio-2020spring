var pg;

function setup() {
  var canvas = createCanvas(720, 480);
  canvas.parent("program");
	
	noStroke();
	fill(128);
	
	pg = createGraphics(720,480);
	pg.background(0);
	for(var i = 0; i < pg.width; i++) {
		pg.stroke(map(i,0,pg.width,0,255));
		pg.line(i,0,i,pg.height);
	}
}

function draw() {
	image(pg,0,0);	
	var x = map(sin(frameCount/100), -1, 1, 0, 640);
	rect(x, 200, 80, 80);
}