video = "";
objects = [];
status = "";

function preload(){
}

function setup(){
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(380, 380);
  video.hide();
}

function draw(){
  image(video, 0, 0, 400, 300);
}

function start(){
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
  console.log("Model Loaded!");
  status = true;
  video.loop();
  video.speed(1);
  video.volume(0);
}