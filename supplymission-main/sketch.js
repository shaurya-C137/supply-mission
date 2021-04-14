var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,rightedge,leftedge,base
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	base = Bodies.rectangle(400,650,200,20,{isStatic:true})
    World.add(world,base)
	leftedge = Bodies.rectangle(295,610,20,100,{isStatic:true})
	World.add(world, leftedge)
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    rightedge = Bodies.rectangle(490,610,20,100,{isStatic:true})
	World.add(world, rightedge)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
 //keyPressed()
  fill("red")
  rect(base.position.x,base.position.y,200,20)
  rect(leftedge.position.x,leftedge.position.y,20,100)
  rect(rightedge.position.x,rightedge.position.y,20,100)
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
  }
}



