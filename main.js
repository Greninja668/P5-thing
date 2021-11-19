function preload(){

}
function setup(){
canvas=createCanvas(640,480)
canvas.position(110,250)
Video=createCapture(VIDEO)
Video.hide()

}
function draw(){
fill("red")
stroke("red")
circle(60,60,80)
circle(580,60,80)
circle(60,420,80)
circle(580,420,80)
fill("green")
stroke("green")
rect(100,50,440,20)
rect(100,410,440,20) 
rect(50,100,20,280)   
rect(570,100,20,280) 
image(Video,160,120,320,240)
}
function take_snapshot(){
save("name.png")
}