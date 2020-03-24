var s = [];

function setup() {
	var canvas = createCanvas(720, 480);
	canvas.parent("program");
	for(var i = 0; i < 150; i++) {
		s[i] = new Star();
	}
	strokeWeight(3);
	frameRate(30);
}

function draw() {
	background(32);
	
	translate(width/2, height/2);
	var currTime = millis();
	for(var i = 0; i < s.length; i++) {
		var needNewStar = s[i].show(currTime);
		if(needNewStar) {
			s[i] = new Star();
		}
	}
}

class Star {
	
	constructor() {
		this.theta = random(0, TWO_PI);
		this.dist = random(1, 10);
		this.startTime = millis();
	}
	
	show(currTime) {
		var refPoint = createVector(cos(this.theta), sin(this.theta));
		var time = currTime - this.startTime;
		var startPoint = refPoint.mult(time*0.3);
		var endPoint = p5.Vector.mult(startPoint, time/1000*sqrt(this.dist));
		stroke(map(this.dist, 1, 10, 64, 255));
		strokeWeight(ceil(this.dist/3));
		line(startPoint.x, startPoint.y, endPoint.x, endPoint.y);
		
		return abs(startPoint.x)>width/2 || abs(startPoint.y)>height/2;
	}
}