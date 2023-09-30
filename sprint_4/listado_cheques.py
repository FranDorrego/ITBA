import csv
import datetime as dt
from os import system as sys

# ESTAS DOS FUNCIONES SIRVEN PARA BUSCAR EL ULTIMO NUMERO DE CHEQUE PARA PODER AGREGAR NUEVO CHEQUES Y QUE SIGAN DE FORMA ORDENADA
# LA PRIMERA BUSCA EL ULTIMO VALOR
# def ultimoNumeroCheque(): # LEE EL ARCHIVO Y GUARDA EL ULTIMO NUMERO DE CHEQUE
#     ultimoNumeroDeCheque = 0 # CONTADOR PARA CALCULAR EL PROXIMO NUMERO DE CHEQUE
#     with open("cheques.csv") as c:
#         reader = csv.reader(c, delimiter="\t")
#         encabezado = next(reader)
#         for row in reader:
#             ultimoNumeroDeCheque += 1
#     return ultimoNumeroDeCheque 
# ESTA FUNCION SE ENCARGA DE PONER EL PROXIMO NUMERO DE CHEQUE CON EL FORMATO QUE USAMOS
# def calcularProximoNumeroCheque(ultimoNumeroDeCheque):
#     proximoNumeroCheque = str(ultimoNumeroDeCheque + 1)
#     if len(proximoNumeroCheque) == 1:
#         return "0000" + proximoNumeroCheque
#     elif len(proximoNumeroCheque) == 2:
#         return "000" + proximoNumeroCheque
#     elif len(proximoNumeroCheque) == 3:
#         return "00" + proximoNumeroCheque
#     elif len(proximoNumeroCheque) == 4:
#         return "0" + proximoNumeroCheque
#     elif len(proximoNumeroCheque) == 5:
#         return proximoNumeroCheque
#     return proximoNumeroCheque

        

# LEE EL ARCHIVO Y A SU VEZ SE ENCARGA DE BUSCAR LOS DNI QUE COINCIDAN, LOS QUE ENCUENTRA LOS AGREGA A LA LISTA Y LOS RETORNA FILTRADOS
# TENGO UNA DUDA CON ESTE, PQ NO SE SI CUANDO SE FILTRA POR DNI, TENGO Q AGREGAR TMB SI EL DNI ESTA EN ALGUN NUMERO DE CUENTA
# POR AHORA AGREGA LOS QUE ESTAN EN ALGUN NUMERO DE CUENTA
def consultaPorDNI(dni):
    cheques = []
    with open("cheques.csv") as c:
        reader = csv.reader(c, delimiter="\t")
        encabezado = next(reader)
        cheques.append(encabezado)
        for row in reader:
            if(row[8] == dni or row[3] == dni or row[4] == dni):
                cheques.append(row)
    if len(cheques) == 1:
        return "No se encontraron cheques asociados a este DNI"
    else:
        return cheques
    
# MENU PROVISIONAL PARA MENUS CON DOS OPCIONES
def menuDosOpciones(opcion1, opcion2):
    sys("cls")
    while True:
        try:
            menu = int(input( f'1 - {opcion1} \n'
                              f'2 - {opcion2}\n'))
            if menu == 1:
                sys("cls")
                return menu
            elif menu == 2:
                sys("cls")
                return menu
            else:
                sys("cls")
                print("Opción no válida. Por favor, ingresa 1 o 2.")
        except ValueError:
            sys("cls")
            print("Opción no válida. Debes ingresar un número entero (1 o 2).")
            continue
    return menu

# MENU PROVISIONAL PARA SELECCIONAR EL ESTADO DEL CHEQUE PARA EL FILTRADO
def menuEstadoCheque():
    sys("cls")
    while True:
        try:
            menu = int(input( '1 - PENDIENTE \n'
                              '2 - APROBADO \n'
                              '3 - RECHAZADO \n'
                              '4 - SIN ESTADO \n'))
            if menu == 1:
                sys("cls")
                return menu
            elif menu == 2:
                sys("cls")
                return menu
            elif menu == 3:
                sys("cls")
                return menu
            elif menu == 4:
                sys("cls")
                return menu
            else:
                sys("cls")
                print("Opción no válida. Por favor, ingresa 1 o 2.")
        except ValueError:
            sys("cls")
            print("Opción no válida. Debes ingresar un número entero (1 o 2).")
            continue
    return menu

