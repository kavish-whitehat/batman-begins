var particles=[];
var bruce=[]

function preload(){
    
}

function setup() {
    createCanvas(800,400);
    createSprite(400, 200, 50, 50);
  
    for (var j=40;j<=width;j=j+50){
      plinkos.push(new Plinko(j,75));
    }
  
    for (var j=15;j<=width-10;j=j+50){
      plinkos.push(new Plinko(j,175));
    }
}
function mousePressed(){
    if(gameState==="end"){
     count++;
     particle=new Particles(mouseX,10,10,10);
    }
}

function draw() {
    background(255,255,255);  
  
    
    drawSprites();
}