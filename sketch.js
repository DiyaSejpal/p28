
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var world,boy;


function preload(){
	boy=loadImage("images/boy.png");
	
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(1100,100,30);
	mango2 = new mango(1150,30,30);
	mango3 = new mango(1155,70,30);
	mango4 = new mango(1160,20,30);
	mango5 = new mango(1165,50,30);


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj = new stone(235,420,30);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  stoneObj.display();


  groundObject.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.bodyA,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  launcherObject.fly();

  
}

function detectCollision(lstone,lmango){
mangoBodyPosition = lmango.body.Position
stoneBodyPosition = lstone.body.postition

var distance  = dist(stoneBodyPosition.x,stoneBodyPosition.y,
  mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){
Matter.Body.setStatic(lmango.body,false);
  }

}

function keyPressed(){
  if(keyCode === space){
    Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
    launcherObject.attach(stoneObj.body);
  }
}



