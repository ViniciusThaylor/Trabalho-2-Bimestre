function calcularNovoSalario() {
    var cargo = document.getElementById("cargo").value;
    var salario = parseFloat(document.getElementById("salario").value);
    var novoSalario = 0;
    var diferenca = 0;

    if (cargo === "101") {
        novoSalario = salario * 1.1;
    } else if (cargo === "102") {
        novoSalario = salario * 1.2;
    } else if (cargo === "103") {
        novoSalario = salario * 1.3;
    } else {
        novoSalario = salario * 1.4;
    }

    diferenca = novoSalario - salario;

    document.getElementById("resultado").innerHTML =
        "Salário antigo: " + salario.toFixed(2) + "<br>" +
        "Novo salário: " + novoSalario.toFixed(2) + "<br>" +
        "Diferença: " + diferenca.toFixed(2);
}