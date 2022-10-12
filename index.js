import validator from "./validator.js";
//Selectores
const NumeroDeTarjeta = document.getElementById("NumeroDeTarjeta");
const NombreDeUsuario = document.getElementById("NombreDeUsuario");
const botonVerificar = document.getElementById("botonVerificar");


//Botón que genera una alerta al ingresar un dato, refiere verificada o no verficada
botonVerificar.addEventListener("click", verificar);
//------------------------------------------------------------------------------------------------------------------------
function verificar (){
  const botonDos = document.getElementById("boton2");
  let creditcardNumber = NumeroDeTarjeta.value;
  let estadoV = document.getElementById("estado-validez");
  let valorDevuelto = validator.isValid(creditcardNumber);
  if (valorDevuelto == true){
    //Tarjeta válida 
    document.getElementById("nombre-de-usuario-final").innerHTML = NombreDeUsuario.value;
    //document.getElementById("mensaje").innerHTML = "El número que ingreso es: " + creditcardNumber;
    document.getElementById ("ultimos-cuatro").innerHTML = validator.maskify (creditcardNumber);
    estadoV.innerHTML = "Es Válido";
    document.getElementById("contenedorTarjeta").style.display= "none";
    document.getElementById("SegundaPantalla").style.display= "block";
    botonDos.addEventListener("click",volverInicio);
  } else{
    //Tarjeta inválida 
    document.getElementById("nombre-de-usuario-final").innerHTML = NombreDeUsuario.value;
    //document.getElementById("mensaje").innerHTML = "El número que ingreso es: " + creditcardNumber;
    document.getElementById ("ultimos-cuatro").innerHTML = validator.maskify (creditcardNumber);
    estadoV.innerHTML = "No es Válido";
    document.getElementById("contenedorTarjeta").style.display= "none";
    document.getElementById("SegundaPantalla").style.display= "block";
    botonDos.addEventListener("click",volverInicio);
  }

  function volverInicio () {location.reload();}

  }
  

//-----------------------------------------------------------------------------------------------------------------------


