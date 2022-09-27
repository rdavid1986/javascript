<<<<<<< HEAD
//Array de reservas
=======

//Array reservas
>>>>>>> develop

/* reservas = []; */

const reservas = JSON.parse(localStorage.getItem("reservas")) || []

//function constructor reservas 

class Persona {
    constructor(nombre, apellido, dni, dia) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.dni = dni,
        this.dia = dia;
    }
}

//function crear reserva

function hacerReserva() {

        //get data from inputs
        const nombreInput = document.getElementById("nombre").value;
        const apellidoInput = document.getElementById("apellido").value;
        const dni2 = document.getElementById("dniInput").value;
        const dia = document.getElementById("dia").value;
        //Conditional
        nombreInput == "" && alert("Debe completar el campo nombre");
        //Conditional
        apellidoInput == "" && alert("Debe completar el campo apellido");
        //Conditional
        dni2 == "" && alert("Debe completar el campo dni");
        //Conditional
        if (nombreInput && apellidoInput && dni2 != ""){

            console.log( "Nueva reserva " + "nombre :" + " " + nombreInput + "\n" + "Apellido :" + " " + apellidoInput + "\n" + "DNI :" + " " + dni2 + "\n" + "Dia :" + " " + dia);

            const nuevoUsuario = new Persona(nombreInput, apellidoInput, dni2, dia);
            
            let section__div = document.getElementById("section__text");
            //print in screen new persona
            section__div.innerHTML = "Su reserva fue realizada con exito" + "<br>" + "nombre: " + nuevoUsuario.nombre + "<br>" + "apellido: " + nuevoUsuario.apellido + "<br>"  + "dni: " + nuevoUsuario.dni + "<br>"  + "dia: " + nuevoUsuario.dia;
        
            //get old data from JSON and slap it to the new data
            const reservasEnStorage = JSON.parse(localStorage.getItem("reservas at localStorage "));
            //push new persona into array 
            reservasEnStorage.push(nuevoUsuario);
        
            //save the old + new data on localStorage
            localStorage.setItem("reservas", JSON.stringify(reservasEnStorage))

            console.log(nuevoUsuario, "NuevoUsuario push to reservas");
        }

}


console.log(reservas,"Reservas push");

//function buscar reserva
function buscar(){
    //get data from reservas 
    const dataReservas = JSON.parse(localStorage.getItem("reservas"));
    //get data from dniInput2 for search
    const buscarDni = document.getElementById("dniInput2").value;
    console.log(buscarDni);
    //search on reservas with filtrarDni
    const filtrarDni = dataReservas.filter(reserva => reserva.dni == buscarDni );
    console.log(filtrarDni);
    
    let section__div = document.getElementById("section__text");

    filtrarDni == false ?  section__div.innerHTML = "no existe una reserva con ese dni" : filtrarDni.forEach(filtrarDni => section__div.innerHTML ="Usted tiene una reserva" + "<br>" + "nombre: " + filtrarDni.nombre + "<br>" + "apellido: "+ filtrarDni.apellido + "<br>"  + "dni: " + filtrarDni.dni + "<br>"  + "dia: " + filtrarDni.dia);

}

//function cancelar reserva

function cancelar (){
    //get data from reservas 
    const reservasEnStorage = JSON.parse(localStorage.getItem("reservas"));
    console.log(reservasEnStorage,
        "traigo las reservas del json");
    //get data from dniInput3 for search
    const buscarDni = document.getElementById("dniInput3").value;
    //Filter reservas
    const borrarDni = reservasEnStorage.filter(reserva => reserva.dni != buscarDni );
    console.log(borrarDni,
        "devuelve un array , sin el dni de buscarDni");
    
    const nuevasReservasEnStorage = borrarDni;
    //push new array whitout borrarDni
    localStorage.setItem("reservas", JSON.stringify(nuevasReservasEnStorage));
    let section__div__cancelar = document.getElementById("section__text");

    borrarDni === buscarDni ? (section__div__cancelar.innerHTML = "Su reserva fue cancelada") : (section__div__cancelar.innerHTML = "no existe una reserva con ese dni")

}
//spread
console.log(...reservas, "spread de reservas");

// Destructuring 
const reservas2 = reservas.find(reserva => reservas.reserva === reservas);
let [{nombre, dni}] = reservas 
console.log( {nombre}, "nombre de reserva con Destructuring ")
console.log( {dni}, "dni de reserva con Destructuring ")

//button esconder
//Button reservar

const btnEsconder = document.getElementById("btnEsconder");
const esconderReservar = document.getElementById("esconderReservar");
btnEsconder.addEventListener("click", toggleReservar);
function toggleReservar() {
    esconderReservar.classList.toggle("mostrarReservar");

    let section__h1 = document.getElementById("section__h1");


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

//button ver reserva

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

//button cancelar reserva

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
