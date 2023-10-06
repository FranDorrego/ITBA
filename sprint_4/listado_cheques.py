import argparse
from datetime import datetime
from os import system as sys
import csv
import os
import time

def fecha_formato( fecha : str | int) -> str:
    """
    Convierte diversos formatos de fecha a 'AAAA-MM-DD:HH:MM:SS'

    formatos adminitos:
    - aaaa-mm-dd
    - aaaa-mm-dd:h
    - aaaa-mm-dd:h:m
    - aaaa-mm-dd:h:m:s
    - time_stamp

    Resultados:
    - str -> convirtio la fecha
    - "" -> esta vacia
    - "Error" -> si no esta en formato correcto
    """

    # Preguntamos si la fecha tiene algo
    if fecha == "":
        return ""
    
    formatos = [
        '%Y-%m-%d',
        '%Y-%m-%d:%H',
        '%Y-%m-%d:%H:%M',
        '%Y-%m-%d:%H:%M:%S'
    ]

    # Si la fecha es un timestamp
    try:
        fecha = datetime.utcfromtimestamp(int(fecha)).strftime('%Y-%m-%d:%H:%M:%S')
        return fecha
    except:
        pass 

    # Si la fecha coincide con alguno de los formatos establecidos
    for formato in formatos:
        try:
            fecha_dt = datetime.strptime(fecha, formato)
            return fecha_dt.strftime('%Y-%m-%d:%H:%M:%S')
        except ValueError:
            continue 

    return "Error"

def formato_rango_fechas( fecha ) -> (str, str):
    """
    El formato de la fecha es AAAA-MM-DD:AAAA-MM-DD, este metodo lo divide en dos variables distintas
    Si no esta en este formato, frena la ejecucion del programa.
    """
    # Si la fecha esta vacia, devolvemos una tupla vacia
    if fecha == "":
        return ("","")
    
    # Intentamos separar las dos fechas
    try:
        fechas = str(fecha).split(":")
        return (fechas[0], fechas[1])
    except:
        print("El rango de fechas tiene que estar en AAAA-MM-DD:AAAA-MM-DD")
        exit(1)

def verifica_parametros( args : argparse.Namespace ) -> argparse.Namespace:
    """ 
    Verifica que los parametros sean correctos, necesitas: 

    archivo : path del archivo -> Lo devuelve formateado a ruta absoluta.
    dni : Numero de 8 digitos.
    fecha : AAAA-MM-DD:AAAA-MM-DD -> lo pasa a dos variables, fecha y fecha_final

    -> Corta la ejecucion si no se cumplen los parametros.
    -> Corta la ejecucion si no existe el CSV
    """

    # Vemos si existe el archivo base
    if not os.path.exists(args.archivo):
        print("El archivo no exite. Solucion -> Podes pasar la ruta absoluta")
        exit(1)

    # Vemos si el DNI tiene entre 7 a 8 digitos y no es un numero negativo
    if args.dni < 1000000 or args.dni > 99999999:
        print("El DNI tiene que ser solo números y de 8 dígitos")
        exit(1)
    
    # Parceamos las fechas
    fecha_inicio, fecha_fin = formato_rango_fechas(args.fecha)
    args.fecha = fecha_formato(fecha_inicio)
    args.fecha_final = fecha_formato(fecha_fin)

    # Verificamos si la fecha dio error
    if args.fecha == "Error" or args.fecha_final == "Error":
        print("Las fechas estan en un foramto incorrecto. Recuerda AAAA-MM-DD:AAAA-MM-DD si no quieres fechas, no coloques nada")
        exit(1)

    # Pasamos a una ruta absoluta
    args.archivo = os.path.abspath(args.archivo)

    return args

