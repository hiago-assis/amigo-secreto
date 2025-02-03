//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcFatorial(num){

  if (numero == 0 || numero == 1){
    return 1;
  }

  let fatorial = 1;

  for(let i = 2; i <= numero; i++){
            fatorial *= i;
  }
  return fatorial;

} 

let numero = 5;
let res = calcFatorial(numero);

console.log(`o fatorial de ${numero} é ${res}`);
