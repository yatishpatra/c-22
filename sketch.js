const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball;
var ball2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

   object= Bodies.rectangle(200,390,400,20,object_options);
    World.add(world,object);
//create a ball with physics effect
   var ball_options ={
        restitution: 1.0
   }
   ball=Bodies.circle(200,200,20,ball_options);
   World.add(world,ball);

//create a ball2 with physics effect
   var ball2_options ={
    restitution: 1.0
}
   ball2=Bodies.circle(300,200,20,ball2_options);
   World.add(world,ball2);

    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
    ellipseMode(RADIUS);
    ellipse(ball2.position.x,ball2.position.y,20,20);
   
}
