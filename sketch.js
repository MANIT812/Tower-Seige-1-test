
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground;
var stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var polygon1,sling1;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
	world = engine.world;
  ground=new Ground(600,575);
  stand1=new Stand(570,400,300,20);
  stand2=new Stand(1000,300,300,20);
  box1=new Box(540,390);
  box2=new Box(580,390);
  box3=new Box(620,390);
  box4=new Box(500,390);
  box5=new Box(520,300);
  box6=new Box(560,300);
  box7=new Box(600,300);
  box8=new Box(540,200);
  box9=new Box(580,200);
  box10=new Box(560,150);
  b1=new Box(940,250);
  b2=new Box(980,250);
  b3=new Box(1020,250);
  b4=new Box(1060,250);
  b5=new Box(960,150);
  b6=new Box(1000,150);
  b7=new Box(1040,150);
  b8=new Box(980,50);
  b9=new Box(1020,50);
  b10=new Box(1000,0);
  polygon1=new Polygon(100,400,60);
  sling1=new Sling(polygon1.body,{x:100,y:350})
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("purple");
  ground.display();
  stand1.display();
  stand2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  b1.display();
  b4.display();
  b3.display();
  b2.display();
  b6.display();
  b5.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  polygon1.display();
  sling1.display();
  drawSprites();
  textSize(20)
  fill("black")
  text("Drag The Hexagon and then release it, to launch towards the blocks",400,80);
  text("press space to respawn the hexagon",400,110);
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling1.fly();
}