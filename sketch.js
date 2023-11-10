function setup() {
  createCanvas(400, 400);
  background("black")
}

function draw() {
  fill("black");
  stroke("pink");
  strokeWeight(1);
  
  if (mouseIsPressed){
  rect(mouseX, mouseY, 20, 20);
  }
}
