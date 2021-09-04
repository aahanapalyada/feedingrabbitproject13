var garden,rabbit;
var gardenImg,rabbitImg;
var apple, leaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
  greenImg = loadImage("leaf.png");
}

function setup(){
  
 createCanvas(400,400);
  
 garden=createSprite(200,200);
 garden.addImage(gardenImg);

 rabbit = createSprite(180,340,30,30);
 rabbit.scale =0.09;
 rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX
  
  drawSprites();
  var select_sprites = Math.round(random(1,2));

  if(frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples();
    }
    else {
      createLeaves();
    }
  }
}
function createApples() {
  apple = createSprite(random(50,350),40 ,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.1;
  apple.velocityY = 3;
  apple.lifetime = 80;
}

function createLeaves() {
  leaf = createSprite(random(50,350),40 ,10,10);
  var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: leaf.addImage(orangeImg);
              break;
      case 2: leaf.addImage(redImg);
              break;
      case 3: leaf.addImage(greenImg);
              break;
      default: break;
    }
  leaf.scale = 0.1;
  leaf.velocityY = 3;
  leaf.lifetime = 80;
}