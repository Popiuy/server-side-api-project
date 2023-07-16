// select all necessary elements
var timeDisplay = document.querySelector('#time-display');
var newsBtn = document.querySelector('#news-btn');
var catsBtn = document.querySelector('#cats-btn');

//create and assign necessary variables
var startTime = 0;
var pastTime = 0;
var currentTime = 0;
var paused = true;
var timerInterval;
var hours = 0;
var minutes = 0;
var seconds = 0;

// event listener when news button is clicked on, news timer starts
newsBtn.addEventListener('click', () => {
    if (paused){
        paused = false;
        startTime = Date.now() - pastTime;
        timerInterval = setInterval(updateTime, 1000);
    }
});

// event listener when cat button is click on, news timer stops
catsBtn.addEventListener('click', () => {
    if(!paused){
        paused = true;
        pastTime = Date.now() - startTime
        clearInterval(timerInterval);
    }
});



//update time when page is newly loaded and timer begins
function updateTime(){
    pastTime = Date.now() - startTime;

    seconds = Math.floor((pastTime / 1000) % 60);
    minutes = Math.floor((pastTime / (1000 * 60)) % 60);
    hours = Math.floor((pastTime / (1000 * 60 * 60)) % 60);

    seconds = pad(seconds);
    minutes = pad(minutes);
    hours = pad(hours);
    
    //this is what is being displayed to the user
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    

    //add a zero as padding for any single digit numbers
    function pad(unit){
        return (('0') + unit).length > 2 ? unit : '0'+ unit;
    }

}




