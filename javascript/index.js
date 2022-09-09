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
                dia = prompt("Elija el dia:\n 1. Lunes \n 2. Martes \n 3.Miercoles \n 4.Jueves \n 5.Viernes");
                while (dia != "1" && dia != "2" && dia != "3" && dia != "4" && dia != "5"){
                    alert("ingrese una opcion correcta");
                    dia = prompt("Elija el dia:\n 1. Lunes \n 2. Martes \n 3.Miercoles \n 4. Jueves \n 5. Viernes");
                }switch(dia){
                    case "1":
                        dia = "Lunes";
                        break
                    case "2":
                        dia = "Martes";
                        break
                    case "3":
                        dia = "Miercoles";
                        break;
                    case "4":
                        dia = "Jueves";
                        break;
                    case "5":
                        dia = "Viernes";
                        break;
                }
                const nuevoUsuario = new Persona(nombre, apellido, dni, dia);
                reservas.push(nuevoUsuario);
                    alert("Su reserva fue realizada");
                    console.table(nuevoUsuario);
                break;
            case "2":  

                const buscarDni = prompt("Ingrese el dni de su reserva");
                const filtrarDni = reservas.filter(reserva => reserva.dni == buscarDni );

                console.log(typeof filtrarDni);
                filtrarDni.forEach(dni => console.log(dni));

                if (filtrarDni == false){
                    alert("no existe una reserva con ese dni");
                    
                }else{
                    alert("usted tiene una reserva");

                    filtrarDni.forEach(filtrarDni => alert("nombre: " + filtrarDni.nombre +"\n" + "apellido: "+ filtrarDni.apellido + "\n" + "dni: " + filtrarDni.dni + "\n" + "dia: " + filtrarDni.dia));
                }

                break; 
            case "3": 
                reservaEliminar = prompt("ingrese el dni de la reserva a cancelar");

                const borrarDni = reservas.findIndex( elemento => elemento.dni === reservaEliminar );

                console.table(borrarDni);
                reservas.splice(borrarDni, 1 );
                console.table(reservas );

                alert("Su reserva fue cancelada");
                break;
        }option = prompt("Ingrese una opcion: \n1.hacer reserva \n2.ver tu reserva \n3.Cancelar reserva \n0. salir");
}alert("cerrando programa");

// setTimeout(() => opcionesSesion(), 2000) 