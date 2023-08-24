

function setup() {
  createCanvas(1550,450);
  
  n=createSprite(200,200,30,50)
}

function draw() 
{
  background(30);


  drawSprites();

  if(keyDown('a')){
    n.position.x-=5

  }

  if(keyDown('d')){
  n.position.x+=5

 }

  if(keyDown('w')){
    n.position.y-=5

  }

  if(keyDown('s')){
    n.position.y+=5

  }


}




