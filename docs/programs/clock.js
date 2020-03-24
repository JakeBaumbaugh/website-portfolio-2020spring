var red;
var yellow;
var gray;

function setup() {
  var canvas = createCanvas(720, 480);
  canvas.parent("program");
	
	red = color(112,0,0);
	yellow = color(192,116,32);
	gray = color(32);
}

function draw() {
	translate(width/2, height/2);
	rotate(-PI/2);
	
	background(32);
	
	fill(255);
	stroke(red);
	strokeWeight(8);
	ellipse(0,0,400,400);
	
	stroke(gray);
	var h = 2*PI * ( (hour()%12) / 12)
	strokeWeight(4);
	line(0,0,120*cos(h),120*sin(h));
	
	var m = 2*PI * ( minute() / 60)
	strokeWeight(4);
	line(0,0,180*cos(m),180*sin(m));
	
	stroke(red);
	var s = 2*PI * ( second() / 60)
	strokeWeight(2);
	line(0,0,180*cos(s),180*sin(s));
}