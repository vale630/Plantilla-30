const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope,fruit,ground;
var fruit_con;

var om,om1,om2,om3,ranatriste,ranafeliz;

var sad;
var saludo;
var comiendo,ranacomiendo,ranacomiendo1;

var bg_img;
var candy,candy_con,candy_con_2, candy_con_3;
var rana;

var drop2, drop3;

var button, button2,button3;
var croac;
var mute_btn;

var star_img,star1_img;
var star,star1;

var cortar_sound;
var comiendo_sound;
var abrir_sound;

var blower,blower1,balloon,balloon1;

function preload()
{
  bg_img = loadImage('background.png');
  candy = loadImage('candy.png');
  rana = loadImage('rana.png');
  sad = loadAnimation("ranatriste.png","ranafeliz.png", "ranafeliz1.png");
  saludo = loadAnimation("ranasaludo.png","ranasaludo.png");

  croac = loadAnimation("om2",om3);
  croac = loadAnimation("om",om1);
  croac = loadAnimation("ranafeliz","ranafeliz1",ranatriste);
  croac =loadAnimation("ranacomiendo",ranacomiendo1);
  croac.changeAnimation("sad");

  star = createSprite(320,50,20,20);
  star.addImage(star_img);
  star.scale(0.03);

  star1 = createSprite(50,370,20,20);
  star1.addImage(star1_img);
  star1.scale(0.03);

  star_img = loadImage("star.png");
  star1_img = loadImage("star1.png");

  blower = createImag("balloon.png")
  blower.position(260,370);
  blower.size(120,120);
  blower.mouseClicked(airblow);

  blower1 = createImag("balloon1.png")
  blower1.position(260,370);
  blower1.size(120,120);
  blower1.mouseClicked(airblow);

  om.playing = true;
  saludo.playing = true;
  sad.playing = true;
}

function setup() 
{
var isMobile = /iPhone| iPad | iPod | Android/i.test(navigator.userAgent);
if(isMobile){
  canW = displayWidth;
  canH = displayHeight;
  createCanvas(displayWidth+80,displayHeight);
}

  createCanvas(600,700);
  frameRate(80);


  candy_con = new Link(rope,candy); 
  candy_con_2 = new Link(rope2,candy);
  candy_con_3 = new Link(rope3,candy);

  engine = Engine.create();
  world = engine.world;
  
  om.frameDelay = 20;
  sad.frameDelay = 20;
  saludo.frameDelay = 20;
  croac = createSprite(200,height-80,100,100);
  croac.addImage(rana);
  croac.scale = 0.2;

  croac.addAnimation("om1",om2);

  //btn 1
  button = createImg('cut_button.png');
  button.position(100,90);
  button.size(50,50);
  button.mouseClicked(drop);

  button2 = createImg('cut_button.png');
  button2.position(450,90);
  button2.size(60,60);
  button2.mouseClicked(drop2);

  
  button3 = createImg('cut_button.png');
  button3.position(360,200);
  button3.size(60,60);
  button3.mouseClicked(drop3);

  mute_btn = createImag("mute.png");
  mute_btn.position(width-50,20);
  mute_btn.size(50,50);
  mute_btn.mouseClicked(mute); 

  rope = new Rope(7,{x:120,y:90});
  rope2 = new Rope(7,{x:490, y:90});
  rope3 = new Rope(4,{x:400, y:225});
  ground = new Ground(300,width,height,20);
  

  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);

  push();
  imageMode(CENTER);
  if(candy!=null){
    image(candy,fruit.position.x,fruit.position.y,70,70);
  }
  pop();

  rope.show();
  rope2.show();
  rope3.show();

  Engine.update(engine);
  ground.show();

if(collide(candy,croac)==true)
{
croac.changeAnimation("sad");  
}
if(collide(candy.ground.body)==true)
{
  croac.changeAnimation("om");
}

  drawSprites();
   
}

function drop()
{
  cortar_sound.play
  
  candy_con.detach();
  candy_con = null; 
}

function drop2()
{
  cortar_sound.play
  rope2.break();
  candy_con_2.detach();
  candy_con_2 = null; 
}

function drop3()
{
  cortar_sound.play
  rope3.break();
  candy_con_3.detach();
  candy_con_3 = null; 
}


function collide(body,sprite){
  if(body!=null)
  {
  var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);  
  if(d<=80)
  {
  World.remove(engine.world.candy);
  candy=null;
  return true;  
  }
  else{
  return false;
  } 
  }
}

function airblow(){
  Matter.Body.ApplyForce(caandy,{x:0,y:0},{x:0,y:-0.03});
  air.play();
}

function collide(body,sprite,x){
  if(body!=null){
  var d=dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
  if(d<=x){
return true;
  }
  else{
return false;
}
}
}
