// Array de productos
const productos = {
    producto1: {
    nombre: 'Iphone 11 Pro',
    precio: '1200',
    descripcion: 'El modelo cuenta con el nuevo chip Apple A13 Bionic y un nuevo sistema de cámara dual ultra ancho.1 Mientras que el iPhone 11 Pro presenta un nuevo cargador rápido de 18 vatios, el iPhone 11 presenta el mismo cargador de 5 vatios encontrado en iPhones anteriores.',
    srcImg: './img/iphone.jpg'
    },
    producto2: {
    nombre: 'Samsung S20 Plus',
    precio: '1750',
    descripcion: 'Un salto épico para la tecnología de smartphones. Un chip más rápido que nunca en Galaxy. El chip de 4 nm funciona con su poder de clase mundial en casi todos los aspectos de tu smartphone, fotos increíblemente claras de día y de noche y una experiencia de juego móvil optimizada para conducirte a la victoria.',
    srcImg: './img/samsungs20.jpg'
    },
    producto3: {
    nombre: 'Redmi Note 11 Pro',
    precio: '980',
    descripcion: ' El Xiaomi Redmi Note 10 Pro viene a mejorar el muy exitoso Redmi Note 9 Pro, el cual fue uno de los móviles estrellas del 2020 en cuanto a ventas se refiere. Entre sus principales cualidades, destaca un estupendo panel Amoled que hará las delicias de cualquiera y permitirá una correcta visualización incluso en las peores condiciones lumínicas.',
    srcImg: './img/redmi.jpg'
    },
    producto4: {
    nombre: 'Moto Edge 30 Plus',
    precio: '1100',
    descripcion: 'Motorola ha desvelado cuál será su apuesta internacional durante 2022: el Motorola Edge 30 Pro. Con la máxima potencia por bandera, y cargado de especificaciones en su interior, el móvil parte bien armado y con un precio que no se hace exagerado para el segmento premium.',
    srcImg: './img/motog30.png'
    }
}
  // Se captura el template de los productos
    const templateProd = document.getElementById('template-prod').content
    const contenedorProd = document.querySelector('.contenedor-productos')
    const fragment = document.createDocumentFragment()


  // TODO LO RELACIONADO A AGREGAR LOS PRODUCTOS AL DOM
    Object.values(productos).forEach( producto => {
        templateProd.querySelector('.div-info .nombre-prod').textContent = producto.nombre
        templateProd.querySelector('.div-precio-boton .precio').textContent = producto.precio
        templateProd.querySelector('.div-info .descripcion-prod').textContent = producto.descripcion
        templateProd.querySelector('.contenedor-img img').setAttribute('alt', producto.nombre)
        templateProd.querySelector('.contenedor-img img').setAttribute('src', producto.srcImg)
        const clone = templateProd.cloneNode(true)
        fragment.appendChild(clone)
})
    contenedorProd.appendChild(fragment)

  // TODO LO RELACIONADO AL CARRITO DE COMPRA
    let carrito = {}
    const templateTabla = document.getElementById('agregar-producto-al-carro').content
    const tbodyCarrito = document.getElementById('carrito-body')
    const fragmentTabla = document.createDocumentFragment()
    const templateFoot = document.getElementById('tfooter').content
    const tfootCarrito = document.getElementById('footer')

    contenedorProd.addEventListener('click', e => {
    
if(e.target.textContent === "Agregar") {
    setCarrito(e.target.parentElement.parentElement)
    }
    e.stopPropagation();
})
const setCarrito = e => {
const pivoteCarrito = {
    nombre: e.querySelector('.div-info .nombre-prod').textContent,
    precio: e.querySelector('.div-precio-boton .precio').textContent,
    cantidad: 1
    }
    if(carrito.hasOwnProperty(pivoteCarrito.nombre)){
        carrito[pivoteCarrito.nombre].cantidad += 1
    } else {
        carrito[pivoteCarrito.nombre] = {...pivoteCarrito}
    }
    pintarTabla(carrito)
}

const pintarTabla = objetoCarrito => {
    Object.values(objetoCarrito).forEach( objeto => {
        const cloneTabla = templateTabla.cloneNode(true)
        cloneTabla.getElementById('producto').textContent = objeto.nombre
        cloneTabla.getElementById('cant').textContent = objeto.cantidad
        cloneTabla.getElementById('precio-uni').textContent = objeto.precio
      let precioTotal = parseFloat(objeto.precio) * objeto.cantidad
        cloneTabla.getElementById('precio-total-prod').textContent = precioTotal.toFixed(2)
        fragmentTabla.appendChild(cloneTabla)
    })
    tbodyCarrito.innerHTML = ''
    tbodyCarrito.appendChild(fragmentTabla)
    pintarFooter()
}
    const pintarFooter = () => {
    tfootCarrito.innerHTML = ''
    if(Object.keys(carrito).length === 0) {
        tfootCarrito.innerHTML = '<tr><td colspan = 4>¡No hay ningun elemento en el carrito!</td></tr>'
    } else {
      const total = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + (cantidad * precio),0)
        templateFoot.getElementById('total-a-pagar').textContent = total.toFixed(2)
        const cloneFoot = templateFoot.cloneNode(true)
        fragment.appendChild(cloneFoot)
        tfootCarrito.appendChild(fragment)
//Boton Vaciar carrito

        const botonVaciar = document.getElementById('vaciar-tabla')
    botonVaciar.addEventListener('click', () => {
        carrito = {}
        pintarTabla(carrito)
        pintarFooter()
        })

      //Botones aumentar y disminuir cantidades
    }
}
    tbodyCarrito.addEventListener('click', e => {
    
    if(e.target.classList.contains('button')) {
        aumentarDisminuir(e.target)
    }
})
    const aumentarDisminuir = boton => {
    if(boton.textContent === '+'){
        const indicador = boton.parentElement.parentElement.firstElementChild.textContent
        Object.values(carrito).forEach( elemento => {
        if(elemento.nombre === indicador) {
        carrito[elemento.nombre].cantidad++  
        }
    })
    }
    if(boton.textContent === '-') {
        const indicador = boton.parentElement.parentElement.firstElementChild.textContent
        Object.values(carrito).forEach( elemento => {
        if(elemento.nombre === indicador) {
        carrito[elemento.nombre].cantidad--
            if(carrito[elemento.nombre].cantidad === 0) {
            delete carrito[elemento.nombre]
            }
        }
    })
    }
    pintarTabla(carrito)
    pintarFooter()
}
    const botonFinalizarCompra = document.getElementById('botonFinalizar')
    botonFinalizarCompra.onclick = () => {
        Swal.fire(
    'Genial, tu compra ha finalizado!',
    'Gracias por elegirnos!',
    'success'
)
    }
