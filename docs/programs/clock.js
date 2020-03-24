function setup() {
  var canvas = createCanvas(720, 480);
  canvas.parent("program");
	
	noFill();
}

function draw() {
	translate(width/2, height/2);
	rotate(-PI/2);
	
	background(32);
	
	stroke(255,192,255);
	strokeWeight(8);
	ellipse(0,0,360,360);
	
	var h = 2*PI * ( (hour()%12) / 24)
	stroke(255,192,192);
	strokeWeight(4);
	line(0,0,90*cos(h),90*sin(h));
	
	var m = 2*PI * ( minute() / 60)
	stroke(192,255,192);
	strokeWeight(2);
	line(0,0,160*cos(m),160*sin(m));
	
	var s = 2*PI * ( second() / 60)
	stroke(192,255,255);
	strokeWeight(1);
	line(0,0,160*cos(s),160*sin(s));
}