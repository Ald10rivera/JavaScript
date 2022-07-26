const listaComprasPredeterminada = [{
    producto: "yogurt",
    cantidad:10,
    marca:"la serenisima",   
},{producto: "queso",
cantidad: "10kg",
marca:"cremon", 
},{producto: "pan",
cantidad:"60kg",
marca:"Bimbo", 
}, {producto: "pre-pizzas",
cantidad: 15,
marca:"veganian", 
}]

let superM = parseInt (prompt("introduzca el numero correspondiente a la accion que desee \n1 lista predeterminada \n2 detallar lista \n3 salir"))
if(superM === 1){ 
    alert(listaComprasPredeterminada.length)
    
} 
