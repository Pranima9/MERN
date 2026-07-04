// Select elements
const time = document.querySelector(".time");

const startBtn = document.querySelector("button[Start]");
const pauseBtn = document.querySelector("button[Pause]");
const resumeBtn = document.querySelector("button[Resume]");
const stopBtn = document.querySelector("button[Stop]");

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let timer = null;

// Function to update time
function updateTime() {
    milliseconds++;

    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    let h = String(hours).padStart(2, "0");
    let m = String(minutes).padStart(2, "0");
    let s = String(seconds).padStart(2, "0");
    let ms = String(milliseconds).padStart(2, "0");

    time.textContent = `${h}:${m}:${s}:${ms}`;
}

// Start Button
startBtn.addEventListener("click", () => {
    timer = setInterval(updateTime, 10);

    startBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
    stopBtn.style.display = "inline-block";
});

// Pause Button
pauseBtn.addEventListener("click", () => {
    clearInterval(timer);

    pauseBtn.style.display = "none";
    resumeBtn.style.display = "inline-block";
});

// Resume Button
resumeBtn.addEventListener("click", () => {
    timer = setInterval(updateTime, 10);

    resumeBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
});

// Stop Button
stopBtn.addEventListener("click", () => {
    clearInterval(timer);

    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    time.textContent = "00:00:00:00";

    startBtn.style.display = "inline-block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
    stopBtn.style.display = "none";
});