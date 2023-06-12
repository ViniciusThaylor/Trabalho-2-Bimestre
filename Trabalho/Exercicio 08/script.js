let inpTamanho = document.querySelector("#inpTamanho");
let inpQNTD = document.querySelector("#inpQNTD");
let btt = document.querySelector("#btt");
let h1 = document.querySelector("#h1");

function Calcular(){
    let tamanho = String(inpTamanho.value);
    let qntd = Number(inpQNTD.value);

    let Pe = (qntd * 10);
    let Me = (qntd * 12);
    let Gr = (qntd * 15);

    if(tamanho == "p")
    h1.innerHTML = "Será " + qntd + " camisetas " + " do tamanho " + "( " + tamanho + " )" +
    " no valor de " + "R$" + Pe
    if(tamanho == "P")
    h1.innerHTML = "Será " + qntd + " camisetas " + " do tamanho " + "( " + tamanho + " )" +
    " no valor de " + "R$" + Pe

    if(tamanho == "m")
    h1.innerHTML = "Será " + qntd + " camisetas " + " do tamanho " + "( " + tamanho + " )" +
    " no valor de " + "R$" + Me
    if(tamanho == "M")
    h1.innerHTML = "Será " + qntd + " camisetas " + " do tamanho " + "( " + tamanho + " )" +
    " no valor de " + "R$" + Me

    if(tamanho == "g")
    h1.innerHTML = "Será " + qntd + " camisetas " + " do tamanho " + "( " + tamanho + " )" +
    " no valor de " + "R$" + Gr
    if(tamanho == "G")
    h1.innerHTML = "Será " + qntd + " camisetas " + " do tamanho " + "( " + tamanho + " )" +
    " no valor de " + "R$" + Gr
}


btt.onclick = function(){
    Calcular()
}

