var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber; // innerHTML pega o HTML
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber; // innerHTML pega o elemento do HTML
}

// see activities at https://github.com/stebsnusch/basecamp-javascript/tree/main/introducao-ao-javascript/contador