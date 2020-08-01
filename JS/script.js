
// const i = 0;
// const total = ('counter');

document.getElementById('plus').addEventListener('click', increaseValue)
function increaseValue() {
    let inputString = document.getElementById('input').value;
    let inputNumber = parseInt(inputString);
    let answerString = document.getElementById('answer').innerHTML;
    let answerNumber = parseInt(answerString);
    document.getElementById("answer").innerHTML = inputNumber + answerNumber;
};

document.getElementById('minus').addEventListener('click', decreaseValue)
function decreaseValue() {
    let inputString = document.getElementById('input').value;
    let inputNumber = parseInt(inputString);
    let answerString = document.getElementById('answer').innerHTML;
    let answerNumber = parseInt(answerString);
    document.getElementById("answer").innerHTML = answerNumber - inputNumber;
};