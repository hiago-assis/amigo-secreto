function areaPerimetro(alt, larg){

    let area = alt * larg;
    let perimetro = 2*(alt + larg);

    console.log(`${area}`);
    console.log(`${perimetro}`);
}

let altura = 3; 
let largura = 5;

areaPerimetro(altura, largura);
