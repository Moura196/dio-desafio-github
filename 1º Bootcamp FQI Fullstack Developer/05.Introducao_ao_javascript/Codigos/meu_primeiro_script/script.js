<script>
    alert('Tudo certo jovem!');
</script>

// Continuação...
// Variáveis: tipos primitivos
//     - boolean:
var vOuF = false;
console.log(typeof(vOuF));  

//     - number:
var numQualquer = 1;
console.log(typeof(numQualquer));

//     - string:
var nome = 'Gabriel';
console.log(typeof(nome));

// Declarando um array:
let array = ['string', 1,  true];
console.log(array);

// acessando um índice de um array
console.log(array[0]); //dentro dos "[]" vai o número do índice

// MANIPULANDO ARRAYS
// forEach:
array.forEach(function(intem,index){console.log(item, index)});

// push: novo dado dentro do array
array.push('novo_item');

// pop: removo um ultimo item do array
array.pop();

// shift: remover um item do início do array
array.shift();

// unshift: adiciona um item no início do array
array.unshift('novo item no início');

// indexOf: qual o index de algum valor
array.indexOf(true);

// splice: remove ou substitui um item pelo índice
array.splice(0, 3);

// slice: retorna uma parte de array já existente
let novoArray = array.slice(0, 3);

// Criando um objeto
let  objeto = {
    string: 'string',
    number: 1,
    boolean: true,
    array: ['array'],
    objetoInterno: {
        objectInterno: 'objeto interno' 
    }
};

console.log(objeto.string); // acessando uma propriedade específica do objeto

// Formas de desestruturação de um objeto
var string = objeto.string;
console.log(string);

var arrayInterno = objeto.array;
console.log(arrayInterno);

var { string, boolean, objectInterno } = objeto;