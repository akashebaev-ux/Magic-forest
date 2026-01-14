
//=== Canvas ===
const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

//=== canvas size - full viewport===
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


 //=== Image Preloading settings ===
const images_RUN = 15;
const images_Jump = 11;
//=== to slower the image ===
const staggerFrames = 14;

const playerWidth = 300;
const playerHeight = 300;

//=== Player state===

let isJumping = false;
let isRunning = false;


//=== the main character's position  === 
const Player_Start_X = 150;
const GROUND_Y = 270;

//=== Player Runs loop ===

const playerRunImages = [];
for (let i = 1; i <= images_RUN; i++) {
    const img = new Image();
    img.src = `assets/images/${i}a.png`; // replaces images with actual image path
    playerRunImages.push(img); // returns the loaded image
}

//=== Player Jumps loop ===
const playerJumpImages = [];
for (let i = 1; i <= images_Jump; i++) {
    const img = new Image();
    img.src = `assets/images/${i}J.png`; // replaces images with actual image path
    playerJumpImages.push(img); // returns the loaded image
}

// === a frame index that changes over time 
let runFrame = 0;
//=== main loop===
function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(playerRunImages[runFrame], 50, canvas.height - playerHeight - 50, playerWidth, playerHeight);
        runFrame = (runFrame + 1) % playerRunImages.length; // Loop through run images
        requestAnimationFrame(animate);
}
animate();

//=== Input Handling ===

document.addEventListener("keydown", (e) => {

    // Jump
    if ((e.code === "ArrowUp" || e.code === "Space") && !isJumping) {
       isJumping = true; // Trigger jump
         let jumpFrame = 0;
    } 
    
   
   
});
document.addEventListener("keydown", (e) => {
    // Run
    if (e.code === "ArrowRight" && !isRunning) {
        isRunning = true;
        let runFrame = 0;
 }

});

//=== player state ===



//=== background state ===

//=== collision ===

