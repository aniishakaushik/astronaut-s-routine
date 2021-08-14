var bg,sleep,brush,gym,eat ;
var astronaut 






function preload () {
  bg= loadImage("images/iss.png");
  eat= loadAnimation("eat1.png,eat2.png");
      sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym1.png","images/gym2.png","images/gym2.png");

  bath = loadAnimation("images/bath1.png","images/bath2.png")
  
   }



function setup() {

  createCanvas(400, 400);
  //nicknaming background
    var backdrop=createSprite;
    astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
}  


function draw() {
  background(bg);
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("gyming",gym);
    astronaut.changeAnimation("gyming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
drawSprites
} 

      
         
                        
       
































