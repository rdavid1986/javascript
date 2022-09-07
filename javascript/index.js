const david = {
    nombre: "david",
    apellido:"rodriguez",
    dni: 1,
    horario: "7:20hs"
}
reservas = [];
reservas.push(david);
console.log(reservas);

class Persona {
    constructor(nombre, apellido, dni, horario) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.dni = dni,
        this.horario = horario;
    }
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
                        break;
                }
                const nuevoUsuario = new Persona(nombre, apellido, dni, horario);
                reservas.push(nuevoUsuario);
                
                break;
            case "2":  

                const buscarDni = prompt("Ingrese el dni de su reserva");
                const filtrarDni = reservas.filter(reserva => reserva.dni == buscarDni );

                console.log(typeof filtrarDni);
                filtrarDni.forEach(dni => console.log(dni));
                console.table(filtrarDni);
                
                if (filtrarDni == false){
                    alert("no existe una reserva con ese dni");
                    
                    console.table(filtrarDni)
                }else{
                    alert("usted tiene una reserva"  );
                    alert(buscarDni.Dni)
                }
                break; 
                

                
                
            case "3": 
                reservaEliminar = prompt("ingrese el dni de la reserva a cancelar");

                const borrarDni = reservas.findIndex( elemento => elemento.dni === reservaEliminar );

                console.table(borrarDni);
                reservas.splice( borrarDni, 1 );
                console.table( reservas );

                alert("Su reserva fue cancelada");
                break;

        }option = prompt("Ingrese una opcion: \n1.hacer reserva \n2.ver tu reserva \n3.Cancelar reserva \n0. salir");
}alert("cerrando programa");