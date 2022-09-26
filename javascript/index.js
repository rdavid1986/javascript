
//Array de reservas

reservas = [];

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

function hacerReserva() {

    //get data from inputs
    const nombreInput = document.getElementById("nombre").value;
    const apellidoInput = document.getElementById("apellido").value;
    const dni2 = document.getElementById("dniInput").value;
    const dia = document.getElementById("dia").value;

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
    //create a new persona(reserva)
    const nuevoUsuario = new Persona(nombreInput, apellidoInput, dni2, dia);
    
    let section__div = document.getElementById("section__text");
    //print in screen new persona
    section__div.innerHTML = "Su reserva fue realizada con exito" + "<br>" + "nombre: " + nuevoUsuario.nombre + "<br>" + "apellido: " + nuevoUsuario.apellido + "<br>"  + "dni: " + nuevoUsuario.dni + "<br>"  + "dia: " + nuevoUsuario.dia;

    
    //if nothing saved on the start then save an empty array
    if (localStorage.getItem("reservas") == null) {
        console.log(reservas)
        localStorage.setItem("reservas", "[]");
    }
    //get old data from JSON and slap it to the new data
    const reservasEnStorage = JSON.parse(localStorage.getItem("reservas"));
    //push new persona into array 
    reservasEnStorage.push(nuevoUsuario);

    //save the old + new data on localStorage
    localStorage.setItem("reservas", JSON.stringify(reservasEnStorage))


    console.table(nuevoUsuario);
}


console.table(reservas);

//funcion de buscar reserva
function buscar(){
    //get data from reservas 
    const dataReservas = JSON.parse(localStorage.getItem("reservas"));
    //get data from dniInput2 for search
    const buscarDni = document.getElementById("dniInput2").value;
    console.log(buscarDni);
    //search on reservas with filtrarDni
    const filtrarDni = dataReservas.filter(reserva => reserva.dni == buscarDni );
    console.log(filtrarDni);
    
    if (filtrarDni == false){
        //if dataReservas is not the same of data from dniInput2
        let section__div = document.getElementById("section__text");
        section__div.innerHTML = "no existe una reserva con ese dni";
        
        
    }else{
        //data from dniInput2 is same at the reservas in JSON
        let section__div = document.getElementById("section__text");
    
        filtrarDni.forEach(filtrarDni => section__div.innerHTML ="Usted tiene una reserva" + "<br>" + "nombre: " + filtrarDni.nombre + "<br>" + "apellido: "+ filtrarDni.apellido + "<br>"  + "dni: " + filtrarDni.dni + "<br>"  + "dia: " + filtrarDni.dia); 
    }
}

//funcion de cancelar reserva

function cancelar (){
    const reservasEnStorage = JSON.parse(localStorage.getItem("reservas"));
    console.log(reservasEnStorage,
        "traigo las reservas del json");

    const buscarDni = document.getElementById("dniInput3").value;
    const borrarDni = reservasEnStorage.filter(reserva => reserva.dni != buscarDni );
    console.log(borrarDni,
        "devuelve un array , sin el dni de buscarDni");
    
    localStorage.setItem("reservas", JSON.stringify(reservasEnStorage));

    if (borrarDni != true){

        const nuevasReservasEnStorage = borrarDni;
        localStorage.setItem("reservas", JSON.stringify(nuevasReservasEnStorage));
        
        let section__div__cancelar = document.getElementById("section__text");
        
        section__div__cancelar.innerHTML = "Su reserva fue cancelada";
        
    }
    else{
        
        //if reservasEnStorage is not the same of data from dniInput2
        let section__div = document.getElementById("section__text");
        section__div.innerHTML = "no existe una reserva con ese dni";
    }
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
