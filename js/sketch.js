//the setup finction runs once at the start
function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent("p5container");
}

//the draw function runs 60 times per second in a continuous loop
function draw() {
    background(220); //greyscale colour for background

    fill(255, 255, 255);
    ellipse(300, 300, 400);


        
    
    fill(0, 0, 0);
    square(150, 150, 300); 
}
