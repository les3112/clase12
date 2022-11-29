
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
 trex=createSprite(20,150,25,50);
 trex.addAnimation("running",trex_running);
 trex.scale=0.5;

 //crear sprite del suelo
 ground=createSprite(200,180,400,20)
}

function draw(){
  background("white")

  if(keyDown("space")){
    trex.velocityY=-10;
  }

  //gravedad
  trex.velocityY=trex.velocityY+0.5

  //evita que trex caiga
  trex.collide(ground);
  
drawSprites();
}
