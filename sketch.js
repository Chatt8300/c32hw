const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;
var chain;
var polygon, polygonImg;
var mGround, ground1, ground2;

function preload(){
    polygonImg = loadImage("polygon.png");

}

function setup(){
    var canvas = createCanvas(1350,600);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    
    box1 = new Box(650,250,30,40);
    
    box2 = new Box(650,320,30,40);
    box3 = new Box(700,320,30,40);
    box4 = new Box(600,320,30,40);
    
    box5 = new Box(650,390,30,40);
    box6 = new Box(700,390,30,40);
    box7 = new Box(600,390,30,40);
    box8 = new Box(750,390,30,40);
    box9 = new Box(550,390,30,40);
    
    box10 = new Box(650,460,30,40);
    box11 = new Box(700,460,30,40);
    box12 = new Box(750,460,30,40);
    box13 = new Box(600,460,30,40);
    box14 = new Box(550,460,30,40);
    box15 = new Box(500,460,30,40);
    box16 = new Box(800,460,30,40);

    
    box17 = new Box(1140,100,30,40);
    
    box18 = new Box(1140,170,30,40);
    box19 = new Box(1190,170,30,40);
    box20 = new Box(1090,170,30,40);
    
    box21 = new Box(1140,240,30,40);
    box22 = new Box(1190,240,30,40);
    box23 = new Box(1090,240,30,40);
    box24 = new Box(1240,240,30,40);
    box25 = new Box(1040,240,30,40);

    mGround = new Ground(width/2,height,width,20);
    
    ground1 = new Ground(650,505,390,20);
    ground2 = new Ground(1140,285,290,20);

    polygon = Bodies.circle(150,300,40);
    World.add(world,polygon);

    chain = new Chain(this.polygon,{x : 150, y : 300});
    
}

function draw(){
    Engine.update(engine);
    background(rgb(138,43,226));
    
    rectMode(CENTER);
    imageMode(CENTER);

    chain.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    mGround.display();

    ground1.display();
    ground2.display();
  
    image(polygonImg,polygon.position.x,polygon.position.y,60,60);

    textSize(22);
    textFont("Fanstasy")
    fill("white")
    text("Drag the HEXAGONAL STONE and release it, to hit it towards the blocks...",80,100)

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
    if(keyCode === 32){
        chain.attach(this.polygon)
    }
}


var backgroundImg;
var hour;

var bg = "sunrise1.png";

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
     // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);
    // write code to display time in correct format here
    fill("black");
    textSize(30);

    if(hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
       }else if(hour==0){
         text("Time : 12 AM",100,100);
       }else{
        text("Time : "+ hour%12 + " AM", 50,100);
       }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    
    // write code slice the datetime
    hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06 ){
        debugger;
        bg = "sunrise1.png";
    }else if(hour>=06 && hour<=08 ){
        debugger;
        bg = "sunrise2.png";
    }else if(hour>=08 && hour<=11 ){
        debugger;
        bg = "sunrise3.png";
    }else if(hour>=11 && hour<=13){
        debugger;
        bg = "sunrise4.png";
    }else if(hour>=13 && hour<=15){
        debugger;
        bg = "sunrise5.png";
    }else if(hour>=15 && hour<=17 ){
        debugger;
        bg = "sunrise6.png";
    }else if(hour>=17 && hour<=18 ){
        debugger;
        bg = "sunset7.png";
    }else if(hour>=18 && hour<=20 ){
        debugger;
        bg = "sunset8.png";
    }else if(hour>=20 && hour<=23 ){
        debugger;
        bg = "sunset9.png";
    }else if(hour>=23 && hour==0){
        debugger;
        bg = "sunset10.png";
    }else if(hour==0 && hour<=03){
        debugger;
        bg = "sunset11.png";
    }else{
        debugger;
        bg = "sunset12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}

