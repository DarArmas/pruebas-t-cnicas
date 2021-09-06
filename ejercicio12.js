/*
Dado un numero mostrar todos los numeros desde ese al 0 de 8 en 8 en una
lista con guines donde cada numero debe empezar por n°
*/

function sucesion(numero){

    let resultado  = `----- Del ${numero} al 0 ------\n`;

    for(var i=numero; i>=0; (i=i-8)){
        resultado += `- n° ${i}\n`;
    }

    resultado += "---- FIN -----";
    return resultado;


}

function hastaCero(numero){
    let resultado = `-- Del ${numero} al 0 ---- \n`;

    while(numero >0){
        resultado += `- n° ${numero} \n`;
        numero -= 8;
    }

    resultado += "---- FIN ------";

    return resultado;
}

console.log(sucesion(100));
console.log(hastaCero(100));