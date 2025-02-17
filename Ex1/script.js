let Easy = document.querySelector("#Easy");
let Intermediate = document.querySelector("#Intermediate");
let Hard = document.querySelector("#Hard");

const a = document.querySelector("#button");

function loop() {
    let b;
    let n;
    if (Easy.checked) {
        b = 10;
        n = 3;
    } else if (Intermediate.checked) {
        b = 20;
        n = 2;
    } else if (Hard.checked) {
        b = 30;
        n = 2;
    }
    
    let rand = Math.floor(Math.random() * b);
    let guess = prompt("Guess a number between 1 and " + b + ", you have " + n + " tries");

    for (let i = 1; i < n; i++) {
        if (guess == null) {
            break;
        } else if (guess == rand) {
            alert("You won congrats!!!!");
            return;
        } else {
            guess = prompt("Try again");
        }
    }
    
    alert("Sorry you lost :/");
}

a.addEventListener("click", loop);
