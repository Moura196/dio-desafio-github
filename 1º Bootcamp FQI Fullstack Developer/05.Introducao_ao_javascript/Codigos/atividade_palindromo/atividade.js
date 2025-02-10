// Solução 1
function verificarPalindromo(string) {
    if(!string) return; //verifica se a variável é nula ou vazia ou undefined

    return string.split("").reverse().join("") === string;
}

//console.log(verificarPalindromo("ana")); -> true
//console.log(verificarPalindromo("ana baab ana")); -> true
//console.log(verificarPalindromo("ana baabana")); // -> false

// Solução 2
// rrrrr
// 01234
function verificarPalindromo2(string) {
    if(!string) return "string inexistente"; 

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(verificarPalindromo2("rrryrrr"));