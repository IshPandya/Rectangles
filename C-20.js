var mr, fr
function setup() {
  createCanvas(800,400);
mr = createSprite(300,100,90,50)
fr = createSprite(500,100,50,80)
mr.shapeColor = "red"
fr.shapeColor = "yellow"
}

function draw() {
  background(0);  
 mr.x = World.mouseX 
 mr.y = World.mouseY
  drawSprites();
}
