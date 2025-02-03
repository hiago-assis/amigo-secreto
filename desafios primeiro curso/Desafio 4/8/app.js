//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. 
//Use if-else para imprimir a respectiva mensagem

let num = parseFloat(prompt("Digite um número"));

if(num == 0){
    console.log("Seu numero é zero");
}
else if(num > 0){
    console.log("Seu número é positivo");
}else{
    console.log("Seu número é negativo");
}