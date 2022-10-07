import validator from "./validator.js";
//Selectores
let NumeroDeTarjeta = document.getElementById("NumeroDeTarjeta")
let NombreDeUsuario = document.getElementById("NombreDeUsuario")


//Botón que genera una alerta al ingresar un dato, refiere verificada o no verficada
let botonVerificar = document.getElementById("botonVerificar");

botonVerificar.addEventListener("click", () => {
    let numeroFinal = NumeroDeTarjeta.value
    if(numeroFinal <= 16){
      return alert("La tarjeta debe tener mínimo 14 numeros");
      
    } 

//Nos muestra el nombre del usuario 
document.getElementById("nombre-de-usuario-final"). innerHTML = NombreDeUsuario.value;

//bloqueo de la segunda pantalla hasta que no se cumpla con los campos requeridos
document.getElementById("contenedorTarjeta").style.display= "none";
document.getElementById("SegundaPantalla").style.display= "block";

});

//recarga la segunda pantalla 
const SegundaPantalla = document.getElementById('SegundaPantalla');

SegundaPantalla.addEventListener('click', () =>{

  Location.reload();

  


});

console.log(validator);
