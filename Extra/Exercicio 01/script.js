function ordenar() {
    let valores = [];
    for (var i = 1; i <= 5; i++) {
        let inputId = "valor" + i;
        let valor = parseInt(document.getElementById(inputId).value);
        valores.push(valor);
    }

    valores.sort(function (a, b) {
        return b - a;
    });

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "Valores em ordem decrescente: " + valores.join(", ");
}