function convertir(){
    let pesoarg = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 130;
    let chileno = 0.14
    if(document.getElementById("uno").checked){
        resultado = pesoarg * dolar;
        alert("La conversion de pesos ARG a dolar es: $" + resultado);
    }
    if(document.getElementById("dos").checked){
        resultado = pesoarg * chileno;
        alert("La conversion de pesos ARG a CHIL es: $" + resultado);
    }
    else{
        alert("No te olvides de completar todos los datos")
    }
}