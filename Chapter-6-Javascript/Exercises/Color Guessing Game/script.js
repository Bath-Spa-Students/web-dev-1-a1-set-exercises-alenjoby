// I used this for Constants and Variables
const boxes = document.querySelectorAll(".box");
const colorDisplay = document.getElementById("head-color");
const bar = document.getElementById("bar");
const newColorsBtn = document.getElementById("new");
const replayBtn = document.getElementById("replay");
let colors = [];
let pickedColor;
let chances = 3;

// This is the Function to generate random RGB colors 
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// This Function helps to generate new colors for boxes
function generateColors() {
    colors = [];
    for (let i = 0; i < boxes.length; i++) {
        colors.push(generateRandomColor());
        boxes[i].style.backgroundColor = colors[i];
    }
}

//This  Function is used to pick a random color for the game
function pickColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// This is the initial setup for the game
function setupGame() {
    chances = 3; // Reset chances
    generateColors();
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor.toUpperCase(); // Use uppercase for RGB value
}

// This is the game Logic: when a box is clicked
boxes.forEach(box => {
    box.addEventListener("click", () => {
        const clickedColor = box.style.backgroundColor;
        if (clickedColor === pickedColor) {
            // Win
            colorDisplay.textContent = "CORRECT!";
            changeBarColor(pickedColor); // When the selectcted color is correct , it changes the bar color to winning color
        } else {
            // Lose a chance
            box.style.backgroundColor = "#232323"; // Hide the incorrect box
            chances--;
            if (chances === 0) {
                colorDisplay.textContent = "GAME OVER!";
                changeBarColor("#C7B7A3"); // when the game is over, it resets to default bar color
            }
        }
    });
});

// This Function changes the bar color
function changeBarColor(color) {
    bar.style.backgroundColor = color;
}

// Replay Button Click
replayBtn.addEventListener("click", () => {
    setupGame();
});

// New Colors Button Click
newColorsBtn.addEventListener("click", () => {
    setupGame();
});

// Start the game
setupGame(); 
