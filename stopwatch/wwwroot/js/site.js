// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;
let lapCounter = 0;

// Function to start or stop the stopwatch
function startStop() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateDisplay, 1000);
        document.getElementById("startStopBtn").innerText = "Pause";
        isRunning = true;
    } else {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        document.getElementById("startStopBtn").innerText = "Start";
        isRunning = false;
    }
}

// Function to reset the stopwatch
function reset() {
    clearInterval(timer);
    elapsedTime = 0;
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("startStopBtn").innerText = "Start";
    document.getElementById("lapsList").innerHTML = ""; // Clear laps
    isRunning = false;
}

// Function to record a lap
function recordLap() {
    if (isRunning) {
        const lapsList = document.getElementById("lapsList");
        lapCounter++;
        const lapTime = document.createElement("li");
        lapTime.innerText = `Lap ${lapCounter}: ${formatTime(elapsedTime)}`;
        lapsList.appendChild(lapTime);
    }
}

// Function to update the display
function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    document.getElementById("display").innerText = formatTime(elapsedTime);
}

// Function to format time as hh:mm:ss
function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

// Function to pad single digits with leading zero
function pad(unit) {
    return unit < 10 ? '0' + unit : unit;
}
