function verificarTriangulo() {
    var lado1 = parseFloat(document.getElementById("lado1").value);
    var lado2 = parseFloat(document.getElementById("lado2").value);
    var lado3 = parseFloat(document.getElementById("lado3").value);

    if (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado3 + lado1 > lado2) {
        if (lado1 === lado2 && lado2 === lado3) {
            exibirResultado("O triangulo é equilatero.");
        } else if (lado1 === lado2 || lado2 === lado3 || lado3 === lado1) {
            exibirResultado("O triangulo é isosceles.");
        } else {
            exibirResultado("O triangulo é escaleno.");
        }
    } else {
        exibirResultado("Os valores informados não formam um triangulo.");
    }
}

function exibirResultado(mensagem) {
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = mensagem;
}