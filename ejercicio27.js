/*
Dado un numero, mostrar cuantos años, meses y dias equivalen

Ejemplo:
CalcularDias(920)

Equivale a 2 años, 6 meses y 10 dias
*/

function CalcualarDias(numero){
    let anios =  Math.floor(numero / 365);
    let meses = Math.floor((numero % 365) / 30);
    let dias = (numero % 365) % 30;
    return `${numero} equivale a ${anios} años, ${meses} meses y ${dias} dias`;
}


console.log(CalcualarDias(365));