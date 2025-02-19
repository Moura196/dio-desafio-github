function validaArray(arr, num) {
	try {
        if (!arr && !num) throw new ReferenceError('Parâmetros não enviados');

        if (typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo object.');

        if (typeof num !== 'number') throw new TypeError('Array precisa ser do tipo number.');
        
        if (arr.length !== num) throw new RangeError('O tamanho do array é diferente do número enviado como parâmetro.');

        return arr;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log(e.message);
            console.log(e.name);
        } else if (e instanceof TypeError) {
            console.log(e.message);
            console.log(e.name);
        } else if (e instanceof RangeError) {
            console.log(e.message);
            console.log(e.name);
        } else {
            console.log("Tipo de erro não esperado:" + e);
        }
    }
}

//console.log(validaArray());
//console.log(validaArray(5, 5));
//console.log(validaArray([], 'a'));
//console.log(validaArray([], 2));
console.log(validaArray([1, 2, 3, 4, 5], 5));