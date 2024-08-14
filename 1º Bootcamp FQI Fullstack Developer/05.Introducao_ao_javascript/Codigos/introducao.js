// Usar "//" ou "/**/" para comentar
// var y = 0; onde var é a declaração de uma variável
// const seria uma constante

/* Funções */

function soma(a, b) {
    console.log(a + b); // somente para conferir o resultado, realizar um debug
    return a + b // dizer o que esta função faz. Fazer retornar aquela função, permitindo eu usar em uma posterior função
}

soma(3, 5); // chamar/declarar a função para

/* Console */

console.log('Hello World'); // abrir o console na pasta que se encontra meu arquivo e rodar o arquivo através do comamndo "node arquivo.js"

function returnEvenValues(array) {
    let evenNums = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0) {
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par!`);
        }
    }
    console.log('os números pares são:', evenNums);
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenValues(array); // apenas depois de declarar a função que ela vai rodar