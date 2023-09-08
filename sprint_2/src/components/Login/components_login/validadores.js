export function validarUsuario(value){
    return (value.length >= 4 && value.length <= 15)
}

export function validarDni(value){
    return (value.length >= 3 && value.length <= 8)
}

export function validarPassword(value){
    return value.length >= 8
}

export function validarTelefono(value){
    return (value.length >= 7 && value.length <= 12)
}