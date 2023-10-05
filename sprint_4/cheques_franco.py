import argparse
from datetime import datetime
import csv
import os
import time

def fecha_formato_correcto( fecha : str ) -> bool:
    """ Verifica si la fecha está en el formato 'AAAA-MM-DD' """

    # Preguntamos si la fecha tiene algo
    if fecha == "":
        return True
    
    # Intentamos pasar la fecha a un objeto datetime, si no se puede esta mal el formato
    try:
        datetime.strptime(fecha, '%Y-%m-%d').timestamp()
        return True
    except ValueError:
        return False
    
def verifica_parametros( args : argparse.ArgumentParser ) -> argparse.Namespace:
    """ 
    Verifica que los parametros sean correctos necesitas: 

    archivo : path del archivo -> Lo devuelve formateado a ruta absoluta.
    dni : Numero de 8 digitos.
    fecha : AAAA-MM-DD.
    fecha_final : AAAA-MM-DD.

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
    
    # Vemos si hay fechas
    if not fecha_formato_correcto(args.fecha) or not fecha_formato_correcto(args.fecha_final):
        print("Las fechas estan en un foramto incorrecto. Recuerda AAAA-MM-DD si no quieres fechas, no coloques nada")
        exit(1)

    # Pasamos a una ruta absoluta
    args.archivo = os.path.abspath(args.archivo)

    return args

def filtro_fechas(fecha_inicio : str , fecha_final : str , fecha_evaluar : str ) -> bool:
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
    if not fecha_formato_correcto(fecha_inicio) or not fecha_formato_correcto(fecha_final) or not fecha_formato_correcto(fecha_evaluar):
        print("Las fechas el el CSV tienen que estar en AAAA-MM-DD")
        exit(1)

    resultado = False
    # Si esta en el rango ok
    if fecha_inicio == "" or fecha_evaluar >= fecha_inicio:
        if fecha_final == "" or fecha_evaluar <= fecha_final:
            resultado = True

    return resultado

    # Variable para guardar el resultado

def formato_correcto(fila, NroCheque = {}):
    """ Verifica que todos los tipos de datos en el csv sean correctos, si faltan o no lo son, da false"""
    try:

        # Verificamos que el numero de cheque no este repetido
        if NroCheque.get(fila[0], False):
            print("Formato -> Numero de Cheque repetido ", end="")
            return False            
        NroCheque[fila[0]] = True
        
        # Verificamos que el codigo de banco este entre 1 y 100
        if not int(fila[1]) >= 1 or not int(fila[1]) <= 100:
            print("Formato -> Banco ", end="")
            return False
        
        # Verificamos que el codigo Scurusal este entre 1 y 100
        if not int(fila[2]) >= 1 or not int(fila[2]) <= 300:
            print("Formato -> Codigo ", end="")
            return False

        int(fila[3]) # NumeroCuentaOrigen
        int(fila[4]) # NumeroCuentaDestino
        float(fila[5]) # valor

        # Verificamos si son fechas en el formato correcto
        datetime.strptime(fila[6], '%Y-%m-%d')
        datetime.strptime(fila[7], '%Y-%m-%d')

        # Verificamos si el DNI es un entero de 8 dígitos
        if len(fila[8]) != 8 or not fila[8].isdigit():
            print("Formato -> DNI ", end="")
            return False

        # Verificamos si los valores de estado y tipo son correctos
        if fila[9] not in ["PENDIENTE", "APROBADO", "RECHAZADO"]:
            print("Formato -> Estado ", end="")
            return False
        if fila[10] not in ["EMITIDO", "DEPOSITADO"]:
            print("Formato -> Tipo ", end="")
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



a = time.time()
for i in range(1):
    main()
print(time.time() - a)