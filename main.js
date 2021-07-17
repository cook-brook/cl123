function setup(){
    video= createCapture(VIDEO);
    video.size(550,550);

    canvas= createCanvas(510,510);
    canvas.position(560,170);

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function draw(){
    background('#808080');
}
function modelLoaded(){
    console.log("posenet is inicialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }

}
