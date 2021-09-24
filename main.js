function preload(){

}
function setup(){
    canvas = createCanvas(640,480);
    canvas.center();
}
function draw(){
    stroke(0,255,0);
    fill(0, 255, 0);
    rect(0, 18, 640, 20);
    rect(0, 442, 640, 20);
    rect(18, 18, 20, 480);
    rect(602, 18, 20, 480);
    stroke(255, 0, 0);
    fill(255, 0, 0)
    ellipse(28, 28, 56, 56);
    ellipse(612, 28, 56, 56);
    ellipse(612, 452, 56, 56);
    ellipse(28, 452, 56, 56);
}