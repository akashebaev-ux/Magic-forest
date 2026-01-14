
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

const playerWidth = 300; // sprite size 
const playerHeight = 300; // sprite size


//=== STEP 3 PLAYER POSITION AND PHYSICS ===

//=== the main character's position  === 
const Player_Start_X = 150; // fixed horizontal position (player stays)
const FLOOR_OFFSET = 150;
let GROUND_Y = canvas.height - playerHeight - FLOOR_OFFSET; // floor position
const GRAVITY = 1; // pulls player down every frame
const JUMP_FORCE = 20; // how strong jump is 

//=== STEP 4 PLAYER STATE VARIABLES ===

let isJumping = false; // player is in the air
let isRunning = false; // right key held

let playerY = GROUND_Y; // vertical position
let velocityY = 0; // vertical speed


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

// STEP 8  MAIN GAME LOOP (CORE OF EVERYTHING)

//=== main loop===
function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // animate() runs every frame; clearRect() clears previous frame

        //=== Update ground if canvas resized ===
GROUND_Y = canvas.height - playerHeight - FLOOR_OFFSET;


// STEP 8.1 GRAVITY AND FALLING ===

velocityY += GRAVITY; // Apply gravity
playerY += velocityY; // Update player vertical position

// === STEP 8.2 GROUND COLLISION ===

// Check for ground collision (Prevents falling through floor)
if (playerY >= GROUND_Y) {
    playerY = GROUND_Y;
    velocityY = 0;
    isJumping = false;
    jumpFrame = 0; // Reset jump frame counter
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

// === Draw Player ===
ctx.drawImage(image, 
    Player_Start_X, 
    playerY, playerWidth, playerHeight
);
requestAnimationFrame(animate);
}
animate();

// === STEP 9 INPUT HANDLING ===

document.addEventListener("keydown", (e) => {

    // Jump
    if ((e.code === "ArrowUp" || e.code === "Space") && !isJumping) {
       isJumping = true; // Trigger jump
         velocityY = -JUMP_FORCE; // Apply jump force
        jumpFrame = 0;
    } 
    // Run
    if (e.code === "ArrowRight") {
        isRunning = true;
    }
}); 
 document.addEventListener("keyup", (e) => {
    // Stop running
    if (e.code === "ArrowRight") {
        isRunning = false;
    }
}); 
