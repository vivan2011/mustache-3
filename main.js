 NoseX=0;
 NoseY=0;

 
function preload(){
  MustacheFilter=loadImage("https://i.postimg.cc/rsZL6Jd2/mustache-student-math-favorite-for-friday-the-the-1.png");
}

function setup() {
    canvas= createCanvas(300,300);
    canvas.center();
    video =createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
console.log("PoseNet Is Initialized" );
}

function draw(){
image(video,0,0,300,300)
image(MustacheFilter,NoseX-20,NoseY-1,40,40);
}

function take_snapshot(){
    save('Mustache_Filter.jpeg');
}

function gotPoses(results)
{
 if(results.length > 0)   
 {
    console.log(results);
    NoseX = results[0].pose.nose.x;
    NoseY = results[0].pose.nose.y;  
    console.log("nose x="+NoseX);
     console.log("nose y="+NoseY);
    
                
 }
}