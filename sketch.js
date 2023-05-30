//List of all image names
var imageNames = ['000039.jpg', '12.gif', '20230511_150828.jpg', '24.gif', 'amorbus.png', 'bob.png', 'Brazil.jpg', 'buff guy.png', 'Coygirl meep moop short ed.png', 'dumb.png', 'EHgjvXFU0AE-Epy.png', 'engineer gaming 2.png', 'engineer-gaming.gif', 'Erect.png', 'FeG3DfTXgAANzge.jpg', 'finn.png', 'FqChQE3aIAAHfj8.jpg', 'Furry pfp.png', 'gaming.jpg', 'Good times 1.jpg', 'Goofy Spike.JPG', 'Handsome man.png', 'i-appreciate-that-v0-9e33mudagj2a1.webp', 'imgoingtokillyou.png', 'IMG_20230520_233634.jpg', 'maxresdefault.jpg', 'q2k2ldry82181.webp', 'RDT_20230220_1233252042272026382396296.jpg', 'RDT_20230221_232812882262336154386262.jpg', 'RDT_20230221_2328264657580679662649962.jpg', 'RDT_20230221_2328321806674946767676524.jpg', 'RDT_20230221_2328401293858015803326634.jpg', 'RDT_20230221_2328534526242800256175452.jpg', 'RDT_20230221_2329133163264076115887188.jpg', 'RDT_20230221_2329421444316103353064310.jpg', 'RDT_20230306_2046464431852418656777595.jpg', 'RDT_20230306_2046551220827897057757414.jpg', 'RDT_20230306_2048328912981836819452162.jpg', 'RDT_20230306_2048396967991413949596268.jpg', 'RDT_20230512_14054526911991932602090.jpg', 'RDT_20230515_1908483771636423495553007.jpg', 'RDT_20230515_1908507752283182333887203.jpg', 'RDT_20230521_2128102357207094253931557.jpg', 'RDT_20230529_1741032177377072071143709.jpg', 'RDT_20230530_0304209045322085185457943.jpg', 'RDT_20230530_1329062371242318445027192.jpg', 'RDT_20230530_2110123114391629876089510.jpg', 'scariest-jerma-face-of-2022-v0-me38zowmusv81.webp', 'Screenshot 2022-10-02 091556.png', 'Screenshot_20230206_160404_BeReal.jpg', 'Screenshot_20230207_143058_Instagram.jpg', 'Screenshot_20230220_172652_Google.jpg', 'Screenshot_20230221_232822_Reddit.jpg', 'Screenshot_20230426_234916_Gmail.jpg', 'Screenshot_20230429_191149_Instagram.jpg', 'Screenshot_20230501_194412_Firefox.jpg', 'Screenshot_20230523_174122_Reddit.jpg', 'Screenshot_20230531_004320_Reddit.jpg', 'TheThing.webp', 'tIANAMEN sQUARE.jpg', 'unknown-15.png', 'Untitled.jpg', 'Void Steve.png', '[More applause].png']
//List of all images
var images = [];
var shownImages = [];
//List of all prompts
var prompts = ['Video Profile for a dating app\n', "You are the CEO of a company that's about to go bust\n", 'Travel writer recounting a recent trip\n', 'Reading a bed time story to a child\n', "You're a politician responding to allegations while trying to save his career\n", "You're pitching your breakout film about your life to investors\n", 'The story of how you meet the love of your life\n', 'Defending your client in court\n', 'University lecture on economics\n', 'Sex Ed talk in High School\n', 'High School English lesson\n', 'Motavational Speaker delivering a speech\n', 'James Bond villian revealing his master-plan\n', 'Real Estate agent giving a house tour\n', 'Prime Minister giving a speech on COVID\n', 'Pitching the next Star Wars Series/Film\n', 'Arriving at the Gates of Heavan, and having to defend your sins to God\n', 'Dectetive reviewing the clues at a briefing'];
var chosenPrompt = "Cum in me";
//Started game?
var startScreen = true;
var promptScreen = false;
var currentImageDisplay = 0;

//Load all images in images folder (may take a sec)
function preload() {
    for (i = 0; i < imageNames.length; i++) {
        tempVar = loadImage('images/'+imageNames[i])
        images.push(tempVar);
        console.log("Loaded "+imageNames[i]);
    }
    console.log("---DONE LOADING---")
}
function setup() {
    //Makes images display from the centre
    imageMode(CENTER);
    //Centres text
    textAlign(CENTER);
    //Randomise the first image
    currentImageDisplay = Math.floor(random(0, images.length));
    createCanvas(windowWidth, windowHeight)
}
function draw() {
    
    background("black");
    if(startScreen) {
        stroke("pink")
        fill("pink")
        textSize(130)
        text("Presentation Game", windowWidth/2, windowHeight/2);
        textSize(50)
        text("Click to start", windowWidth/2, windowHeight/1.75);
    }
    else if(promptScreen) {
        textSize(160)
        text("Prompt:", windowWidth/4.1, windowHeight/5, windowWidth/2,windowHeight/1.5);
        textSize(80)
        text(chosenPrompt, windowWidth/4.1, windowHeight/2.6, windowWidth/2,windowHeight/1.5);
    }
    else {
        if (images.length > 0) {
        //Scale images so they fit on screen
        if (images[currentImageDisplay].width > windowWidth) {
            images[currentImageDisplay].height = windowWidth/(images[currentImageDisplay].width/images[currentImageDisplay].height)
            images[currentImageDisplay].width = windowWidth;
        }
        if (images[currentImageDisplay].height > windowHeight) {
            images[currentImageDisplay].width = windowHeight/(images[currentImageDisplay].height/images[currentImageDisplay].width)
            images[currentImageDisplay].height = windowHeight;
        }
        if (images[currentImageDisplay].width < windowWidth/2 && images[currentImageDisplay].height < windowHeight/2) {
            images[currentImageDisplay].width = images[currentImageDisplay].width*2
            images[currentImageDisplay].height = images[currentImageDisplay].height*2;


        }
        image(images[currentImageDisplay],windowWidth/2,windowHeight/2);
        }
        else {
            text("YOU USED ALL THE IMAGES FUCKWIT", windowWidth/2, windowHeight/2);
        }
    }
    
}

function mouseClicked() {
    if (startScreen) {
      startScreen = false;
      promptScreen = true;
      chosenPrompt = prompts[Math.floor(random(0, prompts.length))]
      //chosenPrompt = strPrompt.substring(0, strPrompt.length - 1);
    }
    else if (promptScreen) {
        promptScreen = false;
    }
    else {
        if (image.length > 0)
        shownImages.push(images[currentImageDisplay])
        images.splice(currentImageDisplay, 1);
        currentImageDisplay = Math.floor(random(0, images.length));
    }
  }