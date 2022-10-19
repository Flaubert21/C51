
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var PLAY = 1;
var END = 2;
var gameState = PLAY;
var jato, cloud, thunder;
var jatoImg, cloudImg, thunderImg;
var cloudGroup, thunderGroup;
var backgroundImage;

function preload()
{
  backgroundImage = loadImage("Bg.jpg");
  jatoImg = loadImage("Jato.png");
  thunderImg = loadImage("raio.png");
  cloudImg = loadImage("Nuvem.png");

}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Crie os corpos aqui.
    jato = createSprite(windowWidth - 650, windowHeight - 20, 50,50);
    jato.addImage(jatoImg);
	jato.scale = 0.5;
   
	
    thunderGroup = createGroup();
    cloudGroup = createGroup();
	
	jato.debug = false;
	jato.setCollider("rectangle",0,-180,400,450);
	jato.debug = true

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);
   drawSprites();
   
   spawnClouds();
   spawnThunders();

   controls();
   
   if(cloudGroup.isTouching(jato)){
	jato.velocityX =- 0.5;
   }
   
   if(thunderGroup.isTouching(jato)){
	jato.destroy();
   }
  
 


}
function spawnClouds(){


	if(frameCount % 60 === 0){
cloud = createSprite(windowWidth - 650, windowHeight - 1040, 50,50);
 cloud.addImage(cloudImg);
  cloud.scale = 0.4;
   cloud.velocityY = + 3;
    cloud.x = Math.round(random(100, 1150));
     cloudGroup.add(cloud);
  }
}

function spawnThunders(){


	if(frameCount % 120 === 0){
thunder = createSprite(windowWidth - 650, windowHeight - 1040, 50,50);
 thunder.addImage(thunderImg);
  thunder.scale = 0.3;
   thunder.velocityY = + 2;
    thunder.x = Math.round(random(100, 1150));
	 thunderGroup.add(thunder);
}

 }

function controls(){
   
   
 if(keyIsDown(RIGHT_ARROW)){
	jato.position.x += 4;
 }

  if (keyIsDown(LEFT_ARROW)) {
    jato.position.x -= 4;
   
  }

 }

	



