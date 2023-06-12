let inpSalario = document.querySelector("#inpSalario");
let btt = document.querySelector("#btt");
let h1 = document.querySelector("#h1");

function Calcular(){
    let salario = Number(inpSalario.value);
    
    let aumento = (salario * 15/100) + salario;
    let desconto = (aumento * 8/100) + salario;

    h1.innerHTML = 
    "O sálario incial é " + "R$ " + salario +  "<br>" +
    "O sálario com aumento: " + "R$ " + aumento + "<br>" +
    "O salario final -8% imposto: " + "R$ " + desconto
}

btt.onclick = function(){
    Calcular()
}
