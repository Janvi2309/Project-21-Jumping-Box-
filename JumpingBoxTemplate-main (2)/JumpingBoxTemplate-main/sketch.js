var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var box, edges;



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,800);

    //create box sprite and give velocity

    box=createSprite(random(20,750),100,50,50)
    box.shapeColor="white";
    box.velocityY=+10;
    box.velocityX=+5;

    //create 4 different surfaces

    surface1=createSprite(100,775,150,50);
    surface2=createSprite(300,775,150,50);
    surface3=createSprite(500,775,150,50);
    surface4=createSprite(700,775,150,50);

    surface1.shapeColor="red";
    surface2.shapeColor="blue";
    surface3.shapeColor="yellow";
    surface4.shapeColor="green";
    
    


    

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

       edges=createEdgeSprites();
       box.bounceOff(edges);

       
    //add condition to check if box touching surface and make it box

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
         
      box.shapeColor="red";

      music.play();

    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
         
        box.shapeColor="blue";
  
        music.play();
  
      }

      if(surface3.isTouching(box) && box.bounceOff(surface3)){
         
        box.shapeColor="yellow";
  
        music.play();
  
      }

      if(surface4.isTouching(box) && box.bounceOff(surface4)){
         
        box.shapeColor="green";
  
        music.stop();

        
      }

    drawSprites();
}
