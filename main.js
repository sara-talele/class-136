Status = "";
objectName = "";

function setup() {
    canvas = createCanvas(480, 320);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 480, 320);
}

function start() {
    ObjectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status - Object Detected";
    objectName = document.getElementById('object_name').value;
}

function modelLoaded() {
    console.log("model loaded!");
    Status = true;
    video.loop();
}