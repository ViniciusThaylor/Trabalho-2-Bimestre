let inpKG = document.querySelector("#inpKG");
let btt = document.querySelector("#btt");
let h1 = document.querySelector("#h1");

function Calcular(){
    let kg = Number(inpKG.value);
    let result = (kg * 12.00);

    h1.innerHTML = 
    "E ai bão?" + "<br>" + "<br>" + "Valor a pagar: " + "<br>" +
    "R$" + result.toFixed(2);
}

btt.onclick = function(){
    Calcular()
}