// cambio de divisas
function convertir(){
    let origen        = parseFloat(document.getElementById("origen").value);
    let convertido    = parseFloat(document.getElementById("convertido").value);
    let opcion_pago   = document.getElementById("option1").value;
    let opcion_recibo = document.getElementById("option2").value;

    // a pesos, 1 PESO = ...
    const pesoAdolares = 0.0029
    const pesoAeuros   = 0.0026
    const pesoAreales  = 0.014
    const pesoAlibras  = 0.0023
    const pesoAyuanes  = 0.021

    // a dolares, 1 DOLAR = ...
    const dolarApesos  = 350.19
    const dolarAeuros  = 0.93
    const dolarAreales = 4.87
    const dolarAlibras = 0.80
    const dolarAyuanes = 7.29

    // a euros, 1 EURO = ...
    const euroApesos   = 378.04
    const euroAdolares = 1.080
    const euroAreales  = 5.26
    const euroAlibras  = 0.86
    const euroAyuanes  = 7.87

    // a reales, 1 REAL = ...
    const realApesos   = 71.69
    const realAdolares = 0.21
    const realAeuros   = 0.19
    const realAlibras  = 0.16
    const realAyuanes  = 1.50

    // a libras, 1 LIBRA = ...
    const libraApesos   = 440.57
    const libraAdolares = 1.26
    const libraAeuros   = 1.17
    const libraAreales  = 6.13
    const libraAyuanes  = 9.17

    // a yuanes, 1 YUAN = ...
    const yuanApesos    = 48.04
    const yuanAdolares  = 0.14 
    const yuanAeuros   = 0.13
    const yuanAreales  = 0.67
    const yuanAlibras  = 0.11

    let resultado = 0

    /* ------------- PESO COMO ORIGEN -------------*/
    // peso a dolar
    if (opcion_pago == "arg" && opcion_recibo == "usa"){
         resultado  = origen*pesoAdolares
    } 

    // peso a euro
    else if (opcion_pago == "arg" && opcion_recibo == "euro"){
        resultado  = origen*pesoAeuros
    }

    // peso a real
    else if (opcion_pago == "arg" && opcion_recibo == "br"){
        resultado  = origen*pesoAreales
    }

    // peso a libra
    else if (opcion_pago == "arg" && opcion_recibo == "gb"){
        resultado  = origen*pesoAlibras
    }

    // peso a yuanes
    else if (opcion_pago == "arg" && opcion_recibo == "yuan"){
        resultado  = origen*pesoAyuanes
    }
    /* ------------- DOLAR COMO ORIGEN -------------*/
    // dolar a peso
    if (opcion_pago == "usa" && opcion_recibo == "arg"){
        resultado  = origen*dolarApesos
    } 

    // dolar a euro
    else if (opcion_pago == "usa" && opcion_recibo == "euro"){
        resultado  = origen*dolarAeuros
    }

    // dolar a real
    else if (opcion_pago == "usa" && opcion_recibo == "br"){
        resultado  = origen*dolarAreales
    }

    // dolar a libra
    else if (opcion_pago == "usa" && opcion_recibo == "gb"){
        resultado  = origen*dolarAlibras
    }

    // dolar a yuanes
    else if (opcion_pago == "usa" && opcion_recibo == "yuan"){
        resultado  = origen*dolarAyuanes
    }

    /* ------------- EURO COMO ORIGEN -------------*/
    // euro a peso
    if (opcion_pago == "euro" && opcion_recibo == "arg"){
        resultado  = origen*euroApesos
    } 

    // euro a dolar
    else if (opcion_pago == "euro" && opcion_recibo == "usa"){
        resultado = origen*euroAdolares
    }

    // euro a real
    else if (opcion_pago == "euro" && opcion_recibo == "br"){
        resultado  = origen*euroAreales
    }

    // euro a libra
    else if (opcion_pago == "euro" && opcion_recibo == "gb"){
        resultado  = origen*euroAlibras
    }

    // euro a yuanes
    else if (opcion_pago == "euro" && opcion_recibo == "yuan"){
        resultado  = origen*euroAyuanes
    }

    /* ------------- REAL COMO ORIGEN -------------*/
    // real a peso
    if (opcion_pago == "br" && opcion_recibo == "arg"){
        resultado  = origen*realApesos
    } 

    // real a dolar
    else if (opcion_pago == "br" && opcion_recibo == "usa"){
        resultado  = origen*realAdolares
    }

    // real a euro
    else if (opcion_pago == "br" && opcion_recibo == "euro"){
        resultado  = origen*realAeuros
    }

    // real a libra
    else if (opcion_pago == "br" && opcion_recibo == "gb"){
        resultado  = origen*realAlibras
    }

    // real a libra
    else if (opcion_pago == "br" && opcion_recibo == "yuan"){
        resultado  = origen*realAyuanes
    }

    /* ------------- LIBRA COMO ORIGEN -------------*/
    // libra a peso
    if (opcion_pago == "gb" && opcion_recibo == "arg"){
        resultado  = origen*libraApesos
    } 

    // libra a dolar
    else if (opcion_pago == "gb" && opcion_recibo == "usa"){
        resultado  = origen*libraAdolares
    }

    // libra a euro
    else if (opcion_pago == "gb" && opcion_recibo == "euro"){
        resultado  = origen*libraAeuros
    }

    // libra a real
    else if (opcion_pago == "gb" && opcion_recibo == "br"){
        resultado  = origen*libraAreales
    }

    // libra a yuan
    else if (opcion_pago == "gb" && opcion_recibo == "yuan"){
        resultado  = origen*libraAyuanes
    }

    /* ------------- YUAN COMO ORIGEN -------------*/
    // yuan a peso
    if (opcion_pago == "yuan" && opcion_recibo == "arg"){
        resultado  = origen*yuanApesos
    } 

    // yuan a dolar
    else if (opcion_pago == "yuan" && opcion_recibo == "usa"){
        resultado  = origen*yuanAdolares
    }

    // yuan a euro
    else if (opcion_pago == "yuan" && opcion_recibo == "euro"){
        resultado  = origen*yuanAeuros
    }

    // yuan a real
    else if (opcion_pago == "yuan" && opcion_recibo == "br"){
        resultado  = origen*yuanAreales
    }

    // yuan a libra
    else if (opcion_pago == "yuan" && opcion_recibo == "gb"){
        resultado  = origen*yuanAlibras
    }

    else if(opcion_pago == opcion_recibo){
        resultado = origen*1
    }


    document.getElementById("convertido").value = resultado
}



