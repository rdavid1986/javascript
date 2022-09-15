//reserva precargada

const david = {
    nombre: "david",
    apellido:"rodriguez",
    dni: 1,
    dia: "lunes"
}
//Array de reservas

reservas = [];
//Push de reserva precargada

reservas.push(david);
console.log(reservas);

//funcion constructora de reservas 

class Persona {
    constructor(nombre, apellido, dni, dia) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.dni = dni,
        this.dia = dia;
    }
}

//funcion crear reserva

function captura() {
    const nombreInput = document.getElementById("nombre").value;
    const apellidoInput = document.getElementById("apellido").value;
    const dni2 = document.getElementById("dniInput").value;
    const dia = document.getElementById("dia").value;
    console.log(nombreInput, apellidoInput, dni2, dia);
    if (nombreInput == ""){
        alert("Debe completar el campo nombre");
        document.getElementById("nombreInput");
    }else {
        if (apellidoInput == ""){
            alert("Debe completar el campo apellido");
            document.getElementById("nombreInput")
        }if (dni2 == "") {
    
            alert("Debe completar el campo dni");
            document.getElementById("dniInput");
            
        }else {
            console.log( "nombre :" + " " + nombreInput + "\n" + "Apellido :" + " " + apellidoInput + "\n" + "DNI :" + " " + dni2 + "\n" + "Dia :" + " " + dia)
        }
    }
    const nuevoUsuario = new Persona(nombreInput, apellidoInput, dni2, dia);
    reservas.push(nuevoUsuario);
    let section__div = document.getElementById("section__text");
    section__div.innerHTML = "Su reserva fue realizada con exito" + "<br>" + "nombre: " + nuevoUsuario.nombre + "<br>" + "apellido: " + nuevoUsuario.apellido + "<br>"  + "dni: " + nuevoUsuario.dni + "<br>"  + "dia: " + nuevoUsuario.dia;

    
    
    console.table(nuevoUsuario);
}

console.table(reservas);

//funcion de buscar reserva

function buscar(){

    const buscarDni = document.getElementById("dniInput2").value;
    console.log(buscarDni);
    const filtrarDni = reservas.filter(reserva => reserva.dni == buscarDni );
    
    filtrarDni.forEach(dni2 => console.log(dni2));
    
    if (filtrarDni == false){
        let section__div = document.getElementById("section__text");
        section__div.innerHTML = "no existe una reserva con ese dni";
        
        
    }else{
        let section__div = document.getElementById("section__text");
    
        filtrarDni.forEach(filtrarDni => section__div.innerHTML ="Usted tiene una reserva" + "<br>" + "nombre: " + filtrarDni.nombre + "<br>" + "apellido: "+ filtrarDni.apellido + "<br>"  + "dni: " + filtrarDni.dni + "<br>"  + "dia: " + filtrarDni.dia); 
    }
}

//funcion de cancelar reserva
function cancelar(){

    reservaEliminar = document.getElementById("dniInput").value;

    const borrarDni = reservas.findIndex( elemento => elemento.dni === reservaEliminar );

    let section__div__cancelar = document.getElementById("section__text");
    section__div__cancelar.innerHTML = "Su reserva fue cancelada";

    console.table(borrarDni);
    reservas.splice(borrarDni, 1 );
    console.table(reservas);
}

//botones de esconder
//Boton reservar

const btnEsconder = document.getElementById("btnEsconder");
const esconderReservar = document.getElementById("esconderReservar");
btnEsconder.addEventListener("click", toggleReservar);
function toggleReservar() {
    esconderReservar.classList.toggle("mostrarReservar");

    if(esconderReservar.classList.contains("mostrarReservar")){
        btnEsconder.innerHTML = "Esconder Reservar"
        let section__h1 = document.getElementById("section__h1");
        section__h1.innerHTML = "Ingrese sus datos para hacer su reserva por favor";
    }else{
        btnEsconder.innerHTML = " Menu hacer Reserva"
        let section__h1 = document.getElementById("section__h1");
        section__h1.innerHTML = "Bienvenidos a nuestro sistema de reservas";
    }
}

//boton ver reserva

const btnEsconder2 = document.getElementById("btnEsconder2");
const esconderVerReserva = document.getElementById("esconderVerReserva");
btnEsconder2.addEventListener("click", toggleVerReserva);
function toggleVerReserva() {
    esconderVerReserva.classList.toggle("mostrarVerReserva");


    if(esconderVerReserva.classList.contains("mostrarVerReserva")){
        btnEsconder2.innerHTML = "Esconder ver Reserva"
        let section__h1 = document.getElementById("section__h1");
        section__h1.innerHTML = "Ingrese su DNI para ver su reserva por favor";
    }else{
        btnEsconder2.innerHTML = " Menu ver su Reserva"
        let section__h1 = document.getElementById("section__h1");
        section__h1.innerHTML = "Bienvenidos a nuestro sistema de reservas";
    }
}

//boton cancelar reserva

const btnEsconder3 = document.getElementById("btnEsconder3");
const esconderCancelar = document.getElementById("esconderCancelar");
btnEsconder3.addEventListener("click", toggleCancelar);
function toggleCancelar() {
    esconderCancelar.classList.toggle("mostrarCancelar");


    if(esconderCancelar.classList.contains("mostrarCancelar")){
        btnEsconder3.innerHTML = "Esconder cancelar su reserva"
        let section__h1 = document.getElementById("section__h1");
        section__h1.innerHTML = "Ingrese su DNI para cancelar su reserva por favor";
    }else{
        btnEsconder3.innerHTML = " Menu cancelar su reserva"
        let section__h1 = document.getElementById("section__h1");
        section__h1.innerHTML = "Bienvenidos a nuestro sistema de reservas";
    }
}

/* const presionaEnter = document.getElementById("nombre");
presionaEnter.addEventListener("keydown", presionar);


addEventListener("keydown", (e) => {
    if(e.keycode === 13 ) {
        console.log(e.target.value);
    }
})
function presionar() {
    nombre.addEventListener("keydown", myScript);
} */
/* 
const inputEnter = document.getElementById("nombre")
inputEnter.addEventListener("keydown", presionaEnter);

function presionaEnter(e) {
    if (e.keycode === 13) {

        document.getElementById("nombre").style.backgroundColor = "red";
    }
} */
const inputEnter = document.getElementById('nombre');
inputEnter.addEventListener('keyup', function(e) {
  const keycode = e.keyCode || e.which;
  if (keycode == 13) {
    inputEnter.value;
    document.getElementById("nombre").style.backgroundColor = "red";
    console.log("Enter!");
  }
});