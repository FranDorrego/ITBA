const transferir_mis_cuentas = document.getElementById("transferir_mis_cuentas");
const transferir_nueva = document.getElementById("transferir_nueva");
const boton_transferir = document.getElementById("boton-transferir");
const cbu = document.getElementById("CBU");
const alias = document.getElementById("alias");
const cbu_alias = document.getElementById("cbu_alias");
const importe = document.getElementById("importe");


transferir_mis_cuentas.addEventListener("click", () =>{
    transferir_mis_cuentas.classList.add("trans-seleccionado");
    if(transferir_nueva.classList.contains("trans-seleccionado")){
        transferir_nueva.classList.remove("trans-seleccionado");
    }
})

transferir_nueva.addEventListener("click", () =>{
    transferir_nueva.classList.add("trans-seleccionado");
    if(transferir_mis_cuentas.classList.contains("trans-seleccionado")){
        transferir_mis_cuentas.classList.remove("trans-seleccionado");
    }
})

boton_transferir.addEventListener("click", () =>{
    let importe_value = parseFloat(document.getElementById("importe").value);
    console.log(importe_value);
    if (!transferir_mis_cuentas.classList.contains("trans-seleccionado") && !transferir_nueva.classList.contains("trans-seleccionado")){
        alert("Seleccione el tipo de transferencia")
    }
    else if (!(cbu.checked) && !(alias.checked)){
        alert("Seleccione una opcion, CBU o Alias")
    }
    else if(cbu_alias.value == ""){
        alert("Ingrese un CBU o Alias")
    }
    else if(importe.value == "" || (importe_value <= 0 || importe_value > 225000)){
        alert("Ingrese un importe valido")
    }
    else{
        alert("Se envio la transeferencia")
    }
});

