
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	dustbinImage = loadImage("dustbingreen.png")
	paperImage = loadImage("paper.png")
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bottom = new Box(width/2+200,height-45,200,10)
	left= new Box(width/2-100+200,height-80,10,100)
	right= new Box(width/2+100+200,height-80,10,100)

	//Create a Ground
	ground=new Ground(width/2,height-30,width,20)
	paper1=new paper(100,400,40)

	
	Engine.run(engine);


}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine)
  bottom.display()
  left.display()
  right.display()
  ground.display()
  paper1.display()

image(dustbinImage,width/2+80,height-240,250,200)
image(paperImage, paper1.body.position.x,paper1.body.position.y,60,60)
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}



