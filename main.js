//-----------variables-----------//
status = "";
obj_name = "";
//-----------functions-----------//
function setup() {
canvas = createCanvas(380,380);
canvas.position(492,260);
video = createCapture(VIDEO);
video.size(380,380);
video.hide();
}

function start() {
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting Objects";
obj_name =  document.getElementById("object_name").value;
}

function modelLoaded() {
console.log('Model Loaded!');
status = true;
}

function draw() {
image(video,0,0,380,380);
}