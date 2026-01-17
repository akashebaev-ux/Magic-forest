
//=== STEP 1 CANVAS ===
const canvas = document.getElementById("backgroundCanvas"); //== gets the canvas from HTML
const ctx = canvas.getContext("2d"); //== drawing tool (draw images, shapes, clear screen)

//=== canvas size - full screen===
let scale = 1;


function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  scale = canvas.width / 1920; // base width
}
//=== canvas resize ===
resizeCanvas();
window.addEventListener("resize", resizeCanvas);
window.addEventListener("orientationchange", resizeCanvas);

//===STEP 2 GAME SETTINGS ===


//=== aspect ration ===

function getAspectRatio() {
    return canvas.height / canvas.width;
}

// === responsive floor offset ===
function getFloorOffset() {
    const ratio = getAspectRatio();
    if (ratio > 1.9) return 1100 * scale; // very tall phones
    if (ratio > 1.6) return 900 * scale; // normal phones
    if (ratio > 1.2) return 780 * scale; // tablets 
    return 260 * scale; // desktop
}
//=== mobile-safe bottom zone ===
function getBottomSafeZone() {
    return getAspectRatio() > 1.6 ? 80 * scale : 0;
}

 //=== Image Preloading settings ===
const images_RUN = 15; // number of running images
const images_Jump = 11; // number of jumping images
//=== to slower the image ===
const staggerFrames = 14;

//=== RESPONSIVE PLAYER SIZE ===
const BASE_PLAYER_SIZE = 400; // sprite size

const getPlayerWidth = () => BASE_PLAYER_SIZE * scale;
const getPlayerHeight = () => BASE_PLAYER_SIZE * scale; 

// === gravity adapts to screen shape ===
function getGravity() {
    return BASE_GRAVITY * scale * (getAspectRatio() > 1.6 ? 0.85 : 1);
}

//=== jump adapts to screen shape ===
function getJumpForce() {
    return BASE_JUMP_FORCE * scale * (getAspectRatio() > 1.6 ? 1.15 : 1);
}



//=== GAME STATE and SCORE ===
let gameOver = false;
let score = 0;
let scoreTimer = 0;

let gameWon = false;
let winPlayed = false;


//=== BACKGROUND IMAGE ===
const backgroundImage = new Image();
backgroundImage.src = "assets/images/BG.webp";

let bgX = 0;
const bgSpeed = 6;

//=== OBSTACLE IMAGE === 
const obstacleImage = new Image();
obstacleImage.src = "assets/images/stone.webp";

//=== RANDOM SPAWN SETTINGS ===
const MIN_OBSTACLE_GAP = 300; // minimum gap between obstacles
const MAX_OBSTACLE_GAP = 600; // maximum gap between obstacles

//=== HIT SOUND ===
const hitSound = new Audio("assets/audio/cartoon-wet-hit-352447.mp3");
hitSound.volume = 0.5; 

//=== WIN SOUND ===
const winSound = new Audio("assets/audio/winner-game-sound-404167.mp3");
winSound.volume = 0.5;

//=== STEP 3 PLAYER POSITION AND PHYSICS ===

//=== the main character's position  === 
const getPlayerStartX = () =>  canvas.width * 0.08;  // fixed horizontal position (player stays)

let GROUND_Y = 0; // floor position
const BASE_GRAVITY = 0.9; // pulls player down every frame
const BASE_JUMP_FORCE = 22; // how strong jump is 

 
//=== STEP 4 PLAYER STATE VARIABLES === 


let playerY = 0; // vertical position
let velocityY = 0; // vertical speed
let isJumping = false; // player is in the air
let isRunning = false; // right key held 
let rightKeyHeld = false;


let touchHeld = false;

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
    x: canvas.width + 600, // starts off screen
    y: 0,
    width: 300,
    height: 200, // starts off screen
    active: true // obstacle disappears after passing
};

//=== OBSTACLE  RESPAWN FUNCTION ===
function respawnObstacle() {
    obstacle.x = canvas.width + 
    (Math.random() * (MAX_OBSTACLE_GAP - MIN_OBSTACLE_GAP) + 
    MIN_OBSTACLE_GAP) * scale;

    obstacle.active = true;
}

//=== RESET GAME ===
function resetGame() {
    playerY = GROUND_Y;
    velocityY = 0;
    isJumping = false;
    isRunning = false;
    rightKeyHeld = false;

    runFrame = 0;
    jumpFrame = 0;
    winAnimFrame = 0; 

    obstacle.x = canvas.width + 300;
    obstacle.active = true;
    

    bgX = 0;
    score = 0;
    scoreTimer = 0;

    gameOver = false;
    gameWon = false;
    winPlayed = false;
}

// STEP 8  MAIN GAME LOOP (CORE OF EVERYTHING)

