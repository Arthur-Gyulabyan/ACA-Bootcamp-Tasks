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


// Change timer
const hourInput = document.querySelector('.hour-input');
const minuteInput = document.querySelector('.minute-input');
const secInput = document.querySelector('.sec-input');
const confirm = document.querySelector('.confirm');


// Setting input value's maximum length to 2
[hourInput, minuteInput, secInput].forEach(el => {
    el.addEventListener('input', (event) => {
        if (event.target.value.length > 2) {
            event.target.value = event.target.value.slice(0, 2);
        }
    });
});

// Block '+, -, ., e' in input fields.
[hourInput, minuteInput, secInput].forEach(el => {
    const invalidChars = ['-', '+', 'e', '.'];

    el.addEventListener('keydown', function (e) {
        if (invalidChars.includes(e.key)) {
            e.preventDefault();
        }
    });
});

// [hour, minute, sec].forEach(el => {
//     el.addEventListener('click', (event) => {
//         confirm.style.display = 'block';
//
//         if (event.target === hour) {
//             hour.style.display = 'none';
//             hourInput.classList.remove('input');
//             hourInput.focus();
//             hourInput.value = '';
//             hourInput.value = `${hour.textContent}`;
//         }
//
//         if (event.target === minute) {
//             minute.style.display = 'none';
//             minuteInput.classList.remove('input');
//             minuteInput.focus();
//             minuteInput.value = '';
//             minuteInput.value = `${minute.textContent}`;
//         }
//
//         if (event.target === sec) {
//             sec.style.display = 'none';
//             secInput.classList.remove('input');
//             secInput.focus();
//             secInput.value = '';
//             secInput.value = `${sec.textContent}`;
//         }
//     });
// });

hour.addEventListener('click', () => {
    hour.style.display = 'none';
    hourInput.classList.remove('input');
    hourInput.focus();
    hourInput.value = '';
    hourInput.value = `${hour.textContent}`;
});

minute.addEventListener('click', () => {
    minute.style.display = 'none';
    minuteInput.classList.remove('input');
    minuteInput.focus();
    minuteInput.value = '';
    minuteInput.value = `${minute.textContent}`;
});

sec.addEventListener('click', () => {
    sec.style.display = 'none';
    secInput.classList.remove('input');
    secInput.focus();
    secInput.value = '';
    secInput.value = `${sec.textContent}`;
});

[hourInput, minuteInput, secInput].forEach(el => {
    el.addEventListener('focusout', (event) => {
        const value = event.target.value;

        if (value === '') {
            event.target.value = '00';
        }

        if (value.length === 1) {
            event.target.value = `0${event.target.value}`;
        }

        if (event.target === minuteInput && value > 59 || event.target === secInput && value > 59) {
            event.target.value = '59';
        }

        event.target.previousElementSibling.style.display = 'inline';
        event.target.classList.add('input');
        event.target.previousElementSibling.textContent = event.target.value;
    });
});

