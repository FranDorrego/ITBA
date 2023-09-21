export function validarImporte(data){
    return parseFloat(data) >= 1 && parseFloat(data) <= 250000
}