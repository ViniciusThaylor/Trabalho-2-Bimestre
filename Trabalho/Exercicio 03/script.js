let inpBroas = document.querySelector("#inpBroas");
let inpPaes = document.querySelector("#inpPaes");
let btt = document.querySelector("#btt");
let h1 = document.querySelector("#h1");

function Calcular(){
    let Broas = Number(inpBroas.value);
    let Paes = Number(inpPaes.value);

    let vlrbroa = Number(Broas * 1.50);
    let vlrpao = Number(Paes * 0.12);

    let total = (vlrbroa + vlrpao);

    let guardar = (total * 10/100);

    h1.innerHTML = 
    "Total arrecadado foi " + total + " Reais" + "<br>" +
    "Devera guardar " + guardar.toFixed(2) + " Reais" + "<br>";

}

btt.onclick = function(){
    Calcular()
}

