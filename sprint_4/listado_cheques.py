import csv
import datetime as dt
from os import system as sys
import argparse
        
# LEE EL ARCHIVO Y A SU VEZ SE ENCARGA DE BUSCAR LOS DNI QUE COINCIDAN, LOS QUE ENCUENTRA LOS AGREGA A LA LISTA Y LOS RETORNA FILTRADOS
def consultaPorDNI(dni):
    cheques = []
    with open("cheques.csv") as c:
        reader = csv.reader(c, delimiter=",")
        encabezado = next(reader)
        cheques.append(encabezado)
        for row in reader:
            if(row[8] == dni):
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
        writer = csv.writer(c, delimiter=",", lineterminator='\n')
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
def filtrarPorEmitidoODepositado(datos, opcion):
    datosFiltrados = [datos[0]]
    for dato in datos:
        if dato[10] == opcion:
            datosFiltrados.append(dato)
    return datosFiltrados

# POSICION 10 = TIPO (DEPOSITADO O EMITIDO)
# POSICION 9 = ESTADO (PENDIENTE, APROBADO O RECHAZADO)
# EL TIPO VA A SER UN INT DE ACUERDO A LO QUE SE HAYA INGRESADO
def filtrado(datos, opcion, tipo):
    datosFiltrados = [datos[0]]
    for dato in datos:
        if dato[tipo] == opcion:
            datosFiltrados.append(dato)
    return datosFiltrados

# LAS FECHAS TIENE QUE ESTAR COMO AAAA-MM-DD
def filtrarPorRangoDeFechas(datos, fechaInicio, fechaFin):
    datosFiltrados = [datos[0]]
    for dato in datos:
        if dato[6] <= fechaInicio and dato[7] >= fechaFin:
            print(dato)
            datosFiltrados.append(dato)
    return datosFiltrados

def main2():
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
            datosFiltradosEmitidoODepositado = filtrado(datos, "EMITIDO", 10)
        else:
            print("OPCION DEPOSITADO")
            datosFiltradosEmitidoODepositado = filtrado(datos, "DEPOSITADO", 10)

            
        opcionEstadoCheque = menuEstadoCheque()
        if opcionEstadoCheque == 1:
            print("OPCION PENDIENTE")
            datosFiltradosPorEstado = filtrado(datosFiltradosEmitidoODepositado, "PENDIENTE", 9)
        elif opcionEstadoCheque == 2:
            print("OPCION APROBADO")
            datosFiltradosPorEstado = filtrado(datosFiltradosEmitidoODepositado, "APROBADO", 9)
        elif opcionEstadoCheque == 3:
            print("OPCION RECHAZADO")
            datosFiltradosPorEstado = filtrado(datosFiltradosEmitidoODepositado, "RECHAZADO", 9)
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


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("archivo", type=str, default="cheques.csv", help="Nombre del archivo", nargs='?')
    parser.add_argument("dni", type=str, help="DNI para hacer la consulta")
    parser.add_argument("salida", type=str, help="CSV O PANTALLA", choices=["CSV", "PANTALLA"])
    parser.add_argument("tipo", type=str, help="EMITIDO o DEPOSITADO", choices=["EMITIDO", "DEPOSITADO"])
    parser.add_argument("estado", type=str, default="SIN ESTADO", help="PENDIENTE o APROBADO o RECHAZADO (opcional)", 
                        nargs='?', choices=["PENDIENTE", "APROBADO", "RECHAZADO", "SIN ESTADO"])
    parser.add_argument("--fecha", "-f", type=str, default="Rango de fechas (opcional)", help="Rango de fechas, debe tener formato de AAAA-MM-DD (opcional)", 
                        nargs='?')
    args = parser.parse_args()
    