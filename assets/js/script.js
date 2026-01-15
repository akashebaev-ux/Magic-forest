
//=== STEP 1 CANVAS ===
const canvas = document.getElementById("backgroundCanvas"); //== gets the canvas from HTML
const ctx = canvas.getContext("2d"); //== drawing tool (draw images, shapes, clear screen)

//=== canvas size - full screen===

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

//===STEP 2 GAME SETTINGS ===

 //=== Image Preloading settings ===
const images_RUN = 15; // number of running images
const images_Jump = 11; // number of jumping images
//=== to slower the image ===
const staggerFrames = 14;

const playerWidth = 400; // sprite size 
const playerHeight = 400; // sprite size

//=== GAME STATE and SCORE ===
let gameOver = false;
let score = 0;
let scoreTimer = 0;


//=== BACKGROUND IMAGE ===
const backgroundImage = new Image();
backgroundImage.src = "assets/images/BG.png";

let bgX = 0;
const bgSpeed = 6;

//=== OBSTACLE IMAGE === 
const obstacleImage = new Image();
obstacleImage.src = "assets/images/stone.png";

//=== HIT SOUND ===
const hitSound = new Audio("");
hitSound.volume = 0.5; 

//=== STEP 3 PLAYER POSITION AND PHYSICS ===

//=== the main character's position  === 
const Player_Start_X = 150; // fixed horizontal position (player stays)
const FLOOR_OFFSET = 180;
let GROUND_Y = canvas.height - playerHeight - FLOOR_OFFSET; // floor position
const GRAVITY = 0.9; // pulls player down every frame
const JUMP_FORCE = 22; // how strong jump is 

//=== STEP 4 PLAYER STATE VARIABLES ===

let isJumping = false; // player is in the air
let isRunning = false; // right key held


let playerY = GROUND_Y; // vertical position
let velocityY = 0; // vertical speed

let rightKeyHeld = false;



//STEP 5 ANIMATION FRAME COUNTERS

let runFrame = 0; // controls running animation 
let jumpFrame = 0; // controls jumping animation 

//=== STEP 6 LOAD RUN IMAGES ===

//=== Player Runs loop ===

const playerRunImages = [];
for (let i = 1; i <= images_RUN; i++) {
    const img = new Image();
    img.src = `assets/images/${i}a.png`; // replaces images with actual image path
    playerRunImages.push(img); // returns the loaded image
}

//=== STEP 7 LOAD JUMP IMAGES ===

//=== Player Jumps loop ===
const playerJumpImages = [];
for (let i = 1; i <= images_Jump; i++) {
    const img = new Image();
    img.src = `assets/images/${i}J.png`; // replaces images with actual image path
    playerJumpImages.push(img); // returns the loaded image
}

//=== STEP 7.5 OBSTACLE SETTINGS ===
const obstacle = {
    x: canvas.width + 300, // starts off screen
    y: GROUND_Y + 150,
    width: 300,
    height: 200, // starts off screen
    active: true // obstacle disappears after passing
};

//=== RESET GAME ===
function resetGame() {
    playerY = GROUND_Y;
    velocityY = 0;
    isJumping = false;
    isRunning = false;
    rightKeyHeld = false;

    runFrame = 0;
    jumpFrame = 0;

    obstacle.x = canvas.width + 300;
    obstacle.active = true;
    

    bgX = 0;
    score = 0;
    scoreTimer = 0;

    gameOver = false;
}

// STEP 8  MAIN GAME LOOP (CORE OF EVERYTHING)

//=== main loop===
function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // animate() runs every frame; clearRect() clears previous frame
        
        //=== MOVE WORLD ===
        if (isRunning && !gameOver) {
            bgX -= bgSpeed;
         obstacle.x -= bgSpeed; // Move obstacle with background
        }
        if (bgX <= -canvas.width) {
            bgX = 0;
        }

        //=== Draw Background (LOOPED)===
        ctx.drawImage(backgroundImage, bgX, 0, canvas.width,  canvas.height);
        ctx.drawImage(backgroundImage, bgX + canvas.width, 0, canvas.width,  canvas.height);

        //=== Update ground if canvas resized ===
