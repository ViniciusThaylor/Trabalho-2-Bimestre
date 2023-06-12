let inpVlr = document.querySelector("#inpVlr");
let inpVlr2 = document.querySelector("#inpVlr2");
let btt = document.querySelector("#btt");
let h1 = document.querySelector("#h1");

function Calcular(){
    let vlr1 = Number(inpVlr.value);
    let vlr2 = Number(inpVlr2.value);

    let mes = (vlr2 * 30);
    let dia = (vlr1)

    h1.innerHTML = "Ja se passaram " + (dia + mes - 30) + " dias";
}

btt.onclick = function(){
    Calcular()
}