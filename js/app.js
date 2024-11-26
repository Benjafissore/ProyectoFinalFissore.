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


class Producto {
    constructor(id, imagen, nombreProducto, precio) {
        this.id = id;
        this.imagen = imagen;
        this.nombreProducto = nombreProducto;
        this.precio = precio;
    }
    obtenerDescripcion(){
        return `${this.nombreProducto} cuesta $${this.precio}`;
    }
}


const productos = [
    new Producto(1, "./img/argentina-1985-1.jpg", "Los pumas", 25000),
    new Producto(2, "./img/england-1980-1-500x500.jpg.webp", "Inglaterra", 20000),
    new Producto(3, "./img/rugby017-new-zealand-1980-retrorugby.jpg", "All blacks", 26000),
    new Producto(4, "./img/SaffaTeesSpringbokRugbyShirtProduct.webp", "Springbok", 27000),
    new Producto(5, "./img/Polo_Rugby_Irlanda_Retrorugby.jpg", "Irlanda", 22000),
    new Producto(6, "./img/rugby_007_scotland_retrorugby.jpg", "Escocia", 23000),
    new Producto(7, "./img/rugby_023_italy_1975_retrorugby.jpg", "Italia", 23000),
];

productos.forEach(producto => {
    console.log(producto.obtenerDescripcion());
});

