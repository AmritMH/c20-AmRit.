var fixedrect,movingrect





function setup() {
  createCanvas(1200,800);
  movingrect=createSprite(400, 200, 80, 50);
  movingrect.shapeColor="lightgreen";
  fixedrect=createSprite(200,200,50,80)
fixedrect.shapeColor="lightgreen";
  movingrect.debug=true;
  fixedrect.debug=true;

}

function draw() {
  background(255,255,255);  
  
movingrect.y=World.mouseY
movingrect.x=World.mouseX

if (movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
  && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
  && movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
  && fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
movingrect.shapeColor="red";
fixedrect.shapeColor="red";


}

else {
  movingrect.shapeColor="lightgreen";
  fixedrect.shapeColor="lightgreen";

}


drawSprites();
}