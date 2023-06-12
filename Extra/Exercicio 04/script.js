function calcularImposto() {
    let ano = parseInt(document.getElementById("ano").value);
    let valor = parseFloat(document.getElementById("valor").value);
  
    let taxa;
    if (ano < 1990) {
      taxa = 0.01; 
    } else {
      taxa = 0.015; 
    }
  
    let imposto = valor * taxa;
  
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "Imposto a ser pago: R$" + imposto.toFixed(2);
}