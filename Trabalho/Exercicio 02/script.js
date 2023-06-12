let inpCavalos = document.querySelector("#inpCavalos");
let btt = document.querySelector("#btt");
let h1 = document.querySelector("#h1");

function Calcular(){
    let Cavalos = Number(inpCavalos.value);

    let ferraduras = (Cavalos * 4);

    h1.innerHTML = "Vai utilizar " + ferraduras + " Ferraduras";

}

btt.onclick = function(){
    Calcular()
}