// function atividade(a, b) {
//     let soma = a + b;

//     if (a == b) {
//         if (soma > 10 && soma > 20) {
//             alert(`Os números ${a} e ${b} são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20!`);
//         } else if (soma > 10 && soma < 20) {
//             alert(`Os números ${a} e ${b} são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20!`);
//         } else {
//             alert(`Os números ${a} e ${b} são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20!`);
//         }
//     } else {
//         if (soma > 10 && soma > 20) {
//             alert(`Os números ${a} e ${b} não são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20!`);
//         } else if (soma > 10 && soma < 20) {
//             alert(`Os números ${a} e ${b} não são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20!`);
//         } else {
//             alert(`Os números ${a} e ${b} não são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20!`);
//         }
//     }
// }

// atividade(7, 2);

function comparacao(a, b) {
    const saoIguais = a == b;

    (saoIguais) ? alert('são iguais') : alert('não são iguais');
    soma(a, b);
}

function soma(a, b) {
    let soma = a + b;

    (soma > 10) ? alert('maior que 10') : alert('menor que 10');
}

comparacao(1, 2);