// cambiar imagen
function cambiarImagen1(){
    let opcion = document.getElementById("option1").value
    let imagen = document.getElementById("imagen1")

    if (opcion === "arg"){
        imagen.src  = "/Dashboard/assets/ARS.png"
        imagen.alt = "arg";
    }
    else if(opcion == "usa"){
        imagen.src  = "/Dashboard/assets/USD.png"
        imagen.alt = "usa";
    }

    else if(opcion == "euro"){
        imagen.src  = "/Dashboard/assets/EUR.png"
        imagen.alt = "euro";
    }
    else if(opcion == "br"){
        imagen.src  = "/Dashboard/assets/BRL.png"
        imagen.alt = "br";
    }
    else if(opcion == "gb"){
        imagen.src  = "/Dashboard/assets/GBP.png"
        imagen.alt = "gb";
    }
    else if(opcion == "yuan"){
        imagen.src  = "/Dashboard/assets/CNY.png"
        imagen.alt = "yuan";
    }
}

function cambiarImagen2(){
    let opcion = document.getElementById("option2").value
    let imagen = document.getElementById("imagen2")

    if (opcion === "arg"){
        imagen.src  = "/Dashboard/assets/ARS.png"
        imagen.alt = "arg";
    }
    else if(opcion == "usa"){
        imagen.src  = "/Dashboard/assets/USD.png"
        imagen.alt = "usa";
    }

    else if(opcion == "euro"){
        imagen.src  = "/Dashboard/assets/EUR.png"
        imagen.alt = "euro";
    }
    else if(opcion == "br"){
        imagen.src  = "/Dashboard/assets/BRL.png"
        imagen.alt = "br";
    }
    else if(opcion == "gb"){
        imagen.src  = "/Dashboard/assets/GBP.png"
        imagen.alt = "gb";
    }
    else if(opcion == "yuan"){
        imagen.src  = "/Dashboard/assets/CNY.png"
        imagen.alt = "yuan";
    }
}