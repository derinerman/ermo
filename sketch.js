var ninja= 0;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
 //an RGB color for the canvas' background
}

//The draw function happens over and over again
function draw() {
  background(182,234,250);
  //circle
  stroke(130,255,127); // an RGB color for the circle's border
  strokeWeight(5);
  fill(50,100,100,50); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  line(100,300,100,250); // center of canvas, 20px dia

fill(12,50,130);
strokeWeight(2);
rect(0,400,500,150);
fill(10,50,60,mouseY);
stroke(190,10,57);
strokeWeight(4);
triangle(150,300,10,400,10,300);
stroke(10,mouseY,100);
strokeWeight(3);
fill(110,100,10)
textFont('Courier');
textSize(30);
text('Bosphorus',25,120)
strokeWeight(4);
stroke(232,242,111);
fill(250,255,168);
ellipse(400,70,ninja,ninja);

strokeWeight(2);
stroke(20,80,80);
fill(67,99,65);
rect(350,450,10,70);

strokeWeight(2);
stroke(20,80,80);
fill(67,99,65);
rect(360,430,10,80);

strokeWeight(2);
stroke(20,80,80);
fill(67,99,65);
rect(340,440,10,80);

strokeWeight(2);
stroke(20,80,80);
fill(67,99,65);
rect(160,450,10,70);

strokeWeight(2);
stroke(20,80,80);
fill(67,99,65);
rect(150,430,10,80);

strokeWeight(2);
stroke(20,80,80);
fill(67,99,65);
rect(140,440,10,80);

strokeWeight(2);
stroke(255,255,255);
fill(255,255,255);
ellipse(170,50,70,50);

strokeWeight(2);
stroke(255,255,255);
fill(255,255,255);
ellipse(180,60,90,40);

strokeWeight(2);
stroke(255,255,255);
fill(255,255,255);
ellipse(160,50,100,40);


strokeWeight(2);
stroke(70,80,90);
fill(100,300,50,50);
rect(100,200,mouseY,50);


}
 function mousePressed() {  
  if (ninja>=300){
    ninja=0;
  } else{ 
    ninja=ninja+2;
  }
}