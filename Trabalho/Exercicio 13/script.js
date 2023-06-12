let inpRaio = document.querySelector("#inpRaio");
let btt = document.querySelector("#btt");
let h1 = document.querySelector("#h1");

function Calcular(){
    let raio = Number(inpRaio.value);

    let area = Math.pow(raio, 2) * 3.14;
    h1.innerHTML = "A área da pizza é: " + area + "m"
}

btt.onclick = function(){
    Calcular()
}