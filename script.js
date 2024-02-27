//VARS
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');
const hiddenBox = document.querySelector('.hiddenBox')
const resultBox = document.querySelector('.resultBox')
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1

//EVENTS
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keypress', (event) => {
    if (event.key == 'Enter' && hiddenBox.classList.contains('hide')) {
        handleResetClick();
    };
});

//FUNCS
function handleTryClick(event) {
    event.preventDefault();
    const inputNumber = document.querySelector("#inputNumber");

    if (inputNumber.value === "" || inputNumber.value < 0 || inputNumber.value > 10) {
        alert('Insira um número entre 0 e 10.');
    } else {
        if (Number(inputNumber.value) === randomNumber) {
            toggleScreen();
            resultBox.querySelector('span').innerText = `Acertou em ${xAttempts} tentativas`;
        }
        xAttempts++;
    }

    randomNumber = Math.floor(Math.random() * 10) + 1;
    inputNumber.value = ""; //input reset
};

function handleResetClick() {
    toggleScreen()
    xAttempts = 1;
};

function toggleScreen() {
    hiddenBox.classList.toggle('hide');
    resultBox.classList.toggle('hide');

};

