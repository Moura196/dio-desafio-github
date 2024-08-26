var a = prompt('Digite um número:');
var b = prompt('Digite outro número:');

function atividade(a, b) {
    let soma = a + b;

    if (a == b) {
        console.log('iguais');
        if (soma > 10 && soma > 20) {
            alert(`Os números ${a} e ${b} são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20!`);
        } else if (soma > 10 && soma < 20) {
            alert(`Os números ${a} e ${b} são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20!`);
        } else {
            alert(`Os números ${a} e ${b} são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20!`);
        }
    } else {
        if (soma > 10 && soma > 20) {
            alert(`Os números ${a} e ${b} não são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20!`);
        } else if (soma > 10 && soma < 20) {
            alert(`Os números ${a} e ${b} não são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20!`);
        } else {
            alert(`Os números ${a} e ${b} não são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20!`);
        }
    }
}