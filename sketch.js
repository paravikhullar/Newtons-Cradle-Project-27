var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(400,400,30);
	bob2 = new Bob(450,400,30);
	bob3 = new Bob(500,400,30);
	bob4 = new Bob(550,400,30);
	bob5 = new Bob(600,400,30);

	roof = new Roof(500,100,400,20);
	//ground = new Roof(500,450,1000,20);

	rope1 = new Rope(bob1.body, roof.body, -100, 0);
	rope2 = new Rope(bob2.body, roof.body, -50, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, 50, 0);
	rope5 = new Rope(bob5.body, roof.body, 100, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
 

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

 strokeWeight(1);

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 roof.display();
 //ground.display();

  drawSprites();
 
}


function keyPressed(){

	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-300 , y:-500});
	}
}



