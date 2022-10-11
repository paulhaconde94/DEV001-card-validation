const validator = {
    isValid (creditcardNumber){
        let array = creditcardNumber.split("");
        let arra2 = [];
        //console.log(array);
        for(let i=0; i < array.length;i++){
        if (i % 2 === 0  || i===0){
            let multiplicado = parseInt(array[i])*2;  
        
        //Multiplica solo las posiciones en 0,2,4,6,8,10,12,14
        // Una vez multiplicado sumar los números mayores o iguales a 9
        if (multiplicado > 9){
            let suma = 0;
            suma=(multiplicado-multiplicado%10)/10+multiplicado%10;
            arra2.push (suma);
        
        
         //sumar sus digitos del número del Multiplicado 

        }
        
        else{
            arra2.push(multiplicado); 
                
        }

        }
        else{
           arra2.push(parseInt(array[i])
           );

        }
    
        }
    //Sumar todos los digitos del arra2, todos los elementos
    let SumaTotal = 0;
    arra2.forEach(function(elementos){
        SumaTotal += elementos;
    });
    
    //Resultado de la suma sea multiplo de 10, es tarjeta valida o invalida
     let Resultado; 
     if (SumaTotal % 10 == 0){
        Resultado = true;
     }
     else{
        Resultado = false;
        } 
    return Resultado;

    
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
