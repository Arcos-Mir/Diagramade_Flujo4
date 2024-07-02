// Definir variables

let SB = 0;
let MSC = 0;
let ISR = 0;
let SN = 0;

SB = prompt("Ingresa el sueldo bruto del trabajador");

//Condicional

if ( SB > 10000) {

//Realizar la operación 
ISR = ( parseInt(SB) * 2) / 100

SN = SB - MSC - ISR

console.log( SN) ;

} else {

ISR = 0;
}
