const start = document.querySelector('.start-btn');
const stop = document.querySelector('.stop-btn');
const reset = document.querySelector('.reset-btn');
const timer = document.querySelector('.timer');

let hour = document.querySelector('#hour');
let minute = document.querySelector('#minute');
let sec = document.querySelector('#sec');

const decrease = () => {
    let secCounter = Number(sec.textContent);
    let minuteCounter = Number(minute.textContent);
    let hourCounter = Number(hour.textContent);


    const id = setInterval(() => {
        if (secCounter === 0 && minuteCounter === 0 && hourCounter === 0) {
            clearInterval(id);
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

start.addEventListener('click', decrease);
