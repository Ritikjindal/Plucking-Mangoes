
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;
const Constraint=Matter.Constraint;
var tree, ground, stone, boy;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9; 
var launcher;


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	tree= new Tree(1000,300,400,600);
	ground=new Ground(600,height,width,30);
	stone= new Stone(155,440,50,50);
	boy= new Boy(200,500,150,250);
	mango1=new Mango(900,200,50,50);
	mango2=new Mango(930,230,50,50);
	mango3=new Mango(1050,160,50,50);
	mango4=new Mango(960,120,50,50);
	mango5=new Mango(1140,250,50,50);
	mango6=new Mango(990,165,50,50);
	mango7=new Mango(1110,130,50,50);
	mango8= new Mango(1030,50,50,50);
	mango9=new Mango(1060,250,50,50);
	launcher=new Launcher(stone.body,{x:155,y:440});

	

	var render= Render.create({
		element:document.body,
		engine: engine,
		options: {
			width:1200,
			height:700,
			wireframes: false
		}
	});
  
	Engine.run(engine);

}


function draw() {
	Engine.update(engine);

	background(180);
	
	noStroke();
	textSize(25);
	fill("5");
	text("Press space to get second chance",100,50);

	rectMode(CENTER);

	ground.display();
	tree.display();
	boy.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	launcher.display();
	stone.display();

	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango6);
	detectCollision(stone,mango7);
	detectCollision(stone,mango8);
	detectCollision(stone,mango9);

    drawSprites();
	   
}


function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	launcher.fly();
}

function detectCollision(lstone,lmango){
	mangobodypos=lmango.body.position;
	stonebodypos=lstone.body.position;
	var distance= dist(stonebodypos.x,stonebodypos.y,mangobodypos.x,mangobodypos.y);
	if(distance<-lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:155,y:440})
		launcher.attach(stone.body);
	}
}