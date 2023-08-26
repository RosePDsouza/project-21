
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, groundObj, leftSide, rightSide;
var radius = 40

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	

	engine = Engine.create();
	world = engine.world;

	


	//Create the Bodies Here.
	
	 groundObj = new Ground (width/2, height-50, width, 20); 
	 leftSide = new Ground (1100,height-70,20,90);
	 rightSide = new Ground (800,height-70,20,90)


	var ball_options  = {
	isStatic : false,
	restitution : 0.3,
	friction : 0,
	density : 1.2
	}

	ball = Bodies.circle(260,100,radius/2,ball_options);
	World.add(world,ball);


	


	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,radius,radius)
  groundObj.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
 
  
}



