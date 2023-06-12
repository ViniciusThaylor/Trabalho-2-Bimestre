function calcularPesoIdeal() {
    var altura = parseFloat(document.getElementById("altura").value);
    var sexo = document.getElementById("sexo").value;
    var pesoIdeal = 0;

    if (sexo === "homem") {
        pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo === "mulher") {
        pesoIdeal = (62.1 * altura) - 44.7;
    }

    document.getElementById("resultado").innerHTML = "Peso Ideal: " + pesoIdeal.toFixed(2) + " kg";
}