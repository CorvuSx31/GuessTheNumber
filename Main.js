"use strict";

let i=20;
let myscore=0;
let randomNumber

randomNumber = getRandomInteger(1, 20);
// console.log(randomNumber);

function getRandomInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkNumber() {
    let guess = (document.querySelector(".guess-input").value);

    if (guess == randomNumber) {
        (document.querySelector(".correct").textContent = "❤️ Correct Guess ");
        (document.querySelector(".score").textContent=`💯 Score:${i}`);
        (document.querySelector(".highscore").textContent =`🥇 Highscore:${i}`);
        (document.querySelector(".number-display").textContent =randomNumber );

    } else if (guess > randomNumber) {
        i=i-1;
        (document.querySelector(".correct").textContent = "To High !!!");
        (document.querySelector(".score").textContent=`💯 Score:${i}`);
        document.querySelector(".guess-input").value = "";
    } else if (guess < randomNumber) {
        i=i-1;
        (document.querySelector(".correct").textContent = "To Low !!!");
        (document.querySelector(".score").textContent=`💯 Score:${i}`);
        document.querySelector(".guess-input").value = "";
    }
}

function resetgame() {

    document.querySelector(".correct").textContent = "Start Guessing...";
    document.querySelector(".guess-input").value = "";
    document.querySelector(".score").textContent = "💯 Score:";
    (document.querySelector(".number-display").textContent ="");
    i=20

    randomNumber = getRandomInteger(1, 20); 
    // return randomNumber
}

// Attach event listeners to buttons
document.querySelector(".again-btn").addEventListener("click", resetgame);
document.querySelector(".check-btn").addEventListener("click", checkNumber);
