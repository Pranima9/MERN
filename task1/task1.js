
const timer = document.getElementsByClassName("timer");
let timesss = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update,10);
    }
}

function stop(){

}

function pause(){

}

function resume(){
    
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime/(1000*60*60));
    let minutes = Math.floor(elapsedTime / (1000*60)%60);
    let seconds = Math.floor(elapsedTime/1000 % 60);
    let ms = Math.floor(elapsedTime % 1000 / 10);

    display.textContent = ``
}