def filtro_fechas(fecha_inicio : str , fecha_final : str , fecha_evaluar : str | int ) -> bool:
    """
    Formato de fechas = AAAA-MM-DD
    True = esta dentro de las fechas. 
    
    fecha_final : "" -> No se tiene en cuenta
    fecha_inicio : "" -> No se tiene en cuenta
    fecha_final y fecha_final : "" -> True
    Mal formato de fechas -> Corta la ejecucion y muestra por pantalla
    """

    # Si la fecha inicio y final estan en 0, devuelvo true
    if fecha_inicio == "" and fecha_final == "":
        return True
    
    # Parseo la fecha si es necesario
    fecha_evaluar = fecha_formato(fecha_evaluar)

    resultado = False
    # Si esta en el rango ok
    if fecha_inicio == "" or fecha_evaluar >= fecha_inicio:
        if fecha_final == "" or fecha_evaluar <= fecha_final:
            resultado = True

    return resultado

    # Variable para guardar el resultado

def formato_correcto( fila : list , NroCheque : dict) -> bool:
    """ 
    fila = a una fila del CSV
    NroCheque = a un dict con todos los numero de cheque como key y value en true

    1- Verifica que todos los tipos de datos en el csv sean correctos, si faltan o no lo son, da false y realiza un print con el dato a ver
    2- Verifica que el numero de cheque no este repetido
    """
    try:
        # Verificamos que el numero de cheque no este repetido
        if NroCheque.get(fila[_NUMERO_CHEQUE], False):
            print(f"Formato -> Numero de Cheque repetido {fila[0]} | ", end="")
            return False            
        
        # Verificamos que el codigo de banco este entre 1 y 100
        if not int(fila[_CODIGO_BANCO]) >= 1 or not int(fila[_CODIGO_BANCO]) <= 100:
            print(f"Formato -> Banco {fila[_CODIGO_BANCO]} -> Tiene que estar entre 1 y 100 | ", end="")
            return False
        
        # Verificamos que el codigo Scurusal este entre 1 y 300
        if not int(fila[_CODIGO_SUCURSAL]) >= 1 or not int(fila[_CODIGO_SUCURSAL]) <= 300:
            print(f"Formato -> Codigo {fila[_CODIGO_SUCURSAL]} -> Tiene que estar entre 1 y 300 | ", end="")
            return False

        int(fila[_CUENTA_ORIGEN]) # NumeroCuentaOrigen
        int(fila[_CUENTA_DESTINO]) # NumeroCuentaDestino
        float(fila[_VALOR]) # valor

        # Verificamos si son fechas en el formato correcto
        fila[_FECHA_ORIGEN] = fecha_formato(fila[_FECHA_ORIGEN])
        fila[_FECHA_PAGO] = fecha_formato(fila[_FECHA_PAGO])

        if fila[_FECHA_ORIGEN] == "Error" or fila[_FECHA_PAGO] == "Error":
            print("Formato -> Fecha -> Verifica fecha_formato | ", end="")
            return False

        # Verificamos si el DNI es un entero entre 7 a 8 dígitos
        if ( len(fila[_DNI]) != 7 and len(fila[_DNI]) != 8 ) or not fila[_DNI].isdigit():
            print(f"Formato -> DNI  {fila[_DNI]} -> tiene que entre 7 y 8 digitos | ", end="")
            return False

        # Verificamos si los valores de estado y tipo son correctos
        fila[_ESTADO] = str(fila[_ESTADO]).upper()
        fila[_TIPO] = str(fila[_TIPO]).upper()
        if fila[_ESTADO] not in ["PENDIENTE", "APROBADO", "RECHAZADO"]:
            print("Formato -> Estado | ", end="")
            return False
        if fila[_TIPO] not in ["EMITIDO", "DEPOSITADO"]:
            print("Formato -> Tipo | ", end="")
            return False

    except:
        return False

    return True
    
