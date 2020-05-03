
// INITIALIZE ALL YOUR VARIABLES
var r = 0, g = 50, b = 255;


function setup(){
  createCanvas(1200,800);  
}

function draw(){
  // change the value of Red based on the mouse movement about the X axis
  r = mouseX;

  // change the value of Green based on the mouse movement about the X axis
  g = mouseY;

  // change the value of Blue based on the mouse movement about the X axis
  b = mouseX / 1.5;

  // Use the map() function to do so.

  // Pass the values to the background() function you have learnt previously.
  background(rgb(r, g, b));

  // Create an ellipse that will move around with you mouse about the X axis.
  fill("white");
  stroke("black")
  var pointer =  ellipse(mouseX, mouseY, 10, 10);
  // Remember to fill the canvas with white paint before creating the ellipse.
}