# OPCION PARA GENERAR EL ARCHIVO CSV CON LOS DATOS DADOS
def generarCSV(datos, dni):
    now = dt.datetime.now()
    nowString = now.strftime("%Y%m%d%H%M%S")
    with open(f"{dni}_{nowString}.csv", mode="w", newline='\n') as c:
        writer = csv.writer(c, delimiter="\t", lineterminator='\n')
        for fila in datos:
            writer.writerow(fila)
        print("ejecuto")

# FUNCION PARA LA OPCION DE MOSTRAR POR PANTALLA
def mostrarPantalla(datos):
    for dato in datos:
        print(dato)

# SE ENCARGA DE BUSCAR SI EL ESTADO COINCIDO, SI LO HACE LO AGREGA EN LA LISTA FILTRADA
def filtrarPorEstado(datos, estado):
    datosFiltrados = [datos[0]]
    for dato in datos:
        if dato[9] == estado:
            datosFiltrados.append(dato)
    return datosFiltrados

# FILTRA LOS DATOS SEGUN SI SON EMITIDOS O DEPOSITADOS, TENGO DUDAS SOBRE ESTO, NO SE SI TAMBIEN TIENE QUE MOSTRAR LOS CHEQUES Q LO TENGAN EN EL CAMPO DNI
def filtrarPorEmitidoODepositado(datos, dni, opcion):
    datosFiltrados = [datos[0]]
    for dato in datos:
        if opcion == "EMITIDO":
            if dato[3] == dni:
                datosFiltrados.append(dato)
        else:
            if dato[4] == dni:
                datosFiltrados.append(dato)
    return datosFiltrados
    

def main():
    # ultimoNumeroDeCheque = ultimoNumeroCheque()



    sys("cls")
    dni = input("Ingrese un DNI para realizar la consulta: ")
    datos = consultaPorDNI(dni)
    
    if datos == "No se encontraron cheques asociados a este DNI":
        print(datos)
        
    else:
        opcionEmitidoODepositado = menuDosOpciones("EMITIDO", "DEPOSITADO")
        if opcionEmitidoODepositado == 1:
            print("OPCION EMITIDO")
            datosFiltradosEmitidoODepositado = filtrarPorEmitidoODepositado(datos, dni, "EMITIDO")
        else:
            print("OPCION DEPOSITADO")
            datosFiltradosEmitidoODepositado = filtrarPorEmitidoODepositado(datos, dni, "DEPOSITADO")

            
        opcionEstadoCheque = menuEstadoCheque()
        if opcionEstadoCheque == 1:
            print("OPCION PENDIENTE")
            datosFiltradosPorEstado = filtrarPorEstado(datosFiltradosEmitidoODepositado, "PENDIENTE")
        elif opcionEstadoCheque == 2:
            print("OPCION APROBADO")
            datosFiltradosPorEstado = filtrarPorEstado(datosFiltradosEmitidoODepositado, "APROBADO")
        elif opcionEstadoCheque == 3:
            print("OPCION RECHAZADO")
            datosFiltradosPorEstado = filtrarPorEstado(datosFiltradosEmitidoODepositado, "RECHAZADO")
        else:
            datosFiltradosPorEstado = datosFiltradosEmitidoODepositado
            
        print("Se encotraron cheque/es asociados a este DNI")
        print("Seleccione una opcion")
        opcion = menuDosOpciones("PANTALLA", "CSV")
        if opcion == 1:
            print("OPCION PANTALLA")
            mostrarPantalla(datosFiltradosPorEstado)
        else:
            print("OPCION CSV")
            generarCSV(datosFiltradosPorEstado, dni)
    print("*************************")

main()