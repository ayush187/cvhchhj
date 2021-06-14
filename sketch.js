const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snow;
var image;
var ground;
var bg="snow1.jpg";
var backgroundImg;

function preload(){
getTime();
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  //createSprite(400, 200, 50, 50);
  snow1=new Snow1(800,400)
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
  if(frameCount%50===0){
    snow1.display();
  }
 Engine .update(engine)  
  
}
async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0400 && hour<=1200){
      bg = "snow1.jpg";
  }
  else if(hour>=1200 && hour<=2000){
      bg = "snow2.jpg";
  }else if(hour>=2000 && hour<=0400){
      bg="snow3.jpg"
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
