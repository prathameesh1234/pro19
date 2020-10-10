var monkey,monkeywalk,banana,bananaimage,stone,stoneimage,scene,sceneimage,ground;

var score = 0;



function preload(){
monkeywalk = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaimage = loadImage ("banana.png");
  stoneimage = loadImage  ("stone.png");
  sceneimage = loadImage ("jungle.jpg");
}
function setup() {
  createCanvas(400, 400);
  edges=createEdgeSprites();
  scene = createSprite(200,200,40,40);
  scene.addImage(sceneimage);
  
   //stone = createSprite(270,350,20,20);
  //stone.addImage(stoneimage);
  //stone.scale = 0.17;
  //stone.velocityX = -9;
  
  monkey = createSprite (85,320,20,20);
  monkey.addAnimation("monkey",monkeywalk);
  monkey.scale = 0.15;
  
 
  
 
  
  //ground = createSprite(190,360,400,400);
// ground.width = 0.5;

  bananagroup = new Group(); 
  obstaclesGroup = new Group();
}
function draw() {
background(220);
        
                                 
   edges = createEdgeSprites();
  scene.velocityX = -7;
  
      
  

  
  if (scene.x < 0){
      scene.x = scene.width/2;
    }
  

  
  if (keyDown("space")){
  monkey.velocityY = -10
  }
  
  monkey.velocityY = monkey.velocityY + 0.6;
  
  
  spawnbanana();
spawnObstacles();
  
 monkey.collide(edges[3])    
  
  if(monkey.isTouching(bananagroup)){
    score = score+2
    bananagroup.destroyEach();
    
     }
  switch(score){
    case 10:monkey.scale=0.12;
      break; 
      case 20: monkey.scale=0.14;
      break; 
      case 30: monkey.scale=0.16; 
      break;
      case 40: monkey.scale=0.18;
      break; 
      default: break;
  }
     
 
 

 
  
  if(monkey.isTouching(obstaclesGroup)){
     monkey.scale = 0.08 
     }
  

drawSprites();
      //text(mouseX+","+mouseY,mouseX,mouseY);
fill("white");
  textSize(20);
  text("score:" + score,300,50)
  

}



function spawnbanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
     
  banana = createSprite(400,200,30,30);
  banana.addImage(bananaimage);
  banana.scale = 0.05;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    banana.velocityX = -3;
    banana.y = random(120,200)
    
    monkey.depth = banana.depth+1;          
    
    
    //add each cloud to the group
    bananagroup.add(banana);
  }
  
}


function spawnObstacles() {
  if(frameCount % 60 === 0) {
    stone = createSprite(190,360,20,20);
  stone.addImage(stoneimage);
  stone.scale = 0.17;
      stone.velocityX = -5;
stone.lifetime = 300;
     obstaclesGroup.add(stone);
  }
    }
    
    
   