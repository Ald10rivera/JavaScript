class Producto {
    constructor(titulo, imagen, descripcion, precio){
        this.titulo = titulo;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}
const producto1 = new Producto("Iphone 11 Pro", "./img/iphone.jpg","El modelo cuenta con el nuevo chip Apple A13 Bionic y un nuevo sistema de cámara dual ultra ancho.1 Mientras que el iPhone 11 Pro presenta un nuevo cargador rápido de 18 vatios, el iPhone 11 presenta el mismo cargador de 5 vatios encontrado en iPhones anteriores", 1200)
const producto2 = new Producto("Samsung S20 Plus","./img/samsungs20.jpg","Un salto épico para la tecnología de smartphones. Un chip más rápido que nunca en Galaxy. El chip de 4 nm funciona con su poder de clase mundial en casi todos los aspectos de tu smartphone, fotos increíblemente claras de día y de noche y una experiencia de juego móvil optimizada para conducirte a la victoria.", "1750")
const producto3 = new Producto("Redmi Note 11 Pro","./img/redmi.jpg"," El Xiaomi Redmi Note 10 Pro viene a mejorar el muy exitoso Redmi Note 9 Pro, el cual fue uno de los móviles estrellas del 2020 en cuanto a ventas se refiere. Entre sus principales cualidades, destaca un estupendo panel Amoled que hará las delicias de cualquiera y permitirá una correcta visualización incluso en las peores condiciones lumínicas","980")
const producto4 = new Producto("Moto Edge 30 Plus","./img/motog30.png","Motorola ha desvelado cuál será su apuesta internacional durante 2022: el Motorola Edge 30 Pro. Con la máxima potencia por bandera, y cargado de especificaciones en su interior, el móvil parte bien armado y con un precio que no se hace exagerado para el segmento premium.","1100")

const productos = []

productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);

let carrito = []
const moneda = '$'
const DOMcarrito = document.querySelector('#carrito');


function mostrarProductos(productos){

    const contenedorDeProductos = document.getElementById("contenedor-de-productos");
    contenedorDeProductos.innerHTML = "";

    productos.forEach(producto => {
        const divProducto = document.createElement("div");
    divProducto.classList.add("producto");
    divProducto.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.titulo}">
    <h4>${producto.titulo}</h4>
    <p>${producto.descripcion}</p>
    <p>${producto.precio}</p>
    `;
    //=======
    const botonComprar = document.createElement("button");
    botonComprar.innerText = "comprar"
    botonComprar.setAttribute('marcador',producto.titulo);
    botonComprar.addEventListener("click",agregarCarrito);
    divProducto.appendChild(botonComprar);
    //=======
    contenedorDeProductos.appendChild(divProducto);
})
}
/*funcion para agregar al carrito*/ 
function agregarCarrito(evento){
    
    carrito.push(evento.target.getAttribute('marcador'));
    renderizarCarrito()
    mostrarProductos(productos)

}
mostrarProductos(productos)
console.log(carrito)

//FUNCION PARA MOSTRAR EL CARRITO

function renderizarCarrito(){
    const carritoSinDuplicados = [...new set(carrito)];
    carritoSinDuplicados.forEach((item) => {
        const miItem = Producto.filter((itemProducto) =>{
            return itemProducto.id === parseInt (item);
        });
        //contador de veces que se repite el producto 
        const numeroUnidades = carrito.reduce((total, itemId)=>{
            return itemId === item ? total += 1 : total;
        },0);
        //nodo del item carrito
        const miNodo = document.createElement('li');
        miNodo.textContent =`${numeroUnidades} x ${miItem[0].nombre} - ${miItem[0].precio}${moneda}`;

        //boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);

            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);

    })
}

function borrarItemCarrito(evento) {

    const id = evento.target.dataset.item;

    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    
    renderizarCarrito();
}

