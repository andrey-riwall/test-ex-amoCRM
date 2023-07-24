const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let timer;


const createTimerAnimator = () => {
  return (seconds) => {
    timer = setInterval(() => {
      hs = Math.floor(seconds/3600);
      min = Math.floor(seconds%3600/60);
      sec = seconds%60;

      timerEl.textContent = `${formatTime(hs)}:${formatTime(min)}:${formatTime(sec)}`;

      if (seconds <= 0) {
        clearInterval(timer);
      }

      seconds -= 1;
    }, 1000);
  }
};

const animateTimer = createTimerAnimator();


inputEl.addEventListener('keydown', (e) => {
  if(isNaN(Number(e.key)) && e.key != "Backspace") {
    e.preventDefault();
  }
});


buttonEl.addEventListener('click', () => {
  clearInterval(timer);
  const seconds = Number(inputEl.value);

  animateTimer(seconds-1);

  hs = Math.floor(seconds/3600);
  min = Math.floor(seconds%3600/60);
  sec = seconds%60;
  timerEl.textContent = `${formatTime(hs)}:${formatTime(min)}:${formatTime(sec)}`;

  inputEl.value = '';
});


function formatTime(number) {
  let num;
  if (number < 10) {
    num = `0${number}`
  } else {
    num = number;
  }

  return num;
}