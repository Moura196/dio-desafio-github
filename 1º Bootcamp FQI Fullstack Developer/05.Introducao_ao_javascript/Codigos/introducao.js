// Usar "//" ou "/**/" para comentar
// var y = 0; onde var é a declaração de uma variável
// const seria uma constante

/* Funções */

// function soma(a, b) {
//     console.log(a + b); // somente para conferir o resultado, realizar um debug
//     return a + b // dizer o que esta função faz. Fazer retornar aquela função, permitindo eu usar em uma posterior função
// }

// soma(3, 5); // chamar/declarar a função para

// /* Console */

// console.log('Hello World'); // abrir o console na pasta que se encontra meu arquivo e rodar o arquivo através do comamndo "node arquivo.js"

// function returnEvenValues(array) {
//     let evenNums = [];
//     for(let i = 0; i < array.length; i++){
//         if(array[i] % 2 === 0) {
//             evenNums.push(array[i]);
//         } else {
//             console.log(`${array[i]} não é par!`);
//         }
//     }
//     console.log('os números pares são:', evenNums);
// }

// //let array = [1, 2, 4, 5, 7, 8];

// returnEvenValues(array); // apenas depois de declarar a função que ela vai rodar

// // Continuação...
// // Variáveis: tipos primitivos
// //     - boolean:
// var vOuF = false;
// console.log(typeof(vOuF));  

// //     - number:
// var numQualquer = 1;
// console.log(typeof(numQualquer));

// //     - string:
// var nome = 'Gabriel';
// console.log(typeof(nome));

// // Declarando um array:
// let array = ['string', 1,  true];
// console.log(array);

// // acessando um índice de um array
// console.log(array[0]); //dentro dos "[]" vai o número do índice

// // MANIPULANDO ARRAYS
// // forEach:
// array.forEach(function(intem,index){console.log(item, index)});

// // push: novo dado dentro do array
// array.push('novo_item');

// // pop: removo um ultimo item do array
// array.pop();

// // shift: remover um item do início do array
// array.shift();

// // unshift: adiciona um item no início do array
// array.unshift('novo item no início');

// // indexOf: qual o index de algum valor
// array.indexOf(true);

// // splice: remove ou substitui um item pelo índice
// array.splice(0, 3);

// // slice: retorna uma parte de array já existente
// let novoArray = array.slice(0, 3);

// // Criando um objeto
// let  objeto = {
//     string: 'string',
//     number: 1,
//     boolean: true,
//     array: ['array'],
//     objetoInterno: {
//         objectInterno: 'objeto interno' 
//     }
// };

// console.log(objeto.string); // acessando uma propriedade específica do objeto

// // Formas de desestruturação de um objeto
// var string = objeto.string;
// console.log(string);

// var arrayInterno = objeto.array;
// console.log(arrayInterno);

// var { string, boolean, objectInterno } = objeto;

// ESTRUTURAS CONDICIONAIS

var jogador1 = 0;
var jogador2 = 0;
var placar;

if (jogador != -1) { // Ninho ou aninhamento de if
    if (jogador1 > 0 && jogador2 == 0) {
        console.log('Jogador 1 pontuou!');
        placar = jogador1 > jogador2;
} else if (jogador2 > 0) {
        console.log('Jogador 2 pontuou!');
        placar = jogador2 > jogador1;
    } else {
        console.log('Ninguem marcou ponto')
    }
}

// if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos!') : console.log('Jogadores são inválidos!')

// SWITCH/CASE
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou!');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou!');
        break;
    default:
        console.log('Ninguem ganhou!');
}

// ESTRUTURAS DE REPETIÇÃO
// for
    //estrutura for([expressaoInicial];[condicao];[incremento]){declaracao}
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'};

for (let indice =0; indice < array.length; indice++) {
    console.log(indice);
}

//for in 
    //estrutura for([indice] in [objeto ou array]) {declaracao}
    //com array
for (let i in array) {
    console.log(i);
}

    //com objeto
for (i in object) { //javascript já entende que é variável de estado
    console.log(i);
}

//for of
    //estrutura for([indice] of [array]){declaracao}
    //com array
for (i of array) {
    console.log(i);
}

    //com object
    //objects não são interáveis(elas variam), já o array são números inteiros
for (i of object.propriedade1) {
    console.log(i);
}

//while
    //estrutura while(condicao){declaracao}
var a = 0;
while (a < 10) {
    a++;
    console.log(a);
}

//do while
do {
    a++;
    console.log(a)
} while (a < 10)