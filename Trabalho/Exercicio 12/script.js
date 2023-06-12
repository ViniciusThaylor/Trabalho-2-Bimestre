let inpVlr = document.querySelector("#inpVlr");
let btt = document.querySelector("#btt");
let h1 = document.querySelector("#h1");

function Analisar(){
    let numero = Number(inpVlr.value);

    let centena = Math.floor(numero / 100);
    let dezena = Math.floor((numero % 100) / 10);
    let unidade = (numero % 10);
    h1.innerHTML = 
    "CENTENA = " + centena + "<br>" +
    "DEZENA = " + dezena + "<br>" +
    "UNIDADE = " + unidade + "<br>";
}

btt.onclick = function(){
    Analisar()
}