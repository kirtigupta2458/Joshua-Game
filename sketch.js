
function preload(){
  boyAnimation=loadAnimation("boy1.png","boy2.png","boy3.png","boy1.png","boy2.png","boy3.png")
  
}

function setup() {

  createCanvas(windowWidth,windowHeight)
  boy = createSprite(width/2,height/2)
  boy.addAnimation("boyrunning",boyAnimation)
  boy.scale=0.2
}

function draw() {
  background(0)

 


  drawSprites(); 
  
}

