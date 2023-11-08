function preload(){

}

function setup(){
    canvas = createCanvas(550,600);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = ""
}

function draw(){
    image(video,0,0,650,483);
    tint(tint_color);
    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(450, 50, 70);
    circle(450, 380, 70);
    circle(70, 50, 70);
    circle(70, 380, 70);
    fill(0, 128, 0);
    rect(40, 370, 400, 30);
    rect(40, 40, 400, 30);
    rect(50, 60, 40, 300);
    rect(430, 60, 40, 300);
    
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}

function take_snapshot(){
    save("image.png");
}