GROUND_Y = canvas.height - playerHeight - FLOOR_OFFSET;
obstacle.y = GROUND_Y + playerHeight - obstacle.height; // Update obstacle Y position



// STEP 8.1 GRAVITY AND FALLING ===
if (!gameOver) {
    velocityY += GRAVITY; // Apply gravity
    playerY += velocityY; // Update player vertical position
}

// === STEP 8.2 GROUND COLLISION ===

// Check for ground collision (Prevents falling through floor)
if (playerY >= GROUND_Y && !gameOver) {
    playerY = GROUND_Y;
    velocityY = 0;
    isJumping = false;
    jumpFrame = 0; // Reset jump frame counter

//=== RESUME RUNNING AFTER LANDING ===
     if (rightKeyHeld) {
            isRunning = true;
        }
}

//=== STEP 8.3 SELECT PLAYER IMAGE ===
let image; //==we decide which image to draw 

if (isJumping) {
    const index = Math.floor(jumpFrame / 6);
    image = playerJumpImages[Math.min(index, playerJumpImages.length - 1)];
    jumpFrame++;
    runFrame = 0;
} //== Slows jump animation and stops at last frame
else if (isRunning) {
    const index = Math.floor(runFrame / staggerFrames) % playerRunImages.length;
    image = playerRunImages[index];
    runFrame++;
} else {
    image = playerRunImages[0];
}

// === DRAW PLAYER ===
ctx.drawImage(image, 
    Player_Start_X, 
    playerY, playerWidth, playerHeight
);


// === DRAW OBSTACLE ===
if (obstacle.active) {
ctx.drawImage(
    obstacleImage, 
    obstacle.x, 
    obstacle.y, 
    obstacle.width, 
    obstacle.height
    );
}

//=== SCORE ===
if (isRunning && !gameOver) {

    scoreTimer++;
    if (scoreTimer % 10 === 0) score++;
}

ctx.fillStyle = "white";
ctx.font = "20px Arial";
ctx.fillText(`Score: ${score}`, 30, 50);

//=== STEP 8.4 COLLISION DETECTION ===
const playerBox = {
    x: Player_Start_X + 200,
    y: playerY + 40,
    width: playerWidth - 250,
    height: playerHeight - 150
};


const obstacleBox = {
    x: obstacle.x + 100,
    y: obstacle.y + 80,
    width: obstacle.width - 220,
    height: obstacle.height - 150
};


const collision =
    playerBox.x < obstacleBox.x + obstacleBox.width &&
    playerBox.x + playerBox.width > obstacleBox.x &&
    playerBox.y < obstacleBox.y + obstacleBox.height &&
    playerBox.y + playerBox.height > obstacleBox.y;

 
//=== GAME OVER ===
if (collision && !gameOver) {
    gameOver = true;
    isRunning = false;
    hitSound.currentTime = 0;
    hitSound.play();
} 

// === GAME OVER SCREEN ===
if (gameOver) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.textAlign ="center";

    ctx.font = "72px Arial";
    ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2 - 40);
    
    ctx.font = "36px Arial";
    ctx.fillText("Press R to Restart", canvas.width / 2, canvas.height / 2 + 40);
    ctx.textAlign = "left";

    return;
} 
requestAnimationFrame(animate);
}
animate();

// === STEP 9 INPUT HANDLING ===

document.addEventListener("keydown", (e) => {

//=== RESTART ===

if (gameOver && e.code === "KeyR") {
    resetGame();
    animate();
    return;
}

    // Jump
    if ((e.code === "ArrowUp" || e.code === "Space") && !isJumping && !gameOver) {
       isJumping = true; // Trigger jump
         velocityY = -JUMP_FORCE; // Apply jump force
        jumpFrame = 0;
    } 
    // Run
    if (e.code === "ArrowRight" && !gameOver) {
         rightKeyHeld = true;
         isRunning = true;
       
    }
}); 
 document.addEventListener("keyup", (e) => {
    // Stop running
    if (e.code === "ArrowRight") {
        rightKeyHeld = false;
        isRunning = false;
    }
}); 

