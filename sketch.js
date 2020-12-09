var P;

var button;
var slide;
var inP;

var in2;
var h2;
var h3;

var stuff;

function setup() {

  createCanvas(windowWidth, 400);
  background(220);
  button = createButton("hello");
  button.mousePressed(boom);
  
  slide = createSlider(0,100,50);
  inP = createInput("wright here");
  
  P = createElement("p","hi");
  in2 = createInput("secont in ");
  h2 = createElement("h2","h2");
  h3 = createElement("h3","h3");
  
  
  P.mouseOver(change);
  
  in2.changed(changeH2);
  h2.mouseOver(makeRed);
  
  //stuff = select("h1");
  //stuff.style("color", "red");
  // TRYED AND FAILD 
}

function changeH2(){
  h2.html(in2.value()); 
}

function change(){
  P.html("hello");
}

function makeRed(){
  h2.style("color" , "red");
}

function draw() {
  background(50);
  ellipse(slide.value(),50,50,50);
  //P.html(inP.value());
  
}


function boom(){
  print("kabooom!!!!");
  
}