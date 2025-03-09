let timer;
let isRunning = false;
let timeLeft = 25 * 60; 
const timerDisplay = document.querySelector('.timer');
const alertSound = document.getElementById('alertSound');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                alertSound.play();
                isRunning = false;
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    stopTimer();
    timeLeft = 25 * 60;
    updateDisplay();
}

function setShortBreak() {
    stopTimer();
    timeLeft = 5 * 60;
    updateDisplay();
}

function setLongBreak() {
    stopTimer();
    timeLeft = 15 * 60;
    updateDisplay();
}

document.querySelector('.startBtn').addEventListener('click', startTimer);
document.querySelector('.stopBtn').addEventListener('click', stopTimer);
document.querySelector('.resetBtn').addEventListener('click', resetTimer);
document.querySelector('.shortBreakBtn').addEventListener('click', setShortBreak);
document.querySelector('.longBreakBtn').addEventListener('click', setLongBreak);

updateDisplay();
