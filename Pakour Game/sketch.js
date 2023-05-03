var player;
var default_ , default_img1, default_img2;
var mario, mario_img1, mario_img2;
var megaman, megaman_img1, megaman_img2;
var sonic, sonic_img1, sonic_img2;
var samus, samus_img1, samus_img2;
var day_bg, day_bg_img;
var evening_bg, evening_bg_img;
var night_bg, night_bg_img;
var reset, reset_img;
var pause, pause_img;
var play, play_img;
var menu, menu_img;
var character, character_img;
var obstacle1;
var obstacle2;
var obstacle3;
var ground;
var obstaclesGroup
var gameState = "intro";
var score = 0;
var count = 3;
var x = 20;
var velocity_x = -4;
var costume;
var bg;
var jump, die, bg_music, select, start;

function preload(){
  default_img1 = loadImage("Images/default.png");
  default_img2 = loadImage("Images/default2.png");

  sonic_img1 = loadImage("Images/sonic.png");
  sonic_img2 = loadImage("Images/sonic2.png");

  mario_img1 = loadImage("Images/mario.png");
  mario_img2 = loadImage("Images/mario2.png");

  megaman_img1 = loadImage("Images/megaman.png");
  megaman_img2 = loadImage("Images/megaman2.png");

  samus_img1 = loadImage("Images/samus.png");
  samus_img2 = loadImage("Images/samus2.png");

  day_bg_img = loadImage("Images/day_bg.png");
  evening_bg_img = loadImage("Images/evening_bg.png");
  night_bg_img = loadImage("Images/night_bg.png");

  obstacle1 = loadImage("Images/ogobstacle1.png");
  obstacle2 = loadImage("Images/ogobstacle2.png");
  obstacle3 = loadImage("Images/ogobstacle3.png");

  reset_img = loadImage("Images/reset.png");
  pause_img = loadImage("Images/pause.png");
  play_img = loadImage("Images/play.png");
  menu_img = loadImage("Images/menu.png");
  character_img = loadImage("Images/character.png");

  jump = new Audio('Music/jump.mp3');
  die = new Audio('Music/die.wav');
  bg_music = new Audio('Music/bg_music.wav');
  select = new Audio('Music/select.mp3');
  start = new Audio('Music/start.mp3')
}
function setup(){
  var canvas = createCanvas(800,400);
    
  ground = createSprite(400,400,800,50);
  ground.shapeColor = "peach";
  ground.visible = false;

  player = createSprite(250,300,5,5);
  player.visible = false;

  default_ = createSprite(250,50,5,5);
  default_.addImage("default", default_img1);
  default_.scale = 0.2;
  default_.visible = false;

  mario = createSprite(250,150,5,5);
  mario.addImage("mario", mario_img1);
  mario.scale = 0.2;
  mario.visible = false;

  megaman = createSprite(250,300,5,5);
  megaman.addImage("megaman", megaman_img1);
  megaman.scale = 0.2;
  megaman.visible = false;

  sonic = createSprite(550,150,5,5);
  sonic.addImage("sonic", sonic_img1);
  sonic.scale = 0.2;
  sonic.visible = false;

  samus = createSprite(550,300,5,5);
  samus.addImage("samus", samus_img1);
  samus.scale = 0.2;
  samus.visible = false;

  pause = createSprite(775, 30, 5, 5);
  pause.addImage("pause", pause_img);
  pause.scale = 0.05;
  pause.visible = false;

  reset = createSprite(200,200,50,50);
  reset.addImage("reset", reset_img);
  reset.scale = 0.5;
  reset.visible = false;

  character = createSprite(600,200,50,50);
  character.addImage("character", character_img);
  character.scale = 0.3;
  character.visible = false;

  play = createSprite(300,200,50,50);
  play.addImage("play", play_img);
  play.scale = 0.15;
  play.visible = false;

  menu = createSprite(500,215,50,50);
  menu.addImage("menu", menu_img);
  menu.scale = 0.19;
  menu.visible = false;

  day_bg = createSprite(400, 85, 10, 10);
  day_bg.addImage("day", day_bg_img);
  day_bg.scale = 0.1;
  day_bg.visible = false;

  evening_bg = createSprite(400, 200, 10, 10);
  evening_bg.addImage("evening", evening_bg_img);
  evening_bg.scale = 0.1;
  evening_bg.visible = false;

  night_bg = createSprite(400, 316, 10, 10);
  night_bg.addImage("night", night_bg_img);
  night_bg.scale = 0.0669;
  night_bg.visible = false;

  jump.loop = false;
  die.loop  = false;
  bg_music.loop = true;
  
  obstaclesGroup = new Group();
}

