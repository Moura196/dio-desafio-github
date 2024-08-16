var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

// following instructions from DIO Class about JavaScript introduction:

// function increment(){
//     currentNumber = currentNumber + 1;
//     currentNumberWrapper.innerHTML = currentNumber; // innerHTML pega o elemento HTML
// }

// function decrement(){
//     currentNumber = currentNumber - 1;
//     currentNumberWrapper.innerHTML = currentNumber; // innerHTML pega o elemento do HTML
// }

// see activities at https://github.com/stebsnusch/basecamp-javascript/tree/main/introducao-ao-javascript/contador
// Activities: 1: OK; 2: OK; 3: OK;

document.getElementById('subtrair').addEventListener('click', decrement);
        
document.getElementById('adicionar').addEventListener('click', increment);

document.getElementById('subtrair').addEventListener('click', changeColors);

document.getElementById('adicionar').addEventListener('click', changeColors);

function increment(){
    // criando condições para permitir ou não que a função seja ativada
    if (currentNumber < 10) {
        currentNumber = currentNumber + 1;
        document.getElementById('currentNumber').innerHTML = currentNumber;
    } else {
        alert('Você não pode aumentar mais este número!')
    }
}

function decrement(){
    // criando condições para permitir ou não que a função seja ativada
    if (currentNumber > -10) {
        currentNumber = currentNumber - 1;
        document.getElementById('currentNumber').innerHTML = currentNumber;
    } else {
        alert('Você não pode diminuir mais este número!');
    }
}

function changeColors() {
    if (currentNumber < 0) {
        document.getElementById('currentNumber').style.color = 'red';
    } else if (currentNumber > 0) {
        document.getElementById('currentNumber').style.color = 'blue';
    } else {
        document.getElementById('currentNumber').style.color = 'black';
    }
}