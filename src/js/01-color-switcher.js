
const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
}
let timerId = null;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onChangeBgColorOfBody = () => {
    refs.body.style.backgroundColor = getRandomHexColor();
}
const onStartBtnClick = () => {
    onChangeBgColorOfBody();
    timerId = setInterval(onChangeBgColorOfBody, 1000);
}
const onStopBtnClick = () => { clearInterval(timerId) }


refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);