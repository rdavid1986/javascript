//Array reservas
const reservasEnStorage = JSON.parse(localStorage.getItem("reservas")) || [];

fetch('/data.json')
.then((res) => res.json())
.then( (data) => {
    data.forEach((reservas) => {
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img src="img/JavaScript-code.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Muchas gracias</h5>
                <p class="card-text">${reservas.cargo} ${reservas.nombre}</a>
                </div>
            </div>
        `
        section__div.appendChild(div)
    })
})

//function constructor reservas
class Persona {
    constructor(nombre, apellido, dni, dia) {
        (this.nombre = nombre),
        (this.apellido = apellido),
        (this.dni = dni),
        (this.dia = dia);
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
    nombreInput == "" &&
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debe completar el campo nombre",
        });
    //Conditional
    apellidoInput == "" &&
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debe completar el campo apellido",
        });
    //Conditional
    dni2 == "" &&
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debe completar el campo Dni. (Este campo solo acepta entrada numerica)",
        });

    if (nombreInput && apellidoInput && dni2 != "") {
        //Create a new user 
        const nuevoUsuario = new Persona(nombreInput, apellidoInput, dni2, dia);
        console.log("Nueva reserva " + "\n" + "nombre :" + " " + nombreInput + "\n" + "Apellido :" + " " + apellidoInput + "\n" + "DNI :" + " " + dni2 + "\n" + "Dia :" + " " + dia);
        //get old data from JSON and slap it to the new data
        const nuevasReservasEnStorage = JSON.parse(localStorage.getItem("reservas")) || [];
        //push new persona into array
        nuevasReservasEnStorage.push(nuevoUsuario);
        console.log(reservasEnStorage, "Push de nuevoUsuario en reserva");
        //save the old + new data on localStorage
        localStorage.setItem("reservas", JSON.stringify(nuevasReservasEnStorage));
        console.log(nuevoUsuario, "NuevoUsuario push to reservas");

        Swal.fire({
            title:"Su reserva fue realizada con exito" + "<br>" + "nombre: " + nuevoUsuario.nombre + "<br>" + "apellido: " + nuevoUsuario.apellido + "<br>" + "dni: " + nuevoUsuario.dni + "<br>" + "dia: " + nuevoUsuario.dia,
            icon: "success",
            showClass: {
                popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
                popup: "animate__animated animate__fadeOutUp",
            },
        });

        desestructurar(nuevasReservasEnStorage);
    }
  
}
//function search user in reservas
function buscar() {
  //get data from reservas
  const dataReservas = JSON.parse(localStorage.getItem("reservas"));
  //get data from dniInput2 for search
  const buscarDni = document.getElementById("dniInput2").value;
  console.log(buscarDni);
  //search on reservas with filtrarDni
  const filtrarDni = dataReservas.filter((reserva) => reserva.dni == buscarDni);
  console.log(filtrarDni);

  filtrarDni.forEach(
    (filtrarDni) => (nombreReservas = "Usted tiene una reserva" + "<br>" + "nombre: " + filtrarDni.nombre + "<br>" + "apellido: " + filtrarDni.apellido + "<br>" + "dni: " + filtrarDni.dni + "<br>" + "dia: " + filtrarDni.dia)
  );
  filtrarDni == false
    ? Swal.fire({
        icon: "error",
        title: "no existe una reserva con ese dni...",
        text: "Debe ingresar un Dni con el que haya hecho una reserva, o hacer una reserva con el Dni ingresado. (Este campo solo acepta entrada numerica)",
      })
    : Swal.fire({
        title: nombreReservas,
        icon: "success",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
}
//function cancel reserva
function cancelar() {
  //get data from reservas
  const reservasEnStorage = JSON.parse(localStorage.getItem("reservas"));
  console.log(reservasEnStorage, "traigo las reservas del json");
  //get data from dniInput3 for search
  const buscarDni = document.getElementById("dniInput3").value;
  //Filter reservas
  const borrarDni = reservasEnStorage.filter(
    (reserva) => reserva.dni != buscarDni
  );
  console.log(borrarDni, "devuelve un array , sin el dni de buscarDni");

  const nuevasReservasEnStorage = borrarDni;
  //push new array whitout borrarDni
  localStorage.setItem("reservas", JSON.stringify(nuevasReservasEnStorage));

  reservasEnStorage.length != borrarDni.length
    ? Swal.fire({
        title: "Su reserva fue cancelada",
        icon: "success",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      })
    : Swal.fire({
        icon: "error",
        title: "no existe una reserva con ese dni ...",
        text: "Debe ingresar un Dni con el que haya hecho una reserva",
      });
}
