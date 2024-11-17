// Typing-game 

// REQUIREMENTS: 
// Variables for the DOM elements

// Array
const words = [
    "dependent",
    "dog",
    "superficial",
    "admit",
    "juice",
    "javascript",
    "developer",
    "airplane",
    "great",
    "fun",
    "manipulate",
    "cat",
    "transition",
    "school",
    "computer",
    "programming",
    "drag",
    "loving",
    "north",
  ];


const wordElement = document.getElementById("word");
const textElement = document.getElementById("text");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const endGameContainer = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const difficultyChoice = document.getElementById("difficulty");


let randomWord;
let score = 0;
let time = 10;
let difficulty = difficultyChoice.value;


//timer
const timeInterval = setInterval(updateTime, 1000);

function addWordToDOM() {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    wordElement.innerHTML = randomWord;
} //för att skapa ett random ord och add word to DOM

function updateScore (){
    score = score + 1;
    scoreElement.innerHTML = score;
}

function updateTime(){
    time = time - 1;
    timeElement.innerHTML = time + "s"; //visar i sekunder
    if (time <= 0) {
        clearInterval(timeInterval); //stoppar countdown timer
        gameOver(); //call function game over
    }
}
function gameOver(){
    endGameContainer.innerHTML = `
    <h2>Time ran out</h2>
    <p>Your final score is ${score}</p>
    `;

}
textElement.addEventListener
 