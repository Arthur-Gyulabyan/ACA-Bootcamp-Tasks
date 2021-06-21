// Buttons
const start = document.querySelector('.start-btn');
const stop = document.querySelector('.stop-btn');
const reset = document.querySelector('.reset-btn');

// Timer items
let hour = document.querySelector('#hour');
let minute = document.querySelector('#minute');
let sec = document.querySelector('#sec');

let intervalId;

// Value of each timer item
let secInit = sec.textContent;
let minuteInit = minute.textContent;
let hourInit = hour.textContent;

const decrease = () => {
    let secCounter = Number(sec.textContent);
    let minuteCounter = Number(minute.textContent);
    let hourCounter = Number(hour.textContent);

    intervalId = setInterval(() => {
        if (secCounter === 0 && minuteCounter === 0 && hourCounter === 0) {
            clearInterval(intervalId);
            return;
        }

        if (secCounter === 0) {
            secCounter = 60;

            if (minuteCounter - 1 < 0) {
                hourCounter--;
                minuteCounter = 59;
            } else {
                minuteCounter--;
            }

            hour.textContent = String(hourCounter).length === 2 ? String(hourCounter) : `0${String(hourCounter)}`;
            minute.textContent = String(minuteCounter).length === 2 ? String(minuteCounter) : `0${String(minuteCounter)}`;
        }

        sec.textContent = String(secCounter - 1).length === 2 ? String(--secCounter) : `0${String(--secCounter)}`;
    }, 1000);
};

const stopTimer = () => {
    clearInterval(intervalId);
};

const resetTimer = () => {
    sec.textContent = secInit;
    minute.textContent = minuteInit;
    hour.textContent = hourInit;
    clearInterval(intervalId);
};

start.addEventListener('click', decrease);
stop.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);
