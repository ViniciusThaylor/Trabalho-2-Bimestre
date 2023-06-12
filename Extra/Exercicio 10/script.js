function calcularSalario() {
    var nivel = parseInt(document.getElementById("nivel").value);
    var horasAula = parseInt(document.getElementById("horasAula").value);
    var valorHoraAula = 0;

    switch (nivel) {
        case 1:
            valorHoraAula = 12.00;
            break;
        case 2:
            valorHoraAula = 17.00;
            break;
        case 3:
            valorHoraAula = 25.00;
            break;
        default:
            console.log("Nível inválido");
    }

    var salario = valorHoraAula * horasAula * 4.5;

    document.getElementById("resultado").innerHTML = "Salário do Professor: R$" + salario.toFixed(2);
}