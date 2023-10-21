from cliente.Black import *
from cliente.Gold import *
from cliente.Classic import *
import json

# Declaramos 3 Clientes
cliente_classic = Classic(1,"Manuel", "Arturias", "12345678")
cliente_gold = Gold(1,"juana", "alverto", "147852")
cliente_black = Black(1,"Lute", "Lenovo", "369258")

# Imprimimos esos 3 Clientes
print(cliente_classic)
print(cliente_gold)
print(cliente_black)

# Realizamos operaciones con uno de ellos

""" Aun falta por realizar """

# GENERACION DE HTML

def generar_columnas(clientes):
    contenido_columnas = ""
    for cliente in clientes:
        contenido_columnas = f"""
            <tr>
                <th>{cliente.numeroCliente}</th>
                <th>{cliente.nombre}</th>
                <th>{cliente.apellido}</th>
                <th>{cliente.dni}</th>
            </tr>
        """
    return contenido_columnas

def generar_html(clientes):
    contenido = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reporte</title>
    </head>
    <body>
        <h1>Reporte</h1>
        <table border=1>
            <tr>
                <th>Número</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>DNI</th>
                <th>Transacciones</th>
            </tr>
            {generar_columnas(clientes)}
        </table>
    </body>
    </html>
    """

    nombre_archivo = "reporte.html"

    with open(nombre_archivo, "w") as arch:
        arch.write(contenido)
        
    print(f"Se genero el archivho{nombre_archivo}")
    return


def leer_json(nombre_archivo):
    with open(nombre_archivo, "r") as json_file:
        datos = json.load(json_file)
        
    return datos

def intancias_clases(datos):
    clientes = datos["clientes"]
    for cliente in clientes:
        if datos["tipo"] == "CLASSIC":
            return Classic(datos["numero"], datos["nombre"], datos["apellido"], datos["dni"], datos["transacciones"])
        elif datos["tipo"] == "GOLD":
            return Gold(datos["numero"], datos["nombre"], datos["apellido"], datos["dni"], datos["transacciones"])
        elif datos["tipo"] == "BLACK":
            return Black(datos["numero"], datos["nombre"], datos["apellido"], datos["dni"], datos["transacciones"])
    
    
datos = leer_json("prueba.json")
cliente = (intancias_clases(datos))
generar_html([cliente])