//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, 
//a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calcImc(alt, peso){

       return peso/(alt * alt);
}


let res = parseInt(calcImc(1.89, 60));
console.log(res);