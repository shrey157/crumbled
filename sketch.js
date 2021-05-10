
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	basket1= new Bin (700,680,100,20)
	basketR=new Bin (750,650,20,100)
	basketL=new Bin (650,650,20,100)
	ground =new Bin (width/2,700,width,23)
	paper = new Paper()

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  fill('red')
  basket1.display()
  basketL.display()
  basketR.display()
  
  fill('brown')
  ground.display()

  paper.display()

}

function keyPressed(){
if(keyCode==UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:35,y:-35})
}

}