//=== main loop===
function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // animate() runs every frame; clearRect() clears previous frame
        
        const playerWidth = getPlayerWidth();
        const playerHeight = getPlayerHeight();

        GROUND_Y=canvas.height - playerHeight - getFloorOffset() - getBottomSafeZone();

        // === RESPONSIVE CHANGE: update ground every frame ===
       
        obstacle.y = GROUND_Y + playerHeight - obstacle.height * scale; // Update obstacle Y position
        //=== MOVE WORLD ===
        if (isRunning || touchHeld && !gameOver && !gameWon) {
            bgX -= bgSpeed * scale;
         if (obstacle.active) {obstacle.x -= bgSpeed * scale;} // Move obstacle with background

         //=== RESPAWN WHEN OFF SCREEN ===
        if (obstacle.x + obstacle.width * scale < 0) {
            respawnObstacle();
        }
    }
       

        if (bgX <= -canvas.width) {
            bgX = 0;
        }

        //=== Draw Background (LOOPED)===
        ctx.drawImage(backgroundImage, bgX, 0, canvas.width,  canvas.height);
        ctx.drawImage(backgroundImage, bgX + canvas.width, 0, canvas.width,  canvas.height);

    


// STEP 8.1 GRAVITY AND FALLING ===
if (!gameOver) {
    velocityY += getGravity(); // Apply gravity
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

// === DRAW PLAYER responsive X ===
ctx.drawImage(image, 
    getPlayerStartX(), 
    playerY, playerWidth, playerHeight
);


// === DRAW OBSTACLE ===
if (obstacle.active) {
ctx.drawImage(
    obstacleImage, 
    obstacle.x, 
    obstacle.y, 
    obstacle.width * scale, 
    obstacle.height * scale
    );
}

//=== SCORE ===
if (isRunning && !gameOver) {

    scoreTimer++;
    if (scoreTimer % 10 === 0) score++;
}
// === RESPONSIVE CHANGE scaled text ===
ctx.fillStyle = "white";
ctx.font = `${60 * scale}px Arial`;
ctx.fillText(`Score: ${score}`, 60 * scale, 100 * scale);

//=== WIN CONDITION ===
if (score > 100 && !gameWon && !gameOver) {
    gameWon = true;
    isRunning = false;
    obstacle.active = false; // hide obstacle
if (!winPlayed) {
    winSound.currentTime = 0;
    winSound.play();
    winPlayed = true;
    }
}

//=== WIN SCREEN (ANIMATED) ===
if (gameWon) {
    winAnimFrame++;
    ctx.fillStyle = "rgba(0, 0, 0, 0.65)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const bounce = Math.sin(winAnimFrame * 0.08) * 20;
    const glow = Math.abs(Math.sin(winAnimFrame * 0.05)) * 30;

    ctx.textAlign = "center";
    ctx.font = "80px Arial Black";
    ctx.shadowColor = "gold";
    ctx.shadowBlur = glow;
    ctx.fillStyle = "gold";
    ctx.fillText("YOU WIN!", canvas.width / 2, canvas.height / 2 - 40 + bounce);

    ctx.shadowBlur = 0;
    ctx.font = "36px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Press R to Restart", canvas.width / 2, canvas.height / 2 + 40);
    ctx.textAlign = "left";

     requestAnimationFrame(animate);
    return;
}

//=== STEP 8.4 COLLISION DETECTION ===
const playerBox = {
    x: getPlayerStartX() + 200 * scale,
    y: playerY + 40 * scale,
    width: playerWidth - 250 * scale,
    height: playerHeight - 150 * scale
};


const obstacleBox = {
    x: obstacle.x + 80 * scale,
    y: obstacle.y + 80 * scale,
    width: obstacle.width - 280 * scale,
    height: obstacle.height - 180 * scale
};


const collision =
    playerBox.x < obstacleBox.x + obstacleBox.width &&
    playerBox.x + playerBox.width > obstacleBox.x &&
    playerBox.y < obstacleBox.y + obstacleBox.height &&
    playerBox.y + playerBox.height > obstacleBox.y;

 
//=== GAME OVER ===
if (collision && !gameOver && !gameWon) {
    gameOver = true;
    obstacle.active = false; // hide obstacle
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

} 

requestAnimationFrame(animate);
}
animate();

// === STEP 9 INPUT HANDLING ===

document.addEventListener("keydown", (e) => {

//=== RESTART ===

if ((gameOver || gameWon) && e.code === "KeyR") {
    resetGame(); 
    return;
}

    // Jump
    if ((e.code === "ArrowUp" || e.code === "Space") && !isJumping && !gameOver) {
       isJumping = true; // Trigger jump
         velocityY = -getJumpForce(); // Apply jump force
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

//=== RESPONSIVE CHANGE: MOBILE TOUCH CONTROLS ===
canvas.addEventListener("touchstart", (e) => {
    e.preventDefault();

    touchHeld = true;
    isRunning = true;

    // Jump
    if (!isJumping) {
        isJumping = true; // Trigger jump
        velocityY = -getJumpForce(); // Apply jump force
        jumpFrame = 0;
    } isRunning = false;
}, {passive: false});

canvas.addEventListener("touchend", (e) => {
    touchHeld = false;
    
});