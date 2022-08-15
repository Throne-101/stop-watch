//select
let displayTag = document.querySelector(".display");
let playButton = document.querySelector(".play");
let pauseButton = document.querySelector(".pause");
let resetButton = document.querySelector(".reset");

//convert time to string format
const timeToString = (time) => {
    let diffInHrs = time / 3600000; 
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
    
    let diffInMs = (diffInSec - ss) * 1000;
    let ms = Math.floor(diffInMs);

    let formattedHH = hh.toString().padStart(2,"0");
    let formattedMM = mm.toString().padStart(2,"0");
    let formattedSS = ss.toString().padStart(2,"0");
    let formattedMS = ms.toString().padStart(3,"0");

    return `${formattedHH}:${formattedMM}:${formattedSS}:${formattedMS}`;
    
}


//declare variable to use in our function below
let startTime;
let elapsedTime=0;
let timerInterval;

//create function
const print = (txt) => {
    displayTag.innerHTML = txt;
}

let start = () => {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    },10);   
    showButton("play");
}

let pause = () => {
    clearInterval(timerInterval);
    showButton("pause");
}

let reset = () => {
    clearInterval(timerInterval);
    print("00:00:00:00");
    elapsedTime=0;
    showButton("pause");
}

let showButton = (buttonKey) => {
   
    let buttonToShow = buttonKey === "play" ? playButton : pauseButton;
    let buttonToHide = buttonKey === "play" ? pauseButton : playButton;

    buttonToShow.style.display = "none";
    buttonToHide.style.display = "block";
}





//createEventListeners
playButton.addEventListener("click",start);
pauseButton.addEventListener("click",pause);
resetButton.addEventListener("click",reset);