const carritoProductos = document.querySelector(".carrito-productos");
const carritoVacio = document.querySelector(".carrito-vacio");
const carritoAcciones = document.querySelector(".carrito-acciones");
const totalCarrito = document.querySelector("#total");
const botonVaciar = document.querySelector(".carrito-acciones-vaciar");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


function renderizarCarrito() {
    carritoProductos.innerHTML = "";

    if (carrito.length === 0) {
        carritoVacio.style.display = "block";
        carritoAcciones.style.display = "none";
        return;
    }

    carritoVacio.style.display = "none";
    carritoAcciones.style.display = "flex";

    carrito.forEach(producto => {
        const productoHTML = `
            <div class="carrito-producto">
                <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.nombreProducto}">
                <div class="carrito-producto-titulo">
                    <small>Nombre</small>
                    <h3>${producto.nombreProducto}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>1</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>$${producto.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>$${producto.precio}</p>
                </div>
                <button class="carrito-producto-eliminar" data-id="${producto.id}">
                    <i class="bi bi-trash-fill"></i>
                </button>
            </div>
        `;
        carritoProductos.innerHTML += productoHTML;
    });

    actualizarTotal();
    agregarEventosEliminar();
}


function actualizarTotal() {
    const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
    totalCarrito.textContent = `$${total}`;
}


botonVaciar.addEventListener("click", () => {
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarCarrito();
});


function agregarEventosEliminar() {
    const botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const idProducto = parseInt(e.target.closest("button").dataset.id);
            eliminarProducto(idProducto);
        });
    });
}


function eliminarProducto(idProducto) {
    carrito = carrito.filter(producto => producto.id !== idProducto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarCarrito();
}


renderizarCarrito();