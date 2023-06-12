function calcularCredito() {
    var saldoMedio = parseInt(document.getElementById("saldoMedio").value);
    var valorCredito = 0;

    if (saldoMedio >= 0 && saldoMedio <= 200) {
        valorCredito = 0;
    } else if (saldoMedio >= 201 && saldoMedio <= 400) {
        valorCredito = saldoMedio * 0.2;
    } else if (saldoMedio >= 401 && saldoMedio <= 600) {
        valorCredito = saldoMedio * 0.3;
    } else if (saldoMedio > 600) {
        valorCredito = saldoMedio * 0.4;
    }

    document.getElementById("resultado").innerHTML = "Saldo Médio: " + saldoMedio + "<br>Valor do Crédito: " + valorCredito;
}