function draw(){
  //console.log(getFrameRate());
  //bg_music.play();
  if(gameState === "intro"){
    background("white");

    textSize(15);
    fill("black");
    text("Instructions :", 300, 20);
    text("The object of this game is to get the highest score by pakouring on the blocks with the player and not fall off", 60, 50);
    text("Use the left and right arrow keys to move left and right. Use the space bar to jump.", 120, 80);
    text("If you hold the space bar under an object, you'll 'hang' onto it", 140,110);
    text("Remember, the higher your score gets, the harder the game becomes", 150, 140);
    text("Your score will start increasing when you jump", 180, 170);
    text("Press 'P' or click the pause button at any time to bring up the pause menu which has these instructions", 70, 200);
    text("Press 'C' to choose your character", 230, 230);

    if(keyDown("c")){
      //select.play();
      gameState = "cc";
    }
  }

  if(gameState === "cc"){
    background("white");

    ground.visible = false;
    player.visible = false;
    reset.visible = false;
    character.visible = false;

    default_.visible = true;
    sonic.visible = true;
    mario.visible = true;
    samus.visible = true;
    megaman.visible = true;

    textSize(15);
    fill("black");
    text("Default", 225, 85);
    text("Mario", 230, 190);
    text("Megaman", 215, 340);
    text("Sonic", 530, 190);
    text("Samus", 530, 340);

    if(mousePressedOver(default_) || keyDown("o")){
      //select.play();
      costume = "default";
      player.addImage("player", default_img1);
      player.scale = 1;
      player.scale = 0.2;
      gameState = "cb";
    }

    if(mousePressedOver(mario) || keyDown("m")){
      //select.play();
      costume = "mario";
      player.addImage("player", mario_img1);
      player.scale = 1;
      player.scale = 0.2;
      gameState = "cb";
    }

    if(mousePressedOver(megaman) || keyDown("a")){
      //select.play();
      costume = "megaman";
      player.addImage("player", megaman_img1);
      player.scale = 1;
      player.scale = 0.2;
      gameState = "cb";
    }

    if(mousePressedOver(samus) || keyDown("s")){
      //select.play();
      costume = "samus";
      player.addImage("player", samus_img1);
      player.scale = 1;
      player.scale = 0.2;
      gameState = "cb";
    }

    if(mousePressedOver(sonic) || keyDown("f")){
      //select.play();
      costume = "sonic";
      player.addImage("player", sonic_img1);
      player.scale = 1;
      player.scale = 0.2;
      gameState = "cb";
    }
  }

  if(gameState === "cb"){
    background("white");

    default_.visible = false;
    sonic.visible = false;
    mario.visible = false;
    samus.visible = false;
    megaman.visible = false;

    day_bg.visible = true;
    evening_bg.visible = true;
    night_bg.visible = true;

    textSize(15);
    fill("black");
    text("Day", 225, 85);
    text("Evening", 225, 200);
    text("Night", 225, 315);

    if(mousePressedOver(day_bg) || keyDown("d")){
      //select.play();
      bg = "day";
      gameState = "play";
      //start.play();
    }

    if(mousePressedOver(evening_bg) || keyDown("e")){
      //select.play();
      bg = "evening";
      gameState = "play";
      //start.play();

    }

    if(mousePressedOver(night_bg) || keyDown("n")){
      //select.play();
      bg = "night";
      gameState = "play";
      //start.play();
    }
  }
    

  if(gameState === "play"){
    if(bg === "day"){
      background(day_bg_img);
      fill("black");
    }

    if(bg === "evening"){
      background(evening_bg_img);
      fill("black");
    }

    if(bg === "night"){
      background(night_bg_img);
      fill("white");
    }

    textSize(15);
    text("Score : " + score,380,25);
  
    player.visible = true;
    ground.visible = true;
    pause.visible = true;
    obstaclesGroup.setVisibleEach(true);

    reset.visible = false;
    play.visible = false;
    menu.visible = false;
    character.visible = false;

    default_.visible = false;
    sonic.visible = false;
    mario.visible = false;
    samus.visible = false;
    megaman.visible = false;

    day_bg.visible = false;
    evening_bg.visible = false;
    night_bg.visible = false;

    player.velocityY = player.velocityY + 0.7;

    if(keyDown("space")){
      player.y = player.y - 13.5;
      //jump.play();
    }

    if(keyDown("right_arrow")){
      player.x = player.x + 7;

      if(costume === "default"){
        player.addImage("player", default_img1); 
        player.scale = 1;
        player.scale = 0.2;
      }

      if(costume === "mario"){
        player.addImage("player", mario_img1); 
        player.scale = 1;
        player.scale = 0.2;
      }

      if(costume === "megaman"){
        player.addImage("player", megaman_img1); 
        player.scale = 1;
        player.scale = 0.2;
      }

      if(costume === "sonic"){
        player.addImage("player", sonic_img1); 
        player.scale = 1;
        player.scale = 0.2;
      }

      if(costume === "samus"){
        player.addImage("player", samus_img1); 
        player.scale = 1;
        player.scale = 0.2;
      }
    }

    if(keyDown("left_arrow")){
      player.x = player.x - 7;

      if(costume === "default"){
        player.addImage("player", default_img2);
        player.scale = 1; 
        player.scale = 0.2;
      }

      if(costume === "mario"){
        player.addImage("player", mario_img2); 
        player.scale = 1;
        player.scale = 0.2;
      }

      if(costume === "megaman"){
        player.addImage("player", megaman_img2); 
        player.scale = 1;
        player.scale = 0.2;
      }

      if(costume === "sonic"){
        player.addImage("player", sonic_img2); 
        player.scale = 1;
        player.scale = 0.2;
      }

      if(costume === "samus"){
        player.addImage("player", samus_img2); 
        player.scale = 1;
        player.scale = 0.2;
      }
    }

    if(player.y < 300){
      score = score + 1;
      ground.y = 1000;
      player.velocityX = velocity_x;
    }

    player.collide(obstaclesGroup);
    player.collide(ground);

    spawnObstacles();
        
    if(keyDown('p') || mousePressedOver(pause)){
      gameState = "pause";
    }

    if(player.x < 0 || player.y > 400){
      gameState = "end";
    }
  }

  if(gameState === "pause"){
    background("white");
    count = 3;
    score = score;
    
    player.velocityX = 0;
    player.velocityY = 0;
   
    player.visible = false;
    ground.visible = false;
    pause.visible = false;
    play.visible = true;
    menu.visible = true;
    
    obstaclesGroup.setVisibleEach(false);
    obstaclesGroup.setLifetimeEach(false);
    obstaclesGroup.setVelocityXEach(0);
    
    textSize(17);
    fill("black");
    text("Resume", 267, 255);
    text("Instructions", 455, 255);

    if(keyDown("i") || mousePressedOver(menu)){
      //select.play();
      gameState = "instructions";
    }
      
    if(keyDown("r") || mousePressedOver(play)){
      //select.play();
      gameState = "countdown";
    }
  }

  if(gameState === "countdown"){
    countdown();
  }
    
  if(gameState === "instructions"){
    background("white");

    menu.visible = false;
    play.visible = false;

    textSize(15);
    fill("black");
    text("Instructions :", 300, 20);
    text("The object of this game is to get the highest score by pakouring on the blocks with the player and not fall off", 60, 50);
    text("Use the left and right arrow keys to move left and right. Use the space bar to jump.", 120, 80);
    text("If you hold the space bar under an object, you'll 'hang' onto it", 140,110);
    text("Remember, the higher your score gets, the harder the game becomes", 150, 140);
    text("Your score will start increasing when you jump", 180, 170);
    text("Press 'P' or click the pause button at any time to bring up the pause menu which has these instructions", 70, 200);
    text("Press 'B' to go back", 260 , 230);
      
    if(keyDown("b")){
      background("white");
      gameState = "pause";
    } 
  }

  if(gameState === "end"){
    //die.play();
    textSize(15);

    if(bg === "day" || bg === "evening"){
      fill("black");
    }

    if(bg === "night"){
      fill("white");
    }

    text("Score : " + score,380,25);
    score = score;

    player.visible = false;
    pause.visible = false;

    reset.visible = true;
    character.visible = true;

    obstaclesGroup.destroyEach();
    
    if(mousePressedOver(reset) || keyDown("r")){
      //start.play();
      restart();
    }

    if(mousePressedOver(character) || keyDown("c")){
      //select.play();
      gameState = "cc";
    }
  }
  drawSprites();
}   

