const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const padZero = (num) => num.toString().padStart(2, '0');

// // Напишите реализацию createTimerAnimator
// // который будет анимировать timerEl

const createTimerAnimator = () => {
  let remainingTime = 0;
  let intervalId = null;

  const tick = () => {
    remainingTime--;
    if (remainingTime < 0) {
      clearInterval(intervalId);
      return;
    }

    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    timerEl.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )}`;
  };

  return (seconds) => {
    clearInterval(intervalId);
    remainingTime = seconds;
    timerEl.textContent = `${padZero(Math.floor(seconds / 3600))}:${padZero(
      Math.floor((seconds % 3600) / 60)
    )}:${padZero(seconds % 60)}`;
    intervalId = setInterval(tick, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^0-9]/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
