const validator = {
    isValid (creditcardNumber){
        let array = creditcardNumber.split("");
        let suma = 0;
        console.log(array);
        for(let i=0; i < array.length;i++){
        let Multiplicado = array [i]*2;
        //Multiplicar solo las posiciones en 0,2,4,6,8,10,12,14
        
        if (Multiplicado >9){
            Multiplicado.split('').forEach(Multiplicado => suma += parseInt(Multiplicado));
            console.log(suma);
            return suma; 
            //sumar sus digitos el número del Multiplicado 
        }else{
            return Multiplicado; 
            
            
        }
        }
      //Implementar para varlidar números   
    },



//Enmascara los primeros 12 numeros
 maskify(creditcardNumber) {
    if (creditcardNumber.length <= 4) {
        return creditcardNumber;
    }

    //Extraen los ultimos 4 numeros
    let ultimosNumeros = creditcardNumber.substring(creditcardNumber.length - 4);
    //Se extraen todos menos los 4 ultimos
    let inicioNumeros = creditcardNumber.substring(0,creditcardNumber.length - 4);
    //Se enmascara con #  cualquier caracter
    let numeroEnmascarado = inicioNumeros.replace(/./g, "#") + "" + ultimosNumeros;
    //retorna un objeto
    return numeroEnmascarado;
 },
}

validator.isValid("4083952015263");



export default validator;
