let inpAltura = document.querySelector("#inpAltura");
let inpLargura = document.querySelector("#inpLargura");
let btt = document.querySelector("#btt");
let h1 = document.querySelector("#h1");

function Calcular(){
    let Altura = Number(inpAltura.value);
    let Largura = Number(inpLargura.value);

    let calculo = Number(Altura * Largura);

    h1.innerHTML = "A area do terreno é: " + calculo + " m²";
}

btt.onclick = function(){
    Calcular()
}
