let preguntaImportante = prompt("Sos hincha de Banfiel?");

if (preguntaImportante == "si") {
    alert("Felicitaciones, obtienes descuentos especiales");
}
else {
    alert("Que lastima")
}

let preciosEnCarrito = [25000, 20000, 26000, 27000, 22000, 23000, 23000];

function calcularTotal() {
    let total = 0;
    for (let i = 0; i < preciosEnCarrito.length; i++) {
        total += preciosEnCarrito[i];
    }
    return total;
}

console.log("El total del carrito es:$" + calcularTotal());