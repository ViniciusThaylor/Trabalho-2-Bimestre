let inpVlr = document.querySelector("#inpVlr");
let btt = document.querySelector("#btt");
let h1 = document.querySelector("#h1");

function Calcular(){
    let valor = Number(inpVlr.value);
    
    let Felipe = valor % 3 + Math.floor(valor / 3);
    let Carlos = Math.floor(valor / 3);
    let Andre = Math.floor(valor / 3);

    h1.innerHTML = 
    "Carlos irá pagar " + Carlos + "<br>" +
    "Andre irá pagar " + Andre + "<br>" +
    "Felipe irá pagar " + Felipe.toFixed(2)
}

btt.onclick = function(){
    Calcular()
}