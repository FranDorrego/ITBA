// cambio de divisas



function convertir(){
    let pago = parseFloat(document.getElementById("pago").value);
    let recibo = parseFloat(document.getElementById("recibo").value);
    let opcion_pago = document.getElementById("opcion-pago").value;
    let opcion_recibo = document.getElementById("opcion-recibo").value;
    console.log(pago, recibo);
    var cambio = document.getElementById("cambio");
    cambio = document.getElementById("cambio")
    cambio.value = 1
}


function elegirOpcion(opcion_pago, opcion_recibo){
    switch(opcion_pago){
        case "ars":
            return 1
    }

    switch(opcion_recibo){
        case "1":
            return 1
    }

}