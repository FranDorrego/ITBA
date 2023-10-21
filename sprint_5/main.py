from cliente.Black import *
from cliente.Gold import *
from cliente.Classic import *
from transaccion.Transaccion import Transaccion
import json



# Declaramos 3 Clientes
# cliente_classic = Classic(1,"Manuel", "Arturias", "12345678", [])
# cliente_gold = Gold(1,"juana", "alverto", "147852", [] )
# cliente_black = Black(1,"Lute", "Lenovo", "369258", [])

# # Imprimimos esos 3 Clientes
# print(cliente_classic)
# print(cliente_gold)
# print(cliente_black)

# Realizamos operaciones con uno de ellos

""" 
    Aun falta por realizar 
"""

# GENERACION DE HTML

def generar_columnas(clientes):
    contenido_columnas = ""
    for cliente in clientes:
        contenido_columnas = contenido_columnas + f"""
            <tr>
                <th>{cliente.numeroCliente}</th>
                <th>{cliente.nombre}</th>
                <th>{cliente.apellido}</th>
                <th>{cliente.dni}</th>
            </tr>
        """
    return contenido_columnas
def generar_columnas_transaccion(transacciones):
    contenido_columnas = ""
    for transaccion in transacciones:
        contenido_columnas = contenido_columnas + f"""
            <tr>
                <th>{transaccion.numero}</th>
                <th>{transaccion.estado}</th>
                <th>{transaccion.tipo}</th>
                <th>{transaccion.permitidoActualParaTransccion}</th>
                <th>{transaccion.monto}</th>
                <th>{transaccion.fecha}</th>
                <th>{transaccion.cuentaNumero}</th>
            </tr>
        """
    return contenido_columnas
def generar_html(cliente):
    transacciones = cliente.get_transacciones()
    contenido = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reporte</title>
    </head>
    <body>
        <h1>Reporte del cliente</h1>
        <p>Este reporte pertenece al cliente numero: {cliente.numeroCliente} y dni: {cliente.dni}</p>
        <h2>Transacciones</h2>
        <table border=1>
            <tr>
                <th>Numero</th>
                <th>Estado</th>
                <th>Tipo</th>
                <th>Permitido Actual Para Transccion</th>
                <th>Monto</th>
                <th>Fecha</th>
                <th>Cuenta Numero</th>
            </tr>
            {generar_columnas_transaccion(transacciones)}
        </table>
    </body>
    </html>
    """

    nombre_archivo = "reporte.html"

    with open(nombre_archivo, "w") as arch:
        arch.write(contenido)
        
    print(f"Se genero el archivho {nombre_archivo}")
    return


def leer_json(nombre_archivo):
    with open(nombre_archivo, "r") as json_file:
        datos = json.load(json_file)
        
    return datos

def intanciar_clases(datos):
    transacciones = []
    for transaccion in datos["transacciones"]:
        t = Transaccion(transaccion["estado"], 
                        transaccion["tipo"], 
                        transaccion["permitidoActualParaTransccion"],
                        transaccion["monto"],
                        transaccion["fecha"],
                        transaccion["numero"],
                        transaccion["cuentaNumero"])
        transacciones.append(t)
    if datos["tipo"] == "CLASSIC":

        cliente = Classic(datos["numero"], datos["nombre"], datos["apellido"], datos["dni"], transacciones)
        return cliente
    elif datos["tipo"] == "GOLD":
        cliente = Gold(datos["numero"], datos["nombre"], datos["apellido"], datos["dni"], transacciones)
        return cliente
    elif datos["tipo"] == "BLACK":
        cliente = Black(datos["numero"], datos["nombre"], datos["apellido"], datos["dni"], transacciones)
        return cliente
    
datos = leer_json("prueba.json")
cliente = intanciar_clases(datos)
generar_html(cliente)

        