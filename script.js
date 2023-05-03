var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var btnRandomColor = document.getElementById('btnRandomColor');

function changeBgGradient() {
    body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';

    css.textContent = body.style.background + ';';
}

function changeInputPageGradientDetail(color1Hex, color2Hex) {
    color1.value = color1Hex;
    color2.value = color2Hex;

    changeBgGradient();
}

function getRandomHexValue() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function randomColorHandler() {
    // var randomColor1 = getRandomHexValue();
    // var randomColor2 = getRandomHexValue();

    // changeInputPageGradientDetail(randomColor1, randomColor2);
    css.innerHTML = '<span>Yeo</span>';
}

color1.addEventListener('input', changeBgGradient);

color2.addEventListener('input', changeBgGradient);

btnRandomColor.addEventListener('click', randomColorHandler);

changeInputPageGradientDetail('#FF0000', '#FFFF00');