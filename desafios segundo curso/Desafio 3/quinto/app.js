//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, 
//utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calcAreaPerimetro (raio){
    let pi = 3.14
    let area = pi * raio * raio ;
    let perimetro = 2 * pi * raio;

    console.log(`area é ${area.toFixed(2)}`);
    console.log(`perimetro é ${perimetro.toFixed(2)}`);
}

let raio = 4;
calcAreaPerimetro(raio);
