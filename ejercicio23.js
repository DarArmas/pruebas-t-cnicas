/* Poner en mayusculas cada palabra de una cadena

-Crear una funcion con los parametros de texto
-Poner la primera letra del string en mayusculas
-Recorrer el string completo
-Si el caracter anterior a la letra actual es un espacio entonces ponelo en mayusculas
-Ponerlo en mayusculas
-Si el caracter no es un espacio añadirlo al resultado
*/


function toMayus(text){
    let result = '';
    characters = text.split('');
  
    for(let i=0; i<characters.length; i++){
        if(characters[i-1] === ' ' || i== 0){
            result += characters[i].toUpperCase()
        }else{
            result += characters[i].toLowerCase();
        }
    }

    return result;
}

console.log(toMayus("hOla mUNDO sOY dARNELL"));
