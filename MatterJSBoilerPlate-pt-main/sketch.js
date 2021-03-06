
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg_img;
var monkey;
var monkey_img;
var soloInvisivel;
var batAnimation;
var batGroup;



function preload()
{
bg_img=loadImage("cenarios_acriativos-43.gif");	
monkey_img=loadImage("monkey.png");
batAnimation = loadAnimation("bat/bat1.png","bat/bat2.png","bat/bat3.png",
"bat/bat4.png","bat/bat5.png","bat/bat6.png",
"bat/bat7.png","bat/bat8.png","bat/bat9.png",
"bat/bat10.png","bat/bat11.png","bat/bat12.png");
macaImg = loadImage("maca.png");
}

function setup() {
	createCanvas(1200, 700);


  batGroup=new Group();
	engine = Engine.create();
	world = engine.world;
	soloInvisivel=createSprite(600,680,1500,20);
	soloInvisivel.visible=false;
	//Crie os Corpos aqui.
	monkey=createSprite(300, 600,50,50);
	monkey.addImage(monkey_img);
	monkey.scale=0.2;
	Engine.run(engine);
  monkey.setCollider("rectangle",0,0,40,40)
  monkey.debug=true;
}


function draw() {
  rectMode(CENTER);
  background(0);
  imageMode(CENTER);
  image(bg_img, 600, 350, 1200, 700);
  if (keyDown("right")) {
	monkey.x=monkey.x+10;
  }
  if (keyDown("left")) {
	monkey.x=monkey.x-10;
  }
  if (keyDown("space")) {
	monkey.velocityY=-10;
  }
  morcego();
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(soloInvisivel);
  if (monkey.isTouching(batGroup)) {
    batGroup.destroyEach();
    monkey.destroy();
  }
  macamaca();
  drawSprites();
  
}
function morcego() {
  bat= createSprite(Math.round(random(0,1200)),Math.round(random(0,700)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;
    if(frameCount % 100 === 0){
        bat.visible = true;
        bat.velocityX = Math.round(random(-4,4));
        bat.velocityY = Math.round(random(-4,4));
        bat.scale=0.4;
        
       
    }
    bat.debug=true;
    batGroup.add(bat);
    bat.setCollider("rectangle",0,0,40,40)
    bat.lifetime=300;
}
function macamaca(){
 
  if (frameCount%100===0) {
    var maca=createSprite(Math.round(random(0,1200)),0);
    maca.addImage(macaImg);
    maca.velocitY=4;
    maca.scale=0.05;

  }
}


