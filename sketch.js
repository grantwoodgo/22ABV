var stars=[];
let numstarsmax=1500;
let speedmax=150;
var x;
var y;
var z;
var k=1;
var speed=20;
var numstars=numstarsmax;

function setup() {
	createCanvas(windowWidth,windowHeight);
	background(0);
	for (var i = 0; i < numstars; i++) {
		stars[i]= new Star();
	}
	frameRate(60);
	textSize(20);
	textAlign(CENTER,CENTER)
}

function draw() {
if (mouseIsPressed){
	speed=speedmax*mouseX/width;
	numstars=numstarsmax*mouseY/height;
}
	background(0);
	if(frameCount<=400){
		fill(200*(1-frameCount/400));
		noStroke();
		text('Toggle Spacebar',width/2,height/2-30);
		text('&',width/2,height/2);
		text('Mouse Click Anywhere on Screen',width/2,height/2+30);
	}
	translate(width/2,height/2);
	for (var i = 0; i < numstars; i++) {
		stars[i].update();
		stars[i].show();
	}
}

function Star() {
		this.x=random(-width/2,width/2);
		this.y=random(-height/2,height/2);
		this.z=random(width);
		this.pz=this.z

	this.update=function(){
		this.z=this.z-speed;
		if (this.z < 1) {
			this.z = width;
			this.x = random(-width/2, width/2);
			this.y = random(-height/2, height/2);
			this.pz = this.z;
		}
	}

	this.show=function(){
		fill(255)
		noStroke();

		var sx=map(this.x/this.z,0,1,0,width)
		var sy=map(this.y/this.z,0,1,0,height)
		var r=map(this.z,0,width,16,0)
		var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);
    this.pz = this.z;

		if(k%2==0){
		ellipse(sx,sy,r);
		}
    else if (k%2>=0) {
			stroke(255);
			line(px, py, sx, sy);
		}

	}
}
function keyTyped(){
	if(key===' '){
		k+=1;
	}
}