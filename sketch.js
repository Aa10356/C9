var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200, 150, 200);
}

function draw() 
{
  background(30);
  drawSprites();
  if (keyDown("right")) {
    box.x+=1
  }
  if (keyDown("left")) {
    box.x-=1
  }
}




