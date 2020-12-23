var fixedRect , movingRect;
var o1,o2,o3,o4


function setup() {
  createCanvas(1200,800);

 fixedRect = createSprite(200, 100, 50, 50);
 fixedRect.shapeColor = "blue"
 fixedRect.debug = true

 movingRect = createSprite(300,200,80,50)
 movingRect.shapeColor = "blue"
 movingRect.debug = true

 o1 = createSprite(400, 300, 50, 50);
 o1.shapeColor = "blue"
 o1.debug = true

 o3 = createSprite(500,400,80,50)
 o3.shapeColor = "blue"
 o3.debug = true
 
 o2 = createSprite(600, 400, 50, 50);
 o2.shapeColor = "blue"
 o2.debug = true

o4 = createSprite(300,200,80,50)
o4.shapeColor = "blue"
o4.debug = true
 }

function draw() {
  background("black"); 

  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
 if(isTouching(movingRect,o4)){
  movingRect.shapeColor = "red"
  o4.shapeColor = "red"
 }
 else{
  movingRect.shapeColor = "blue"
  o4.shapeColor = "blue"
 }
  drawSprites();
}

function isTouching(a,b){
  if(a.x - b.x < a.width/2 + b.width/2 && 
    b.x - a.x < a.width/2 +b.width/2  && 
    a.y - b.y < a.height/2 + b.height/2 && 
    b.y - a.y <a.height/2 + b.height/2 ){
      return true;
   
  }else {
   return false;
  }

}
