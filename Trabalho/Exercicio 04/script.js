let inpNome = document.querySelector("#inpNome");
let inpIdade = document.querySelector("#inpIdade");
let btt = document.querySelector("#btt");
let h1 = document.querySelector("#h1");

function Calcular(){
    let nome = String(inpNome.value);
    let idade = Number(inpIdade.value);
    let resultado = (idade * 365);
    
    h1.innerHTML = nome + " Tem " + resultado + " dias vividos"; 
}

btt.onclick = function(){
    Calcular()
}