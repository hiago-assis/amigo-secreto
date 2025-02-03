//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. 
// Para isso, considere a cotação do dólar igual a R$4,80.

function convDolar(valorEmDolar){

    let cotacao = 4.80;
    let converter = valorEmDolar * cotacao;

    return converter;
}

let valorEmDolar = 10;
let res = convDolar(valorEmDolar);
console.log(`${valorEmDolar} dolares equivalem a ${res} reais`);

