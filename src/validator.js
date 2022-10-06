function isValid(numero_tarjeta){
    let longitud = numero_tarjeta.lenght;

    let cifra = null;
    let cifra_cad = null;
    let suma = 0;
// Expresiones regulares en HTML /[^0-9-\s]+/
// El método test() ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve true o false.
let numValid = /[^0-9-\s]+/.test(numero_tarjeta);
//Condicion para ingresar solo caracteres de tipo numerico
if (numValid === true) {
    return alert ("Ingrese solo caracteres de tipo numerico en este campo");
}



}


const validator = {
isValid,




};




 


export default validator;
