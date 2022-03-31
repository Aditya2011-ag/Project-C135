status=" ";
text_input_value=" ";

function preload(){
}

function setup(){
    canvas=createCanvas(380,360);
    canvas.position(450,250);

    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,380,360);
}
function Start(){
    objectdetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Detecting Objects";
    document.getElementById("object_name").value.text_input_value;
}
function modelLoaded(){
    console.log("cocossd is initialised");
    status=true;
}