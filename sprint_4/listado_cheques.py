import csv
import datetime as dt
from os import system as sys


class Cheque:
    def __init__(self, nroCheque, codigoBanco, codigoSucursal, nroCuentaOrigen, nroCuentaDestino, valor, fechaOrigen, fechaPago, dni, estado, requisitosEspecificos):
        self.nroCheque = nroCheque
        self.codigoBanco = codigoBanco
        self.codigoSucursal = codigoSucursal
        self.nroCuentaOrigen = nroCuentaOrigen
        self.nroCuentaDestino = nroCuentaDestino
        self.valor = float(valor)
        self.fechaOrigen = fechaOrigen
        self.fechaPago = fechaPago
        self.dni = dni
        self.estado = estado
        self.requisitosEspecificos = requisitosEspecificos

    def datos(self):
        return [self.nroCheque, self.codigoBanco, self.codigoSucursal, self.nroCuentaOrigen, 
                self.nroCuentaDestino, self.valor, self.fechaOrigen, self.fechaPago, 
                self.dni, self.estado, self.requisitosEspecificos]
        
def ultimoNumeroCheque(): # LEE EL ARCHIVO Y GUARDA EL ULTIMO NUMERO DE CHEQUE
    ultimoNumeroDeCheque = 0 # CONTADOR PARA CALCULAR EL PROXIMO NUMERO DE CHEQUE
    with open("cheques.csv") as c:
        reader = csv.reader(c, delimiter="\t")
        encabezado = next(reader)
        for row in reader:
            ultimoNumeroDeCheque += 1
    return ultimoNumeroDeCheque 

def calcularProximoNumeroCheque(ultimoNumeroDeCheque):
    proximoNumeroCheque = str(ultimoNumeroDeCheque + 1)
    if len(proximoNumeroCheque) == 1:
        return "0000" + proximoNumeroCheque
    elif len(proximoNumeroCheque) == 2:
        return "000" + proximoNumeroCheque
    elif len(proximoNumeroCheque) == 3:
        return "00" + proximoNumeroCheque
    elif len(proximoNumeroCheque) == 4:
        return "0" + proximoNumeroCheque
    elif len(proximoNumeroCheque) == 5:
        return proximoNumeroCheque
    return proximoNumeroCheque

        
# def nuevoCheque(ultimoNumeroDeCheque):
#     nroCheque = calcularProximoNumeroCheque(ultimoNumeroDeCheque)
#     codigoBanco = input("Codigo de Banco: ")
#     codigoSucursal = input("Codigo de Sucursal: ")
#     nroCuentaOrigen = input("Numero de cuenta de origen: ")
#     nroCuentaDestino = input("Numero de cuenta de destino: ")
#     valor = input("Importe: ")
#     fechaActual = dt.datetime.now()
#     fechaOrigen = fechaActual
#     # Sumar 5 días
#     diasASumar = dt.timedelta(days=5)
#     fechaDespuesDe5Dias = fechaActual + diasASumar
#     fechaPago = fechaDespuesDe5Dias
#     dni = input("DNI: ")
#     estado = "PENDIENTE"
#     requisitosEspecificos = input("Requisitos especificos: ")
#     cheque = Cheque(nroCheque, codigoBanco, codigoSucursal, nroCuentaOrigen, nroCuentaDestino, valor, fechaOrigen, fechaPago, dni, estado, requisitosEspecificos)
#     ultimoNumeroDeCheque = ultimoNumeroDeCheque + 1
#     print("Se creo un nuevo cheque")
#     return cheque

def consultaPorDNI(dni):
    cheques = []
    with open("cheques.csv") as c:
        reader = csv.reader(c, delimiter="\t")
        encabezado = next(reader)
        cheques.append(encabezado)
        for row in reader:
            if(row[8] == dni):
                cheques.append(row)
    if len(cheques) == 1:
        return "No se encontraron cheques asociados a este DNI"
    else:
        return cheques
     
def menuPantallaOCSV():
    sys("cls")
    while True:
        try:
            menu = int(input( '1 - PANTALLA \n'
                              '2 - CSV\n'))
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

# def escribirArchivo(cheque):
#     with open("cheques.csv", mode="a", newline='\n') as c:
#         writer = csv.writer(c, delimiter="\t", lineterminator='\n')
#         writer.writerow(cheque.datos())
#         print("ejecuto")

def generarCSV(datos, dni):
    now = dt.datetime.now()
    nowString = now.strftime("%Y%m%d%H%M%S")
    with open(f"{dni}_{nowString}.csv", mode="w", newline='\n') as c:
        writer = csv.writer(c, delimiter="\t", lineterminator='\n')
        for fila in datos:
            writer.writerow(fila)
        print("ejecuto")

def mostrarPantalla(datos):
    for dato in datos:
        print(dato)

def main():

    ultimoNumeroDeCheque = ultimoNumeroCheque()
    sys("cls")
    menu = int(input( '1 - Crear nuevo cheque \n'
        '2 - DNI para realizar la consulta\n'
        '3 - Opcion 3\n'
        '0 - Salir\n'
        ))

    while menu != 0:
        sys("cls")
        
        if menu == 1:
            print("")
            # print(nuevoCheque(ultimoNumeroDeCheque).datos())
        elif menu == 2:
            dni = input("Ingrese un DNI para realizar la consulta: ")
            datos = consultaPorDNI(dni)
            if datos == "No se encontraron cheques asociados a este DNI":
                print(datos)
            else:
                print("Se encotraron cheque/es asociados a este DNI")
                print("Seleccione una opcion")
                opcion = menuPantallaOCSV()
                if opcion == 1:
                    print("OPCION PANTALLA")
                    mostrarPantalla(datos)
                elif opcion == 2:
                    print("OPCION CSV")
                    generarCSV(datos, dni)
            print("*************************")
            
        elif menu == 3:
            sys("cls")
            
            
        elif menu == 4:
            sys("cls")
            
            
        elif menu == 5:
            sys("cls")
            
            
        else:
            sys('cls')
            print("*************************")
            print("Digite un numero valido")
            print("*************************")
            
        menu = int(input( '1 - Crear nuevo cheque \n'
        '2 - DNI para realizar la consulta\n'
        '3 - Opcion 3\n'
        '0 - Salir\n'
    ))
        
main()