function setup() {
  var canvas = createCanvas(720, 480);
  canvas.parent("program");
	
	noFill();
}

function draw() {
	translate(width/2, height/2);
	rotate(-PI/2);
	
	background(32);
	
	stroke(192,116,32);
	strokeWeight(8);
	ellipse(0,0,400,400);
	
	stroke(255,255,255);
	var h = 2*PI * ( (hour()%12) / 12)
	strokeWeight(4);
	line(0,0,120*cos(h),120*sin(h));
	
	var m = 2*PI * ( minute() / 60)
	strokeWeight(2);
	line(0,0,180*cos(m),180*sin(m));
	
	var s = 2*PI * ( second() / 60)
	strokeWeight(2);
	line(0,0,180*cos(s),180*sin(s));
}