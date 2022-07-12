
let sumador = 0
for ( let i = 1; i <= 1000 ; i++) {
    sumador = sumador + i
    console.log( 'contador: ' + i + ' - sumador: ' + sumador);
    if ( sumador >= 1000 ) {
        console.log('El valor mínimo es: ' + i);
        break;
    }
}
console.log( sumador );