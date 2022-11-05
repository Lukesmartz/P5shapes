//the setup finction runs once at the start
function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent("p5container");
}

//the draw function runs 60 times per second in a continuous loop
function draw() {
    background(75); //greyscale colour for background




    
    
    fill(0, 0, 0);
    square(50,50, 500); 
    


    fill(130, 100, 50);
    ellipse(440, 480, 75,20); 
    
    fill(130, 100, 50);
    ellipse(470, 450, 20,75); 

    fill(130, 100, 50);
    ellipse(470, 400, 20,75); 

    fill(130,180 ,50 );
    square(470,250, 35,10); 


    fill(130,180 ,50 );
    square(495,250, 20,50,0); 


    fill(130,180 ,50 );
    square(480,235, 18,50,0); 

    fill(130,180 ,50 );
    square(465,250, 13,50,0); 
    
    fill(130, 100, 50);
    ellipse(470, 350, 20,75); 

    fill(130, 100, 50);
    ellipse(150, 480, 75,20); 


    fill(130, 100, 50);
    ellipse(470, 480, 30);

    fill(130, 100, 50);
    ellipse(120, 515, 20,75)

    fill(80);
    arc(480, 280, 80, 80, 0, PI + QUARTER_PI, PIE);



    fill(130, 100, 50);
    ellipse(120, 480, 30);

    fill(130,70 ,50 );
    square(275,370, 35); 

    
    fill(130,70 ,50 );
    square(275,395, 35); 

    fill(130, 50, 50);
    rect(240, 420, 100,20);

    fill(130, 50, 50);
    rect(195,440, 200,110);

    fill(130,70 ,50);
    rect(175,460, 20,40);
    
    fill(130,70 ,50);
    rect(395,460, 20,40);

    fill(130, 100, 50);
    square(200, 175, 200,20);
    
    fill(150, 100, 50);
    square(200, 175, 200,50);
    


    fill(200, 200, 0);
    square(210, 185, 180,20);

 

    fill(100, 255, 255);
    ellipse(300, 250, 75);

    fill(80);
    ellipse(300, 250, 50);
    
    fill(100, 255, 255);
    ellipse(300, 250, 45);

    fill(50);
    ellipse(310, 255, 10);


}

