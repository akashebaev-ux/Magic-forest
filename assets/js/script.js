
//=== Canvas ===
const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

//=== canvas size ===
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


 //=== Image Preloading settings ===
const images_RUN = 15;
const images_Jump = 11;

const playerWidth = 300;
const playerHeight = 300;

//=== the main character's position  ===
const Player_Start_X = 150;
const GROUND_Y = 270;

//=== Player Runs ===

const playerRunImages = [];
for (let i = 1; i <= images_RUN; i++) {
    const img = new Image();
    img.src = `assets/images/${i}a.png`;
    playerRunImages.push(img);
}

//=== Player Jumps ===
const playerJumpImages = [];
for (let i = 1; i <= images_Jump; i++) {
    const img = new Image();
    img.src = `assets/images/${i}J.png`;
    playerJumpImages.push(img);
}

//=== main loop===
function draw() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
//=== draw the image on the canvas ===
ctx.drawImage(playerRunImages[0], 50, canvas.height - playerHeight - 50, playerWidth, playerHeight);
requestAnimationFrame(draw);
playerRunImages[0].onload = draw;
}

//=== Start drawing AFTER first image loads ===
playerRunImages[0].onload = () => {
    draw();
};

//=== player state ===



//=== background state ===

//=== collision ===

