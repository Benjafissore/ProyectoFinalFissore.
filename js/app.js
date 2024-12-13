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

const carrito = [];
const contenedorProductos = document.querySelector(".contenedor-productos");
const numeritoCarrito = document.querySelector(".numerito");

function renderizarProductos(){
    productos.forEach(producto => {
        const productosHTML = `
            <div class="producto">
                    <img src="${producto.imagen}" alt="${producto.nombreProducto}">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">${producto.nombreProducto}</h3>
                        <p class="producto-precio">$${producto.precio}</p>
                        <button class="producto-boton" data-id="${producto.id}">agregar</button>
                    </div>
                </div>
            `;
        contenedorProductos.innerHTML += productosHTML;
    }); 
    agregarEventosBotones();
}

function agregarEventosBotones() {
    const botonesAgregar = document.querySelectorAll(".producto-boton");
    
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const idProducto = parseInt(e.target.dataset.id);
            agregarAlCarrito(idProducto);
        })
    })
}

function agregarAlCarrito(idProducto) {
    const productoEncontrado = productos.find(producto => producto.id === idProducto);

    if (productoEncontrado) {
        carrito.push(productoEncontrado);
        actualizarCarrito();
    }
}

function actualizarCarrito(){
    numeritoCarrito.textContent = carrito.length;
    console.log("Carrito actual:", carrito);
}

renderizarProductos();