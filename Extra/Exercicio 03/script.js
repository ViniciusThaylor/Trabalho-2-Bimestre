function calcularNotas() {
    var valor = parseInt(document.getElementById("valor").value);
  
    if (valor > 0) {
      var notas = {
        100: 0,
        50: 0,
        10: 0,
        5: 0,
        1: 0
      };
  
      while (valor > 0) {
        if (valor >= 100) {
          valor -= 100;
          notas[100]++;
        } else if (valor >= 50) {
          valor -= 50;
          notas[50]++;
        } else if (valor >= 10) {
          valor -= 10;
          notas[10]++;
        } else if (valor >= 5) {
          valor -= 5;
          notas[5]++;
        } else {
          valor -= 1;
          notas[1]++;
        }
      }
  
      var resultado = document.getElementById("resultado");
      resultado.innerHTML = "Valor lido: R$" + document.getElementById("valor").value + "<br>";
      resultado.innerHTML += "Relação de notas necessárias:<br>";
      resultado.innerHTML += "Notas de 100: " + notas[100] + "<br>";
      resultado.innerHTML += "Notas de 50: " + notas[50] + "<br>";
      resultado.innerHTML += "Notas de 10: " + notas[10] + "<br>";
      resultado.innerHTML += "Notas de 5: " + notas[5] + "<br>";
      resultado.innerHTML += "Notas de 1: " + notas[1] + "<br>";
    } else {
      var resultado = document.getElementById("resultado");
      resultado.innerHTML = "Por favor, informe um valor válido.";
    }
  }