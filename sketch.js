
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(1600, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper();
	ground = new Ground();
	block1 = new Block(1500, 405, 10, 150);
	block2 = new Block(1200, 405, 10, 150);
	block3 = new Block(1350, 485, 310, 10);


	//Engine.run(engine);

}


function draw() {
	background("grey");
	Engine.update(engine)
	ground.display();

	paper.display();
	block1.display();
	block2.display();
	block3.display();

	//keyPressed();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:220,y:-75})
	}
}