function restart(){
  gameState = "play";

  x = 20;
  score = 0;
  frameCount = 0;

  player.y = 300;
  player.x = 250;
  player.velocityX = 0;

  ground.y = 400;
  
  obstaclesGroup.setVelocityXEach(0);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function countdown(){
  menu.visible = false;
  play.visible = false;

  player.visible = true;
  ground.visible = true;
  obstaclesGroup.setVisibleEach(true);

  textSize(100);
  fill("lightblue");

  if(bg === "day"){
    background(day_bg_img);
  }

  if(bg === "evening"){
    background(evening_bg_img);
  }

  if(bg === "night"){
    background(night_bg_img);
  }
  
  text(count , 400, 200);
  await sleep(1000);

  count = 2;
  await sleep(1000);

  count = 1;
  await sleep(1000);
  
  gameState = "play";

  obstaclesGroup.setLifetimeEach(210);

  if(score < 200){
    obstaclesGroup.setVelocityXEach(-4);
  }

  if(score < 400 && score > 200){
    obstaclesGroup.setVelocityXEach(-4.1);
  }

  if(score < 600 && score > 400){
    obstaclesGroup.setVelocityXEach(-4.2);
  }

  if(score < 800 && score > 600){
    obstaclesGroup.setVelocityXEach(-4.3);
  }

  if(score < 1000 && score > 800){
    obstaclesGroup.setVelocityXEach(-4.4);
  }

  if(score < 1200 && score > 1000){
    obstaclesGroup.setVelocityXEach(-4.5);
  }

  if(score < 1400 && score > 1200){
    obstaclesGroup.setVelocityXEach(-4.6);
  }

  if(score < 1600 && score > 1400){
    obstaclesGroup.setVelocityXEach(-4.7);
  }
        
  if(score < 1800 && score > 1600){
    obstaclesGroup.setVelocityXEach(-4.8);
  } 
      
  if(score < 2000 && score > 1800){
    obstaclesGroup.setVelocityXEach(-4.9);
  }

  if(score > 2000){
    obstaclesGroup.setVelocityXEach(-5);
  }
} 
  
function spawnObstacles() {
  if(frameCount % x === 0) {
    var obstacle = createSprite(780,random(50,300),10,40);
      
    if(score < 200){
      obstacle.velocityX = -4;
      velocity_x = -4;
      x = 20;
    }

    if(score < 400 && score > 200){
      obstacle.velocityX = -4.1;
      velocity_x = -4.1;
      x = 21;
    }

    if(score < 600 && score > 400){
      obstacle.velocityX = -4.2;
      velocity_x = -4.2;
      x = 22;
    }

    if(score < 800 && score > 600){
      obstacle.velocityX = -4.3;
      velocity_x = -4.3;
      x = 23;
    }

    if(score < 1000 && score > 800){
      obstacle.velocityX = -4.4;
      velocity_x = -4.4;
      x = 24;
    }

    if(score < 1200 && score > 1000){
      obstacle.velocityX = -4.5;
      velocity_x = -4.5;
      x = 25;
    }

    if(score < 1400 && score > 1200){
      obstacle.velocityX = -4.6;
      velocity_x = -4.6;
      x = 26;
    }

    if(score < 1600 && score > 1400){
      obstacle.velocityX = -4.7;
      velocity_x = -4.7;
      x = 27;
    }
        
    if(score < 1800 && score > 1600){
      obstacle.velocityX = -4.8;
      velocity_x = -4.8;
      x = 28;
    } 
      
    if(score < 2000 && score > 1800){
      obstacle.velocityX = -4.9;
      velocity_x = -4.9;
      x = 29;
    }

    if(score > 2000){
      obstacle.velocityX = -5;
      velocity_x = -5;
      x = 30;
    }
      
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
      break;
      case 2: obstacle.addImage(obstacle3);
      break;
      case 3: obstacle.addImage(obstacle3);
      break;
      default: break;
    }
      
    obstacle.scale = 0.5;
    obstacle.lifetime = 210;
    obstaclesGroup.add(obstacle);
  }
}