var time;
var lapCount = 0;

var msDiv = document.getElementById("milisec");
var secDiv = document.getElementById("seconds");
var minDiv = document.getElementById("mins");

var lapContainer = document.getElementById("container");

var startBtn = document.getElementById("button-start");
var startDiv = document.getElementById("start-div");

var lapBtn = document.getElementById("button-lap");
var lapDiv = document.getElementById("lap-div");

startBtn.addEventListener("click", () => {
    if (startBtn.innerText === "Start") {
        start();
        startBtn.innerText = "Stop";
        startBtn.style.backgroundColor = "#42160e";
        startBtn.style.color = "#c22409";
        startDiv.style.backgroundColor = "#42160e";
        if (lapBtn.innerText === "Reset") changeLapDiv();
    } else if (startBtn.innerText === "Stop") {
        stop();
        startBtn.innerText = "Start";
        startBtn.style.backgroundColor = "#32502E";
        startBtn.style.color = "white";
        46;
        startDiv.style.backgroundColor = "#32502E";
        if (lapBtn.innerText === "Lap") changeLapDiv();
    }
});

lapBtn.addEventListener("click", () => {
    if (lapBtn.innerText === "Lap") addLap();
    else if (lapBtn.innerText === "Reset") {
        resetTimer();
        changeLapDiv();
    }
});

var start = () => {
    time = setInterval(stopwatch, 10);
};

var stop = () => {
    clearInterval(time);
};

var addLap = () => {
    stop();

    var laps = document.createElement("div");
    laps.setAttribute("id", "laps");

    var lapTimeDiv = document.createElement("span");
    lapTimeDiv.setAttribute("id", "lap-time");
    var lapIdDiv = document.createElement("span");
    lapIdDiv.setAttribute("id", "lap-id");

    lapIdDiv.innerText = "Lap " + ++lapCount;
    lapTimeDiv.innerText = `${minOut} : ${secOut} : ${milisecOut}`;

    laps.appendChild(lapIdDiv);
    laps.appendChild(lapTimeDiv);

    lapContainer.appendChild(laps);

    start();
};

var resetTimer = () => {
    stop();
    milisec = 0;
    sec = 0;
    min = 0;

    lapCount = 0;

    msDiv.innerHTML = "00";
    secDiv.innerHTML = "00";
    minDiv.innerHTML = "00";

    lapContainer.innerHTML = "00";
};

var milisec = 0;
var sec = 0;
var min = 0;

var milisecOut = 0;
var secOut = 0;
var minOut = 0;

var changeLapDiv = () => {
    if (lapBtn.innerText === "Lap") {
        lapBtn.innerText = "Reset";
        lapBtn.style.backgroundColor = "#FBA301";
        lapBtn.style.color = "black";
        lapDiv.style.backgroundColor = "#FBA301";
    } else if (lapBtn.innerText === "Reset") {
        lapBtn.innerText = "Lap";
        lapBtn.style.backgroundColor = "#aeaeac";
        lapBtn.style.color = "#353534";
        lapDiv.style.backgroundColor = "#aeaeac";
    }
};

var stopwatch = () => {
    ++milisec;

    if (milisec === 100) {
        milisec = 0;
        ++sec;
    }

    if (sec === 60) {
        sec = 0;
        ++min;
    }

    milisecOut = check(milisec);
    secOut = check(sec);
    minOut = check(min);

    msDiv.innerHTML = milisecOut;
    secDiv.innerHTML = secOut;
    minDiv.innerHTML = minOut;
};

var check = (x) => {
    if (x < 10) x = "0" + x;
    return x;
};
