var time = 60;
var score = 0;
var hit = 0;

// Load High Score
let highScore = localStorage.getItem("hghsc") || 0;
document.querySelector("#highscore").textContent = highScore;

function random() {
    let cul = "";
    for (let i = 1; i <= 60; i++) {
        let val = Math.floor(Math.random() * 10);
        cul += `<div class="bubbl"><h4>${val}</h4></div>`;
    }
    document.querySelector(".bubbelbord").innerHTML = cul;
}

function inter() {
    let int = setInterval(() => {
        if (time > 0) {
            time--;
            document.querySelector("#time").textContent = time;
        } else {
            clearInterval(int);
            document.querySelector(".bubbelbord").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

function sco() {
    score += 10;
    document.querySelector("#score").textContent = score;

    if (score >= 110) {
        document.querySelector("#res").textContent = "You Win!";
    }else{
        document.querySelector("#res").textContent = "You Lose!";
    }

    if (score >= 150) {
        document.querySelector("#res").textContent = "You Win!(2)";
    }

    if (score > highScore) {
        highScore = score;
        localStorage.setItem("hghsc", highScore);
        document.querySelector("#highscore").textContent = highScore;
    }
}

function k() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = hit;
}

function gil() {
    document.querySelector(".bubbelbord").addEventListener("click", function (e) {
        let n = Number(e.target.textContent);
        if (n === hit) {
            sco();
            random();
            k();
        }
    });
}

gil();
inter();
random();
k();



