function calcularValor() {
    var precoEtiqueta = parseFloat(document.getElementById("precoEtiqueta").value);
    var condicaoPagamento = document.getElementById("condicaoPagamento").value;
    var valorPago = 0;

    switch (condicaoPagamento) {
        case "a":
            valorPago = precoEtiqueta * 0.9;
            break;
        case "b":
            valorPago = precoEtiqueta * 0.85;
            break;
        case "c":
            valorPago = precoEtiqueta;
            break;
        case "d":
            valorPago = precoEtiqueta * 1.1;
            break;
        default:
            console.log("Condição de pagamento inválida");
    }

    document.getElementById("resultado").innerHTML = "Valor a ser pago: R$" + valorPago.toFixed(2);
}