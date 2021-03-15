
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stoneObj,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11;
var launcherObject,tree,groundObject,boy

function preload()
{
  boy=loadImage("images/boy.png")
  
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	stoneObj=new Stone(235,420,30);

	mango1=new Mango(1100,100,30);
	mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1100,70,30);
	mango5=new Mango(1100,70,30);
	mango6=new Mango(1100,230,30);
	mango7=new Mango(1100,230,40);
	mango8=new Mango(1100,150,40);
	mango9=new Mango(1100,230,40);
	mango10=new Mango(1100,200,40);
	mango11=new Mango(1100,50,40);

	tree=new Tree(1050,500);
	groundObject=new Ground(width/2,600,width,20);
	launcherObject=new Launcher(stoneObj.body,{x:235,y:420})

	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  textSize(25);
  text("Press Space to get a second Chance to Play!",50,50);
  image(boy,200,340,200,300);
  //display
  tree.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  groundObject.display();
  launcherObject.display();
  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
  detectCollision(stoneObj,mango10);
  detectCollision(stoneObj,mango11);



  
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(
      stoneObj.body,{
          x:mouseX , y:mouseY
      
     
}
  )
}
function mouseReleased(){
  launcherObject.fly()
}

function detectCollision(stoone,mangoo){
  mangoBodyPosition=mangoo.body.position
  stoneBodyPosition=stoone.body.position
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance<=mangoo.r+stoone.r){
    Matter.body.setStatic(mangoo.body,false);
  }
}
function keyPressed(){
  if (keyCode===32){
    Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
    launcherObject.attach(stoneObj.body);
  }
}




