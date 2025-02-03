//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada(num){

    for(let i = 1; i <= 10; i++){
        let resultado = num * i;
        console.log(resultado);
    } 
    
}



let numero = 5;
tabuada(numero);