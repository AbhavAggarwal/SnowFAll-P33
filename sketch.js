var bg;
var backgroundImg;

function preload() {
  bg = loadImage("snow1.jpg");
  kid1 = loadAnimation("kid1.png","kid2.png","kid3.png");
  snowImg = loadImage("snow4.webp");

}


function setup() {
  createCanvas(800,400);
  kid = createSprite(500,200,50,50);
  kid.addAnimation("kid1",kid1);
  kid.scale = 0.5;

 
 
}

function draw() {
  background(255,255,255);  
 background(bg);
 snowFall();
  drawSprites();

}

function snowFall() {
  if(frameCount%40===0) {

 var snow = createSprite(200,-10);
 snow.x = Math.round(random(1,800))
 snow.velocityY = 4;
 snow.addImage("snow",snowImg);
 snow.scale = 0.1;
}
}