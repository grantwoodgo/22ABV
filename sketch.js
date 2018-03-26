var stars=[];
let numstarsmax=1500;
let speedmax=150;
var x;
var y;
var z;
var r;
var g;
var b;
var k=2;
var speed=8;
var numstars=numstarsmax;

function setup() {
	createCanvas(windowWidth,windowHeight);
	background(0);
	for (var i = 0; i < numstars; i++) {
		stars[i]= new Star();
	}
	frameRate(60);
	textSize(30);
	textAlign(CENTER,CENTER);
	console.log('This.r update');
}

function draw() {
if (mouseIsPressed){
	speed=speedmax*mouseX/width;
	numstars=numstarsmax*mouseY/height;
}
	background(0);
	if(frameCount<=800){
		fill(255*(1-frameCount/400));
		noStroke();
		textSize(30);
		text('Happy Birthday ',width/2,height/2-30);
		text('Amanda',width/2,height/2);
		textSize(20);
		text ('try pressing spacebar & dragging mouse to differant locations on screen ',width/2,height/2+60);
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
		this.pz=this.z;
	this.r=random (0,255);
	this.g=random (0,255);
	this.b=random (0,255);

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
		fill(this.r,this.g,this.b);
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
		stroke(this.r,this.g,this.b);
			line(px, py, sx, sy);
		}

	}
}
function keyTyped(){
	if(key===' '){
		k+=1;
	}
}
