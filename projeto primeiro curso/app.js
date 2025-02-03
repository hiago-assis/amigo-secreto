
alert("Bem vindo ao jogo");




let vM = 10;

let nA = parseInt(Math.random() * vM + 1);
let numSec = nA;
console.log(numSec);

let res;
let tvt = 1;

while(numSec != res){
    
     res = prompt(`Digite um número entre 1 e ${vM}`);

    console.log("Resposta", res);
    console.log('Resultado da comparação:', res == numSec);

    if (numSec == res){
        break;    
    } else {
        if(res > numSec){
        alert(` O número secreto é menor que ${res}`);
    } 
        else{
            alert(`O número secreto é maior que ${res}`);
    }
        tvt++;
    }
}

let pT = tvt > 1 ? 'tentativas' : 'tentativa' ;
alert(`Você descobriu o número secreto que é ${numSec} com ${tvt} ${pT}`);

