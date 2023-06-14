// VARIABLES

const contenedorGrid1 = document.querySelector('.js-banner1__grid');
const contenedorGrid2 = document.querySelector('.js-banner2__grid');


// EVENTOS
window.addEventListener('DOMContentLoaded', () => {
    banner(contenedorGrid1);
    banner(contenedorGrid2);
})


// FUNCIONES

function banner (contenedor) {
    productos.forEach( p => {
        console.log(p.imagen)
        const {imagen} = p;
        const producto = document.createElement('li');
        producto.classList.add('c-banner1__producto');
        producto.innerHTML = `
            <a href="https://javicerezo.github.io/tienda-online/" target="_blank"><img src=${imagen}
                alt="imagen producto">
            </a>
        `;
        contenedor.appendChild(producto);
    });
}