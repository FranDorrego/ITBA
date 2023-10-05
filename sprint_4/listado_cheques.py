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
    
def verifica_parametros( args : argparse.ArgumentParser ) -> argparse.Namespace:
    """ 
    Verifica que los parametros sean correctos necesitas: 

    archivo : path del archivo -> Lo devuelve formateado a ruta absoluta.
    dni : Numero de 8 digitos.
    fecha : AAAA-MM-DD -> AAAA-MM-DD:HH:MM:SS
    fecha_final : AAAA-MM-DD -> AAAA-MM-DD:HH:MM:SS

    -> Corta la ejecucion si no se cumplen los parametros.
    """

    # Vemos si existe el archivo base
    if not os.path.exists(args.archivo):
        print("El archivo no exite. Solucion -> Podes pasar la ruta absoluta")
        exit(1)

    # Vemos si el DNI tiene 8 digitos y no es un numero negativo
    if args.dni < 10000000 or args.dni > 99999999:
        print("El DNI tiene que ser solo números y de 8 dígitos")
        exit(1)
    
    # Parceamos las fechas
    args.fecha = fecha_formato(args.fecha)
    args.fecha_final = fecha_formato(args.fecha_final)

    # Verificamos si la fecha dio error
    if args.fecha == "Error" or args.fecha_final == "Error":
        print("Las fechas estan en un foramto incorrecto. Recuerda AAAA-MM-DD si no quieres fechas, no coloques nada")
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

def formato_correcto(fila):
    """ Verifica que todos los tipos de datos en el csv sean correctos, si faltan o no lo son, da false y realiza un print con el dato a ver"""
    global NroCheque
    try:
        # Verificamos que el numero de cheque no este repetido
        if NroCheque.get(fila[0], False):
            print(f"Formato -> Numero de Cheque repetido {fila[0]} | ", end="")
            return False            
        NroCheque[fila[0]] = True
        
        # Verificamos que el codigo de banco este entre 1 y 100
        if not int(fila[1]) >= 1 or not int(fila[1]) <= 100:
            print(f"Formato -> Banco {fila[1]} -> Tiene que estar entre 1 y 100 | ", end="")
            return False
        
        # Verificamos que el codigo Scurusal este entre 1 y 100
        if not int(fila[2]) >= 1 or not int(fila[2]) <= 300:
            print(f"Formato -> Codigo {fila[2]} -> Tiene que estar entre 1 y 300 | ", end="")
            return False

        int(fila[3]) # NumeroCuentaOrigen
        int(fila[4]) # NumeroCuentaDestino
        float(fila[5]) # valor

        # Verificamos si son fechas en el formato correcto
        fila[6] = fecha_formato(fila[6])
        fila[7] = fecha_formato(fila[7])

        if fila[6] == "Error" or fila[7] == "Error":
            print("Formato -> Fecha -> Verifica fecha_formato | ", end="")
            return False

        # Verificamos si el DNI es un entero de 8 dígitos
        if len(fila[8]) != 8 or not fila[8].isdigit():
            print(f"Formato -> DNI  {fila[8]} -> tiene que tener 8 digitos | ", end="")
            return False

        # Verificamos si los valores de estado y tipo son correctos
        fila[9] = str(fila[9]).upper()
        fila[10] = str(fila[10]).upper()
        if fila[9] not in ["PENDIENTE", "APROBADO", "RECHAZADO"]:
            print("Formato -> Estado | ", end="")
            return False
        if fila[10] not in ["EMITIDO", "DEPOSITADO"]:
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
    global NroCheque
    NroCheque = {}
    cheques = []
    membrete_titulos = ["nroCheque","codigoBanco","codigoSucursal","nroCuentaOrigen","nroCuentaDestino","valor","fechaOrigen","fechaPago","dni","estado","tipo"]

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
                if fila == membrete_titulos:
                    cheques.append(fila)
                    continue
                else:
                    cheques.append(membrete_titulos)

            # Si la fila esta vacia
            if fila == []:
                continue
            # Formato correcto de datos
            if not formato_correcto(fila):
                print("Advertencia: El formato del CSV es incorrecto. No se tienen en cuenta los datos con formato incorrecto.\n", fila)
                continue
            # Fecha
            if not filtro_fechas(args.fecha, args.fecha_final, fila[6]):
                continue
            # DNI
            if int(fila[8]) != args.dni:
                continue
            # Tipo de Cheque
            if args.tipo != "" and fila[10] != args.tipo:
                continue
            # Estado
            if args.estado != "" and fila[9] != args.estado:
                continue
            # Añadir a la lista de cheques
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

            print("ejecuto")

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
    parser.add_argument("--estado", "-e", type=str, default="", help="PENDIENTE | APROBADO | RECHAZADO | (opcional)", choices=["PENDIENTE", "APROBADO", "RECHAZADO"])
    parser.add_argument("--fecha", "-fc", type=str, default="", help="Fecha comienzo, debe tener formato de AAAA-MM-DD (opcional)")
    parser.add_argument("--fecha_final", "-ff", type=str, default="", help="Fecha final, debe tener formato de AAAA-MM-DD (opcional)")

    # Verificamos los datos y convetimos a los datos correctos
    args = verifica_parametros( args= parser.parse_args())

    # Tratamos los datos filtrados
    datos_filtrados = filtra_data( args= args )

    # Exportamos los datos
    exporta(args= args, datos_filtrados= datos_filtrados)



main()
