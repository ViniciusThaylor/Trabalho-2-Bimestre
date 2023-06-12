function calcularValor() {
    var itemPedido = document.getElementById("itemPedido").value;
    var quantidade = parseInt(document.getElementById("quantidade").value);
    var valorTotal = 0;

    switch (itemPedido) {
        case "cachorro-quente":
            valorTotal = 11.00 * quantidade;
            break;
        case "bauru":
            valorTotal = 8.50 * quantidade;
            break;
        case "misto-quente":
            valorTotal = 8.00 * quantidade;
            break;
        case "hamburguer":
            valorTotal = 9.00 * quantidade;
            break;
        case "cheeseburger":
            valorTotal = 10.00 * quantidade;
            break;
        case "refrigerante":
            valorTotal = 4.50 * quantidade;
            break;
        default:
            console.log("Item inválido");
    }

    document.getElementById("resultado").innerHTML = "Valor Total: R$" + valorTotal.toFixed(2);
}