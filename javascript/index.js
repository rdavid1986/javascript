// > menor que
// < mayor que
// >= mayor o igual
// <= menor o igual
// == igual que
// != distinto de
// !== comprueba si sus dos operandos son diferentes
// && (and) y
// || (or) o (se cumple una o la otra)

// simulador de cuotas

reservas = [];

console.log(reservas);

function Persona(nombre,apellido,dni,horario){
    this.nombre =nombre,
    this.apellido= apellido,
    this.dni = dni,
    this.horario = horario
}

option = prompt("Ingrese una opcion: \n1.hacer reserva \n2.ver tu reserva \n3.Cancelar reserva \n0. salir");
while (option != "1" && option != "2" && option != "3" && option != "0"){ 
    alert("debes agregar una opcion valida")
    option = prompt("Ingrese una opcion: \n1.hacer reserva \n2.ver tu reserva \n3.Cancelar reserva \n0. salir")
}
while (option != "0"){
    switch(option) {
            case "1":
                nombre = prompt("Ingrese su nombre");
                apellido = prompt("Ingrese su apellido");
                dni = prompt("Ingrese su dni");
                horario = prompt("Elija el horario:\n 1. 7:00hs \n 2. 7:10hs \n 3.7:20hs \n 4.7:30hs");
                while (horario != "1" && horario != "2" && horario != "3" &&horario != "4"){
                    alert("ingrese una opcion correcta");
                    horario = prompt("Elija el horario:\n 1. 7:00hs \n 2. 7:10hs \n 3.7:20hs \n 4.7:30hs");
                }switch(horario){
                    case "1":
                        horario = "7:00hs";
                        break
                    case "2":
                        horario = "7:10hs";
                        break
                    case "3":
                        horario = "7:20hs";
                        break;
                    case "4":
                        horario = "7:30hs";
                        break
                }
                reservas.push(new Persona(nombre,apellido,dni,horario));
                break
            case "2":
                const buscarDni = prompt("que dni buscas....");
                const paso = reservas.find(elemento =>{
                    return elemento.dni === buscarDni;
                });
                
                alert("nombre: " + paso.nombre +"\n" + "apellido: "+paso.apellido + "\n" + "dni: " + paso.dni + "\n" + "cita alas: " + paso.horario);
                console.log("nombre: " + paso.nombre + "\n" + "apellido: " + paso.apellido  + "\n" + "dni: " + paso.dni + "\n" + "cita alas: " + paso.horario);
                break;
                
            case "3": 
                reservaEliminar = prompt("ingrese el dni de la reserva a elminar");

                const index = reservas.findIndex( x => x.dni === reservaEliminar );
                alert("Su reserva fue cancelada");

                reservas.splice( index, 1 );
                console.log( reservas );

        }option = prompt("Ingrese una opcion: \n1.hacer reserva \n2.ver tu reserva \n3.Cancelar reserva \n0. salir");
}alert("cerrando programa")