//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';




function verificarConsole(){
    console.log("Botao do console foi clickado");
}

function exibirAlerta(){
    alert("Eu amo JS");
}

function exibirPrompt(cidade){

    cidade = prompt('Digite o nome de uma cidade');
    alert(`Estive em ${cidade} e lembrei de você `);
}

function soma(){

    let x = parseInt(prompt('Digite um numero'));
    let y = parseInt(prompt('Digite outro número'));

    let soma = x + y;
  
   

    alert(`Sua soma deu ${soma}`);

}