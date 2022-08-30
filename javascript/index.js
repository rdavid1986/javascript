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

const impuestosPorPagoEnCuotas = 0.45
const tresCuotas = 0.1350;
const seisCuotas = 0.2150;
const nueveCuotas = 0.30;
const doceCuotas = 0.36;
const dieciOchoCuotas = 0.46;
const veintiCuatro = 0.52;
let impuestoPaisCaba = 0.08;
let impuestoPais = 0.30;
let iva = 0.21;
let impuestoSellos = 0.12;

const bienvenido = alert("Bienvenido al simulador de cuotas de tajeta de credito");
    let deseaUtilizar = prompt("Desea utilizar nuestro simulador?");

    if (deseaUtilizar == "si") {
        while (deseaUtilizar == "si") {
            valorProducto = Number(prompt("Cuanto cuesta el producto?"));

            var ciudad = prompt("Eres de CABA?");

            let calculoCuota = ( valorProducto, cantidadCuotas, impuestopais, impuestopaiscaba, sellos,iva) => {
            const precioProductoCuotas = valorProducto + (valorProducto * cantidadCuotas);

            let pagoTotalCuotas = precioProductoCuotas + (precioProductoCuotas * impuestopais) + (precioProductoCuotas * sellos) + (precioProductoCuotas * iva);

            if (ciudad === "si") {
                pagoTotalCuotas = precioProductoCuotas + (precioProductoCuotas * impuestopaiscaba) + (precioProductoCuotas * sellos) + (precioProductoCuotas * iva);

                alert(
                    "Con los impueston agregados tu producto ahora vale $" +
                    pagoTotalCuotas
                );
            } else {
                pagoTotalCuotas;

                alert(
                    "Con los impueston agregados tu producto ahora vale $" +
                    pagoTotalCuotas
                );
            }
            return pagoTotalCuotas;
            };

            function opcionesCuotas() {
                opciones = Number(prompt("En cuantas cuotas quieres simular?\n En 3 cuotas \n En 6 cuotas \n En 12 cuotas\n En 18 cuotas\n En 24 cuotas"));
                    switch (opciones) {
                        case 3:
                            alert("Elegiste calcular tu producto de $" + valorProducto + " en 3 cuotas");
                            return (calculoCuota(valorProducto, tresCuotas, impuestoPais,impuestoPaisCaba, impuestoSellos, iva) / 3);
                        case 6:
                            alert("Elegiste calcular tu producto en 6 cuotas");
                            return (calculoCuota(valorProducto, seisCuotas, impuestoPais,impuestoPaisCaba, impuestoSellos, iva) / 6);
                        case 12:
                            alert("Elegiste calcular tu producto en 12 cuotas");
                            return (calculoCuota(valorProducto, doceCuotas, impuestoPais,impuestoPaisCaba, impuestoSellos, iva ) / 12);
                        case 18:
                            alert("Elegiste calcular tu producto en 18 cuotas");
                            return (calculoCuota(valorProducto, dieciOchoCuotas,impuestoPais, impuestoPaisCaba, impuestoSellos, iva ) / 18 );
                        case 24:
                            alert("Elegiste calcular tu producto en 24 cuotas");
                            return (calculoCuota( valorProducto, dieciOchoCuotas,impuestoPais, impuestoPaisCaba, impuestoSellos, iva) / 24);
                        default:
                            opciones = Number(prompt("En cuantas cuotas quieres simular?\n En 3 cuotas \n En 6 cuotas \n En 12 cuotas\n En 18 cuotas\n En 24 cuotas"));
                    switch (opciones) {
                        case 3:
                            alert("Elegiste calcular tu producto de $" + valorProducto + " en 3 cuotas");
                            return (calculoCuota(valorProducto, tresCuotas, impuestoPais,impuestoPaisCaba, impuestoSellos, iva) / 3);
                        case 6:
                            alert("Elegiste calcular tu producto en 6 cuotas");
                            return (calculoCuota(valorProducto, seisCuotas, impuestoPais,impuestoPaisCaba, impuestoSellos, iva) / 6);
                        case 12:
                            alert("Elegiste calcular tu producto en 12 cuotas");
                            return (calculoCuota(valorProducto, doceCuotas, impuestoPais,impuestoPaisCaba, impuestoSellos, iva ) / 12);
                        case 18:
                            alert("Elegiste calcular tu producto en 18 cuotas");
                            return (calculoCuota(valorProducto, dieciOchoCuotas,impuestoPais, impuestoPaisCaba, impuestoSellos, iva ) / 18 );
                        case 24:
                            alert("Elegiste calcular tu producto en 24 cuotas");
                            return (calculoCuota( valorProducto, dieciOchoCuotas,impuestoPais, impuestoPaisCaba, impuestoSellos, iva) / 24);
                        default:
                            alert("seleccione una opcion valida");
                            opciones = Number(prompt("En cuantas cuotas quieres simular?\n En 3 cuotas \n En 6 cuotas \n En 12 cuotas\n En 18 cuotas\n En 24 cuotas"));
                    }
                    }


            }

            const pagoTotal = opcionesCuotas();
            alert("La simulacion da como resultado " + opciones + " cuotas de " + "$" + pagoTotal + " cada una");
            let volverAUtilizar = prompt("Desea volver a utilizar el simulador?");
            if (volverAUtilizar == "no" || volverAUtilizar != "si") {
            alert("Gracias por usar nuestro simulador de cuotas de tarjeta de credito ");
            break;
            } else if (volverAUtilizar == "si") {
            deseaUtilizar == "si";
            }
        }
    } else if (deseaUtilizar != "si" && deseaUtilizar == "no") {
    alert("Gracias");
    }


