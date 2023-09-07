
// Es el valor de la cuenta

export function actualizarSaldo(monto) {
    let saldo_cuenta = obtenerSaldo();
    saldo_cuenta += monto;
    guardarSaldo(saldo_cuenta);
}
export function obtenerSaldo() {
    return parseInt(localStorage.getItem('saldo_cuenta')) || 0;
}

function actualiza() {
    let saldo = document.getElementById("saldo-cuenta-valor");
    saldo.innerHTML = formatearMoneda(obtenerSaldo()); // Actualiza el saldo con el valor actual
    return "Se actualizo el saldo de la cuenta"
}

function guardarSaldo(saldo) {
    localStorage.setItem('saldo_cuenta', saldo);
}

function formatearMoneda(valor) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(valor);
}

try{
    console.log(actualiza())
} catch (error){
}