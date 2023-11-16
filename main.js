noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristzY = 0;

function preload() {

}

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('posNet Is Initiaized');
}

function draw() {
    background('rgb(0,255,0)');
    fill('rgb(100%,0%,10%)');
    stroke('rgb(0,255,0)')
    square(noseX, noseY, difference);

}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =" + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = leftWristX - rightWristX;
        
    }
}
