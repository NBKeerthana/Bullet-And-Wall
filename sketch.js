var bullet,wall;
var speed, weight;
var thickness;
var lbullet,lwall;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);

  bulletspeed=random(223,321);
  bulletweight=random(30,52);

  bullet=createSprite(50, 200, 20, 50);
  bullet.shapeColor='white';

  wall=createSprite(1200,200,thickness,canvas.height/2);
  wall.shapeColor=color(80,80,80);

  lbullet=createSprite(350, 250, 20, 50);
  lbullet.shapeColor='white';

  lwall=createSprite(10,250,40,30);
  lwall.shapeColor=color(80,80,80);

  bullet.velocityX=speed;

}

function draw() {
  background('white');  
  if(wall.x-bullet.x <wall.width/2+bullet.width/2 ){
    bullet.velocityX=0;

    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      bullet.shapeColor=color(255,0,0);
    }
    if(deformation<180&&deformation>100){
      bullet.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      bullet.shapeColor=color(0,255,0);
    }
  }
  else{
    bullet.shapeColor=color('red');
  }
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)){
    return true;
  }
  eslse{
    return false;
  }
}