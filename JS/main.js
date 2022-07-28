let productos =["Iphone ", " Moto G9", " S20 Plus", " Redmi Note9"," Fundas"]
//objetos de los productos
const iphone = {
    marca: "Apple  ",
    color: "Rojo  ",
    precio: 2750
} 
const motoG9 = {
    marca:"Motorola  ",
    color:"azul  ",
    precio:950
}
const s20 = {
    marca:"Samsung  ",
    color:"Beige  ",
    precio:2500
}
const note9 = {
    marca: "Redmi  ",
    color:"Granate  ",
    precio:1500
}
const fundas = {
    marca:"Importadas  ",
    color:"varios  ",
    precio: 50
}
// FUNCION sumadora bro
function sumar(sum1, sum2){
    let resultado; resultado = sum1 + sum2;
    return resultado;
}
/*prueba del sumador funciona joya bro
alert("el total es $ " + sumar(note9.precio,fundas.precio))*/


//describe las propiedades del objeto bro
for (const property in fundas) {
    console.log(`${property}: ${fundas[property]}`);
}
//document.write(motoG9.marca)
//alert(productos.toString())


//interaccion con el usuario
let dato = parseInt(prompt("¡Ingresa el numero segun la opcion que desees comprar! \n1 Apple \n2 Motorola \n3 Samsung \n4 Redmi \n5 fundas "))

if(dato == 1 ){
    for (const property in iphone) {
        document.write(`${property}: ${iphone[property]}`);
    }
}if(dato == 2){
    for (const property in motoG9) {
        document.write(`${property}: ${motoG9[property]}`);
    }
}if(dato == 3){
    for (const property in s20) {
        document.write(`${property}: ${s20[property]}`);
    }
}if(dato == 4){
    for (const property in note9) {
        document.write(`${property}: ${note9[property]}`);
    }
}if(dato == 5){
    for (const property in fundas) {
        document.write(`${property}: ${fundas[property]}`);
    }
    
}
let segundaOpcion = parseInt(prompt("desea agregar una funda para su equipo? \n1- Si \n2- No"))

switch(segundaOpcion){
    case 1: resultado = sumar(iphone.precio, fundas.precio)
    alert("El total de su compra es $ " + resultado)
    break;
    case 2: alert("tu precio final es $ " + iphone.precio)
    break;
    default:
        alert("¡hasta la proxima!")
}