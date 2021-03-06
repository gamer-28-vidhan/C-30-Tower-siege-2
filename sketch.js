
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint



var engine, world;
var ground, g1, g2 ;
var stoneObj;
var flyer;

function preload()
{

}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	



	

	

	
	


	ground = new floor(700,690,1400,20)

	g1 = new floor(585,370,230,10)
//layer1
	bl1 = new BOX(515,340,30,40)
	bl2 = new BOX(550,340,30,40)
	bl3 = new BOX(585,340,30,40)
	bl4 = new BOX(620,340,30,40)
	bl5 = new BOX(655,340,30,40)
	//layer2
	bl6 = new BOX(532,290,30,40)
	bl7 = new BOX(567,290,30,40)
	bl8 = new BOX(602,290,30,40)
	bl9 = new BOX(637,290,30,40)
	//layer3
	bl10 = new BOX(550,240,30,40)
	bl11 = new BOX(585,240,30,40)
	bl12 = new BOX(620,240,30,40)
	//layer4
	bl13 = new BOX(568,190,30,40)
	bl14 = new BOX(603,190,30,40)
	//final box
	bl15 = new BOX(586,140,30,40)


//new level


g2 = new floor(1185,200,170,10)
//layer1

dl1 = new BOX(1150,170,30,40)
dl2 = new BOX(1185,170,30,40)
dl3 = new BOX(1220,170,30,40)
// layer 2
dl4 = new BOX(1168,125,30,40)
dl5 = new BOX(1203,125,30,40)
//top
dl6 = new BOX(1187,80,30,40)

	
	
	
	
	
	


	
	stoneObj = new stn(135,450,18,PI/2)

	flyer = new thrower(stoneObj.body,{x:135, y:450})


	
}


function draw() {

	Engine.update(engine)
	background(0);

 
	


  








stoneObj.display();

ground.display();

flyer.display();

g1.display()
bl1.display()
bl2.display()
bl3.display()
bl4.display()
bl5.display()
//
bl6.display()
bl7.display()
bl8.display()
bl9.display()
//
bl10.display()
bl11.display()
bl12.display()
//
bl13.display()
bl14.display()
//
bl15.display()

///////

g2.display()
//
dl1.display()
dl2.display()
dl3.display()
//
dl4.display()
dl5.display()
//
dl6.display()


  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    flyer.gone();
}



function keyPressed() {

	if(keyCode === 32){
	
	Matter.Body.setPosition(stoneObj.body,{x:135, y:450})
	flyer.attach(stoneObj.body)
	
	
	}


}





