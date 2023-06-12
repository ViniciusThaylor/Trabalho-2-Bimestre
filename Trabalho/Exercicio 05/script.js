let inpReais = document.querySelector("#inpReais");
let btt = document.querySelector("#btt");
let h1 = document.querySelector("#h1");

function Calcular(){
    let reais = Number(inpReais.value);
    let preço = (5.64)
    let resultado = (reais / preço);

    h1.innerHTML = 
    "O preço da gasolina: 5,64L " + "<br>" +
    "Você abasteceu " + resultado.toFixed(2) + " LITROS de gasolina";
    
}

btt.onclick = function(){
    Calcular()
}