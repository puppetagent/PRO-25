
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
 dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

  dustbin = createSprite(1150,620,200,180);
 dustbin.addImage(dustbinImage);


  box1 = new Box (1140,770,200,10);

  ground = new Ground(800,790,1600,20);
  box2= new Box (1050,660,10,200);
  box3 = new Box (1240,660,10,200);

  papper = new Papper (100,700,20,20);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(255);

  box1.display();
  ground.display();
  box2.display();
  box3.display();
  papper.display();

  drawSprites();
 
}


function keyPressed () {

  if(keyCode === UP_ARROW) {

      Matter.Body.applyForce (papper.body,papper.position,{ x : 190,y : -190 } );

  }
}
