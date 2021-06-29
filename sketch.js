const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImage();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    
}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine); 

    // write code to display time in correct format here

    noStroke();
    textSize(35)
    fill("white")
    text("Time"+hour, width-300, 50)

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
    var responseJSON = await response.JSON();
    var datetime = responseJSON.datetime();

    // write code slice the datetime
    hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=05)
    {
        bg = "sunrise1.png";
    }

    if(hour>=06 && hour<=07)
    {
        bg = "sunrise2.png";
    }

        if(hour>07 && hour<=08)
        {
            bg = "sunrise3.png";
        }

        if(hour>08 && hour<=09)
        {
            bg = "sunrise4.png";
        }

        if(hour>09 && hour<=10)
        {
            bg = "sunrise5.png";
        }

        if(hour>10 && hour<=11)
        {
            bg = "sunrise6.png";
        }

        if(hour>=18 && hour<=19)
        {
            bg = "sunset7.png";
        }
    
        if(hour>19 && hour<=20)
        {
            bg = "sunset8.png";
        }
    
            if(hour>20 && hour<=21)
            {
                bg = "sunset9.png";
            }
    
            if(hour>21 && hour<=22)
            {
                bg = "sunset10.png";
            }
    
            if(hour>22 && hour<=23)
            {
                bg = "sunset11.png";
            }
    
            if(hour>23 && hour<=24)
            {
                bg = "sunset12.png";
            }
        
    //load the image in backgroundImg variable here
            backgroundImg = loadImage(bg);
}
