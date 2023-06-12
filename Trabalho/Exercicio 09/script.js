let inpX1 = document.querySelector("#inpX1");
let inpX2 = document.querySelector("#inpX2");
let inpY1 = document.querySelector("#inpY1");
let inpY2 = document.querySelector("#inpY2");
let btt = document.querySelector("#btt");
let h1 = document.querySelector("#h1");

function Calcular(){
    let Xa = Number(inpX1.value);  
    let Xb = Number(inpX2.value);  
    let Ya = Number(inpY1.value);
    let Yb = Number(inpY2.value);
    
    let resultado = Math.sqrt( (Math.pow((Xa - Xb),2) + Math.pow((Yb - Ya),2) ) );

    h1.innerHTML = "a Distância entre os pontos é " + resultado.toFixed(2);

}

btt.onclick = function(){
    Calcular()
}