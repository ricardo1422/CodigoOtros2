var formulario = document.querySelector("#form")
// se cambio la forma de llamar los elementos del DOM
const nombre =document.getElementById("name");
const edad =document.getElementById("age");
const selec_nacionality =document.getElementById("nationality");
const lista_invitados =document.getElementById("lista_invitados");
const boton_formulario=document.getElementById("boton_formulario");
var cont=0;

//se cambio la forma de darle funcionalidad al boton
boton_formulario.addEventListener("click", function(){

  
  //se quitaron las validaciones inecesarias
  if (nombre.value.length > 0 && edad.value > 18 && edad.value < 120 ) {
       agregarInvitado(nombre.value, edad.value, selec_nacionality.value)
    }else{
      //se agrego una alerta para indicarle al usuario que el llenado fue erroneo
      alert("Error en el llenado del formulario")
    }
})
function agregarInvitado(nombre, edad, nacionalidad) {

  console.log(nombre, edad)
  console.log(nacionalidad)
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

//se cambio la forma de añadir un elemento a la lista
var elementoLista = `<li id="li_${cont}">
              <span>Nombre: </span> ${nombre}
              <span>Edad: </span>${edad}, 
              <span>Nacionalidad: </span>${nacionalidad}      
            </li>
            <button onclick="elimina(li_${cont}, bt_${cont})" id="bt_${cont}">Eliminar invitado</button>`
            cont ++;
lista_invitados.insertAdjacentHTML("beforeend", elementoLista)
}
//se cambio la funcion de eliminar
function elimina(item, boton){
  console.log(item);
  console.log(boton);
  lista_invitados.removeChild(item);
  lista_invitados.removeChild(boton);
}
// var spanNombre = document.createElement("span")
// var inputNombre = document.createElement("input")
// var espacio = document.createElement("br")
// spanNombre.textContent = "Nombre: "
// inputNombre.value = nombre 
// elementoLista.appendChild(spanNombre)
// elementoLista.appendChild(inputNombre)
// elementoLista.appendChild(espacio)

// function crearElemento(descripcion, valor) {
// var spanNombre = document.createElement("span")
// var inputNombre = document.createElement("input")
// var espacio = document.createElement("br")
// spanNombre.textContent = descripcion + ": "
// inputNombre.value = valor 
// elementoLista.appendChild(spanNombre)
// elementoLista.appendChild(inputNombre)
// elementoLista.appendChild(espacio)
// }

// crearElemento("Nombre", nombre)
// crearElemento("Edad", edad)
// crearElemento("Nacionalidad", nacionalidad)


// var botonBorrar = document.createElement("button")
// botonBorrar.textContent = "Eliminar invitado"
// botonBorrar.id = "boton-borrar"
// var corteLinea = document.createElement("br")
// elementoLista.appendChild(corteLinea)
// elementoLista.appendChild(botonBorrar);




// var botonBorrar = document.createElement("button")
// botonBorrar.textContent = "Eliminar invitado"
// botonBorrar.id = "boton-borrar"
// var corteLinea = document.createElement("br")
// document.body.appendChild(corteLinea)
// document.body.appendChild(botonBorrar);

