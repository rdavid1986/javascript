// > menor que
// < mayor que
// >= mayor o igual
// <= menor o igual
// == igual que
// != distinto de
// && (and) y
// || (or) o (se cumple una o la otra)
var probamosLampara = true
while (probamosLampara = true){ 
    var lamparaFunciona = prompt("La lampara funciona?")
    while (lamparaFunciona !="si"){
            if (lamparaFunciona = true) {
                var enchufada = prompt("La lampara esta enchufada?");
                if (enchufada == "si"){
                    var foco = prompt("El foco esta quemado ?");
                    if (foco != "no"){
                        alert ("Cambia el foco");
                        break
                    }else if ( foco = "no") {
                        alert("La lampara no sirve , hay que conseguir otra");
                        alert("Enchufa la nueva lampara")
                        break;
                    }
                }else {
                    alert ("Enchufa la lampara");
                    break;
                }
            }
    } if (lamparaFunciona == "si"){
            alert ("Tu lampara funciona")
            break
    }
}