def filtra_data( args : argparse.ArgumentParser ) -> list:
    """
    Filtra toda la informacion que le aclares por args 

    archivo : path absoluto del archivo a leer.
    dni : Numero de 8 digitos.
    tipo : Tiene que tener los mismos datos del csv.
    estado : Tiene que tener los mismos datos del csv | "".
    fecha : AAAA-MM-DD | "".
    fecha_final : AAAA-MM-DD | "".

    -> Si el csv esta vacio, devuelve []
    -> Una lista de los cheques filtrados
    """
    numero_cheque = {}
    cheques = []
    # Abre el archivo CSV
    with open(args.archivo, 'r') as archivo:

        # Si esta vacio el archivo
        if archivo == "":
            return []

        # leo el archivo y lo delimito
        lector = csv.reader(archivo, delimiter=',')

        # Procesa cada fila del archivo
        for fila in lector:

            # Si la lista de cheques está vacía, significa que falta el encabezado
            if cheques == []:
                # Pregunto si el csv tiene mebrete o no, si no lo tiene agrego a cheques el predefinido
                if fila == _MEMBRETE_TITULOS:
                    cheques.append(fila)
                    continue
                else:
                    cheques.append(_MEMBRETE_TITULOS)

            # Si la fila esta vacia
            if fila == []:
                continue
            # Formato correcto de datos
            if not formato_correcto(fila, numero_cheque):
                print("Advertencia: El formato del CSV es incorrecto. No se tienen en cuenta estos datos.\n", fila)
                continue
            # Fecha
            if not filtro_fechas(args.fecha, args.fecha_final, fila[_FECHA_PAGO]):
                continue
            # DNI
            if int(fila[_DNI]) != args.dni:
                continue
            # Tipo de Cheque
            if args.tipo != "" and fila[_TIPO] != args.tipo:
                continue
            # Estado
            if args.estado != "" and fila[_ESTADO] != args.estado:
                continue
            # Añadir a la lista de cheques
            numero_cheque[fila[_NUMERO_CHEQUE]] = True
            cheques.append(fila)

    return cheques

def exporta( args : argparse.ArgumentParser , datos_filtrados : list):
    """ Exporta todos los datos, ya sea por pantalla o en un CSV"""

    # Mostramos por pantalla
    if args.salida == "PANTALLA":
        for fila in datos_filtrados:
            print(" | ".join(map(str, fila)))
            
    else:
    # Exportamos en un CSV
        with open(f"{ args.dni }_{ int( time.time() ) }.csv", mode="w", newline='\n') as c:

            writer = csv.writer(c, delimiter=",", lineterminator='\n')

            for fila in datos_filtrados:
                writer.writerow(fila)

def main():
    """Funcion principal que toma los datos por comando"""

    # Intanciamos un objeto para los parametros
    parser = argparse.ArgumentParser()

    # Argumentos posicionales
    parser.add_argument("archivo", type=str, help="Nombre del archivo de donde se sacan los datos. Ejemplo: cheques.csv")
    parser.add_argument("dni", type=int, help="DNI para hacer la consulta. Tiene que tener 8 digitos. Ejemplo: 12345678")
    parser.add_argument("salida", type=str, help="CSV O PANTALLA", choices=["CSV", "PANTALLA"])
    parser.add_argument("tipo", type=str, help="EMITIDO o DEPOSITADO", choices=["EMITIDO", "DEPOSITADO"])

    # Argumentos opcionales
    parser.add_argument("estado", type=str, default="", nargs="?", help="PENDIENTE | APROBADO | RECHAZADO | (opcional)", choices=["PENDIENTE", "APROBADO", "RECHAZADO", ""])
    parser.add_argument("--fecha", "-fc", type=str, default="", nargs="?", help="Fecha comienzo, debe tener formato de AAAA-MM-DD (opcional)")

    # Verificamos los datos y convetimos a los datos correctos
    args = verifica_parametros( args= parser.parse_args())

    # Tratamos los datos filtrados
    datos_filtrados = filtra_data( args= args )

    # Exportamos los datos
    exporta(args= args, datos_filtrados= datos_filtrados)


# Definimos variables asignando el lugar de la columna en el CSV
_NUMERO_CHEQUE = 0
_CODIGO_BANCO = 1
_CODIGO_SUCURSAL = 2
_CUENTA_ORIGEN = 3
_CUENTA_DESTINO = 4
_VALOR = 5
_FECHA_ORIGEN = 6
_FECHA_PAGO = 7
_DNI = 8
_ESTADO = 9
_TIPO = 10

# Definimos el formato de los titulos
_MEMBRETE_TITULOS = ["nroCheque","codigoBanco","codigoSucursal","nroCuentaOrigen","nroCuentaDestino","valor","fechaOrigen","fechaPago","dni","estado","tipo"]

main()
