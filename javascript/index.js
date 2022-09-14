const david = {
    nombre: "david",
    apellido:"rodriguez",
    dni: 1,
    dia: "lunes"
}
reservas = [];
reservas.push(david);
console.log(reservas);

class Persona {
    constructor(nombre, apellido, dni, dia) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.dni = dni,
        this.dia = dia;
    }
}

//Funcion para capturar los datos de los inputs

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
    section__div.innerHTML = "Su reserva fue realizada con exito";
    
    console.table(nuevoUsuario);
}

console.table(reservas);

function buscar(){

    const buscarDni = document.getElementById("dniInput").value;
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
function cancelar(){

    reservaEliminar = document.getElementById("dniInput").value;

    const borrarDni = reservas.findIndex( elemento => elemento.dni === reservaEliminar );

    let section__div__cancelar = document.getElementById("section__text");
    section__div__cancelar.innerHTML = "Su reserva fue cancelada";

    console.table(borrarDni);
    reservas.splice(borrarDni, 1 );
    console.table(reservas);
}
