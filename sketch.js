
var car,wall;
var speed,weight;

var thickness;
var bullet;


function setup() {
  createCanvas(1600,400);

 car= createSprite(50, 200, 50, 50);
wall=createSprite(1200, 200, 60, 100);
thickness = random(22,83);

speed=random(55,99);
weight=random(400,1500,);

bullet = createSprite(50,200,50,5);
bullet.velocityX = speed;

// car.velocityX = speed;


}

function draw() {

  background("black"); 
  
  // if(wall.x-car.x < (car.width+wall.width)/2) {
  //   car.velocityX=0;
  //   var deformation=0.5 * weight * speed * speed/22509;
  //   if(deformation>180){
  //     car.shapecolor="red";
  //   }
  //  if(deformation<180 && deformation>100 ){
  //   car.shapecolor = "yellow";
  //  }
  //  if(deformation<100){
  //   car.shapecolor = "green";
  //  }
  // }

if(hasCollider(bullet, wall)){
  bullet.velocityX = 0;

  var damage = 0.5 * speed* speed/(thickness*thickness*thickness);

  if(damge > 10){
    wall.shapeColor = "red";
  }
  if(damage< 10){
    wall.shapeColor = "green";
  }
}

  drawSprites();
}


function isCollider(lbullet, lwall){

  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if(lbulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}