var canvas;
var title;
var startButton;
var lvl1, lvl2, lvl3, lvl4;

function setup(){
  
  createCanvas(600,400);
  background(255, 255, 0);
  title = createElement("h3");
  title.html("Welcome To Space Jumpers!");
  title.position(200, 100);
  
  startButton = createButton("start");
  startButton.position(300,200);

  startButton.mousePressed(()=>{
    title.hide();
    createLevelButtons();
    background(244, 255, 255);
    startButton.hide();
  });
}


function draw(){

}
function createLevelButtons()
{
  lvl1 = createButton("level1");
  lvl1.position(200, 175);

  lvl2 = createButton("level2");
  lvl2.position(350, 175);

  lvl3 = createButton("level3");
  lvl3.position(200, 225);
  
  lvl4 = createButton("level4");
  lvl4.position(350, 225);


}