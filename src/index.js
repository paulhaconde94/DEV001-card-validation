import validator from "./validator.js";
//Selectores
let NumeroDeTarjeta = document.getElementById("NumeroDeTarjeta")
let NombreDeUsuario = document.getElementById("NombreDeUsuario")


//Botón que genera una alerta al ingresar un dato, refiere verificada o no verficada
let botonVerificar = document.getElementById("botonVerificar");

botonVerificar.addEventListener("click", verificar);
function verificar (){
  let numeroFinal = NumeroDeTarjeta.value
  if(numeroFinal <= 16){
    document.getElementById("ultimos-cuatro").innerHTML = validator.maskify(numeroFinal);
      return alert("La tarjeta tiene que tener mínimo 14 numeros");    
  }

//let isValid = validator.isValid(numeroFinal)


//Condicion si es valida o invalida 
if (validator.isValid(numeroFinal)== true){
  document.getElementById("estado-validez").innerHTML = "ES VALIDA";
  
 } else {
   document.getElementById("estado-validez").innerHTML = "ES INVALIDA";
   
 }

//Nos muestra el nombre del usuario 
document.getElementById("nombre-de-usuario-final"). innerHTML = NombreDeUsuario.value;

//bloqueo de la segunda pantalla hasta que no se cumpla con los campos requeridos
document.getElementById("contenedorTarjeta").style.display= "none";
document.getElementById("SegundaPantalla").style.display= "block";

}



//recarga la segunda pantalla 
const SegundaPantalla = document.getElementById('SegundaPantalla');

SegundaPantalla.addEventListener('click', () =>{

  Location.reload();

  


});

console.log(validator);
