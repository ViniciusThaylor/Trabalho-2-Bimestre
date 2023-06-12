let inpDias = document.querySelector("#inpDias");
let btt = document.querySelector("#btt");
let h1 = document.querySelector("#h1");

function Calcular(){
    let dia = Number(inpDias.value);

    let mes = (dia / 30);
    let anos = (dia / 365);

    h1.innerHTML = 
    dia + " dias sem acidente: " + "<br>" +
    mes.toFixed() + " mes(es) sem acidente" + "<br>" +
    anos.toFixed() + " ano(s) sem acidente";
}

btt.onclick = function(){
    Calcular()
}