import { actualizarSaldo } from './CONSTANTES.js';

const boton_simular = document.getElementById("boton_simular");

boton_simular.addEventListener("click", (event)=>{
    event.preventDefault()
    let monto  = parseFloat(document.getElementById("monto").value);
    let monto_value = document.getElementById("monto").value
    let cuotas = parseFloat(document.getElementById("cuotas").value);
    let cuotas_value = document.getElementById("cuotas").value;
    let cuotas_de = document.getElementById("cuotas_de");
    let intereses_a_pagar = document.getElementById("intereses_a_pagar");
    let btn_porcentaje = document.getElementById("btn_porcentaje");
    let btn_plata = document.getElementById("btn_plata");
    let total_a_pagar = document.getElementById("total_a_pagar");
    let solicitar_prestamo = document.getElementById("solicitar-prestamo");
    
    if(monto_value == ""){
        alert("Ingrese un monto")
    }
    else if (cuotas_value == ""){
        alert("Seleccione cuotas")
    }
    else{
        const interes = 0.15
        btn_porcentaje.addEventListener("click", () =>{
            intereses_a_pagar.value = interes*100 + "%";
        })
    
        btn_plata.addEventListener("click", () =>{
            intereses_a_pagar.value = monto*interes;
        })
    
        cuotas_de.value = monto/cuotas * (1 + interes)
    
        intereses_a_pagar.value = interes*100 + "%";
    
        let resultado = monto*(1 + interes)
    
        total_a_pagar.value = resultado
    
        solicitar_prestamo.addEventListener("click", ()=>{
                alert("Su prestamo fue procesado con exito")
                actualizarSaldo(monto)
        })
    }
    

})


