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

textElement.focus();

//timer
const timeInterval = setInterval(updateTime, 1000);

function addWordToDOM() {
    randomWord = words[Math.floor(Math.random() * words.length)];
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
    endGameContainer.innerHTML = '';

    // endGameContainer.appendChild(scoreMessage);
    textElement.disabled = true; 
    const scoreMessage = document.createElement('div');
    scoreMessage.textContent = `Your time ran out. your final score is: ${score}.`

    // const restartButton = document.createElement('button');
    // restartButton.textContent = 'Restart';

    // restartButton.onclick = function() {
    //     location.reload();  // Reload the page to restart the game but something isnt working
    // };
    // endGameContainer.appendChild(restartButton);
}

textElement.addEventListener ("input", function (e) {
    const typedWord = e.target.value;

    if (typedWord === randomWord) {
        addWordToDOM();
        updateScore();

        if (difficulty === "hard"){
            time = time + 2;
        } else if (difficulty === "medium"){
            time = time + 3;
        } else {
            time = time + 5;
        }
        updateTime();

        e.target.value = ""; //clear 
    }
});

 settingsBtn.addEventListener("click", function() {
    settings.classList.toggle("hide");
});

difficultyChoice.addEventListener("change", function (e) {
    difficulty = e.target.value;
});

  addWordToDOM();

