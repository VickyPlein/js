const start = document.getElementById("start");
const stop = document.getElementById("stop");
const timer = document.getElementById("timer");

// setTimeout(testas, 3000);  - iškviečia vieną kartą
// timerId=setInterval(testas, 1000);  - iškviečia nuolatos iki tuomet kai bus sustabdytas


let i = 0;
let timerId;
//Šią funkciją iškviesime kas sekundę
let kasSekunde = () => {
    [min, sec] = timer.value.split(":");
    total = Number(min) * 60 + Number(sec);
    total--;
    min = Math.floor(total / 60);
    sec = total % 60;
    timer.value = `${min}:${String(sec).padStart(2, '0')}`;
    if (total == 0) {
        clearInterval(timerId);
    }
}



let startTimer = () => {
    timerId = setInterval(kasSekunde, 1000);
}

let stopTimer = () => {
    clearInterval(timerId);
}


start.onclick = startTimer;
stop.onclick = stopTimer;