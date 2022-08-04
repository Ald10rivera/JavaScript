const lista = document.getElementById('lista')


const productos =["Iphone ", " Moto G9", " S20 Plus", " Redmi Note9"," Fundas"]

productos.forEach(item => {
    const li = document.createElement('li')
    li.textContent = item 
    lista.appendChild(li)
})


function verDetalles (){
    if(document.getElementById('movil').value== "iphone"){
        alert("El iPhone 11 es un teléfono inteligente de gama alta con pantalla táctil producido por Apple, Inc. Fue presentado el 10 de septiembre de 2019 junto con el iPhone 11 Pro y el iPhone 11 Pro Max. El modelo cuenta con el nuevo chip Apple A13 Bionic y un nuevo sistema de cámara dual ultra ancho.1​ Mientras que el iPhone 11 Pro presenta un nuevo cargador rápido de 18 vatios, el iPhone 11 presenta el mismo cargador de 5 vatios encontrado en iPhones anteriores")
    }if(document.getElementById('movil').value== "moto g9"){
        alert("El nuevo moto g9plus te da potencia donde más la necesitas. Haz fotos brillantes en lugares con luz tenue con la cámara de 64 MP. Pasa hasta dos días sin cargar tu teléfono gracias a su potente batería. Olvídate de retrasos con el procesador Qualcomm® Snapdragon™ 730G, un 57 % más rápido. El moto g definitivvo")
    }if(document.getElementById('movil').value== "s20 plus"){
        alert(" El Samsung Galaxy S20 Plus es uno de los teléfonos inteligentes más completos que he usado en años. Tiene cámaras versátiles que compiten con el mejor software personalizable, y una pantalla que es tan buena que arruinará las pantallas de otros teléfonos inteligentes para usted. Sin embargo, $ 1,200 es mucho dinero, y Samsung realmente lo está presionando con este alto precio.")
    }if(document.getElementById('movil').value== "note9"){
        alert("El Xiaomi Redmi Note 9 es un smartphone Android con una pantalla Full HD+ de 6.53 pulgadas y potenciado por un procesador Mediatek Helio G85, acompañado de variantes de 3GB de memoria RAM con 64GB de espacio de almacenamiento interno o 4GB de RAM con 128GB de almacenamiento. La cámara trasera del Redmi Note 9 es cuádruple, de 48 MP + 8 MP + 2 MP + 2 MP, mientras que su cámara frontal es de 13 MP. El Redmi Note 9 completa sus características con una batería de 5020 mAh de carga rápida, lector de huellas posterior, y MIUI 11 basado en Android 10.")
    }if(document.getElementById('movil').value== "fundas"){
        alert("Protección contra golpes inigualable: supera los estándares de grado militar, proporcionando protección contra impactos ")
    }
}
