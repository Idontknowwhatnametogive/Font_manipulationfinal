difference = 0;
rightWristX= 0;
leftWristX= 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    
    canvas = createCanvas(500, 450);
    canvas.center()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function draw(){
    background('#969A97');
    document.getElementById("font_size").innerHTML="font size of text will be "+ difference+ "px";
    textSize(difference);
    fill('#0000FF');
    text('Neil',50, 400);
}
function gotPoses(results)
{
    if(results.length > 0 )
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX);

    }
}
function modelLoaded(){
    console.log('PoseNet Is Initialized!')
}


